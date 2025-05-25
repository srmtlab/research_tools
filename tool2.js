// tool1.js

export const tool2Data = {
    title: "ツール2",
    description: "ツール2の説明です。",
    class: "tool2_content",
    content: `
        <div class="markdown-editor">
            <textarea id="markdownArea" readonly></textarea>
            <div class="button-group">
                <button id="editBtn">編集</button>
                <button id="saveBtn" style="display:none">保存</button>
            </div>
        </div>
    `
};

// Lambdaを呼び出す関数
export function initializeMarkdownEditor({
    areaId = "markdownArea",
    editBtnId = "editBtn",
    saveBtnId = "saveBtn",
    apiEndpoint = 'https://bwwmm2hzxb.execute-api.ap-southeast-2.amazonaws.com/test/wordlist'
} = {}) {
    const area = document.getElementById(areaId);
    const editBtn = document.getElementById(editBtnId);
    const saveBtn = document.getElementById(saveBtnId);

    if (!area || !editBtn || !saveBtn) {
        console.error('必要な要素が見つかりません');
        return;
    }

    // 初期データの取得
    fetch(apiEndpoint, {
        method: 'GET',
        headers: {
            'Accept': 'text/plain'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('ネットワークエラーが発生しました');
            }
            return response.text();
        })
        .then(text => {
            area.value = text;
        })
        .catch(error => {
            console.error('データの取得に失敗しました:', error);
            area.value = 'データの読み込みに失敗しました。';
        });

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
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('保存に失敗しました');
            }
            area.setAttribute("readonly", true);
            editBtn.style.display = "inline";
            saveBtn.style.display = "none";
        })
        .catch(error => {
            console.error('保存に失敗しました:', error);
            alert('保存に失敗しました。もう一度お試しください。');
        });
    };
}
