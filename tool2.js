// tool1.js

export const tool2Data = {
    title: "ツール2",
    description: "ツール2の説明です。",
    class: "tool2_content",
    content: `
        <textarea id="markdownArea" readonly>あいうえお</textarea>
        <button id="editBtn">編集</button>
        <button id="saveBtn" style="display:none">保存</button>
    `
};

// Lambdaを呼び出す関数
export function initializeMarkdownEditor({
  areaId = "markdownArea",
  editBtnId = "editBtn",
  saveBtnId = "saveBtn",
  apiEndpoint = 'https://haozlq6lqg.execute-api.ap-southeast-2.amazonaws.com/test3/callback'
} = {}) {
  const area = document.getElementById(areaId);
  const editBtn = document.getElementById(editBtnId);
  const saveBtn = document.getElementById(saveBtnId);

  // 初期データの取得
  /*fetch(apiEndpoint)
    .then(response => response.text())
    .then(text => {
      area.value = text;
    });*/


  // 編集ボタンの挙動
  editBtn.onclick = () => {
    area.removeAttribute("readonly");
    editBtn.style.display = "none";
    saveBtn.style.display = "inline";
  };

  // 保存ボタンの挙動
  saveBtn.onclick = () => {
    fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: area.value })
    }).then(() => {
      area.setAttribute("readonly", true);
      editBtn.style.display = "inline";
      saveBtn.style.display = "none";
    });
  };
}
