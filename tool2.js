// tool1.js

export const tool2Data = {
    title: "ツール2",
    description: "ツール2の説明です。",
    class: "tool2_content",
    content: `
        <textarea id="markdownArea" readonly></textarea>
        <button id="editBtn">編集</button>
        <button id="saveBtn" style="display:none">保存</button>

        <script>
            const area = document.getElementById("markdownArea")
            const editBtn = document.getElementById("editBtn")
            const saveBtn = document.getElementById("saveBtn")

            fetch('https://haozlq6lqg.execute-api.ap-southeast-2.amazonaws.com/test3/callback').then(r => r.text()).then(t => area.value = t)

                editBtn.onclick = () => {
                  area.removeAttribute("readonly")
                  editBtn.style.display = "none"
                  saveBtn.style.display = "inline"
                }
                saveBtn.onclick = () => {
                  fetch('https://haozlq6lqg.execute-api.ap-southeast-2.amazonaws.com/test3/callback', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ content: area.value })
                  }).then(() => {
                    area.setAttribute("readonly", true)
                    editBtn.style.display = "inline"
                    saveBtn.style.display = "none"
                  })
                }
        </script>
    `
};

// Lambdaを呼び出す関数
/*export function callLambda(question) {
    const apiEndpoint = 'https://haozlq6lqg.execute-api.ap-southeast-2.amazonaws.com/test3/callback';  // 実際のAPIエンドポイントに変更

    return fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: question })
    })
    .then(response => response.json())  // レスポンスをJSONとして処理
    .then(data => {
        return data.body;  // Lambdaの応答を返す
    })
    .catch(error => {
        console.error('Error calling Lambda:', error);
        return 'エラーが発生しました。';
    });
}*/

// フォーム送信時の処理
/*export function handleFormSubmission(event) {
    event.preventDefault();  // フォームのデフォルト送信動作を防ぐ

    const question = document.getElementById("userQuestion").value;  // ユーザーの入力を取得

    // 応答エリアに「読み込み中...」を表示
    document.getElementById("responseArea").textContent = "読み込み中...";

    // Lambdaを呼び出して結果を表示
    callLambda(question).then(response => {
        // レスポンスの内容をログに出力して確認
        console.log(response);
        //const cleanedText = response.replace(/\\/g, ''); 
        //const responseData = JSON.parse(cleanedText);
        document.getElementById("responseArea").textContent = response.text;  // Lambdaからの応答を表示
        console.log(document.getElementById("responseArea").textContent)
    });
}*/
