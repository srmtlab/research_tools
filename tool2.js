// tool1.js

export const tool2Data = {
    title: "ツール2",
    description: "ツール2の説明です。ツール2をテストします",
    class: "tool2_content",
    content: `
        <h3>質問を入力して送信</h3>
        <form id="questionForm2">
            <textarea id="userQuestion2" placeholder="質問を入力してください..." rows="4" cols="50" required></textarea><br>
            <button type="submit2">送信</button>
        </form>
        <div id="responseArea2">ここに応答が表示されます。</div>
    `
};

// Lambdaを呼び出す関数
export function callLambda(question) {
    const apiEndpoint = 'https://mgchb0zsn0.execute-api.ap-southeast-2.amazonaws.com/default/sampleFunction';  // 実際のAPIエンドポイントに変更

    return fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: question })
    })
    .then(response => response.json())  // レスポンスをJSONとして処理
    .then(data => {
        return data.response;  // Lambdaの応答を返す
    })
    .catch(error => {
        console.error('Error calling Lambda:', error);
        return 'エラーが発生しました。';
    });
}

// フォーム送信時の処理
export function handleFormSubmission2(event) {
    event.preventDefault();  // フォームのデフォルト送信動作を防ぐ

    const question = document.getElementById("userQuestion2").value;  // ユーザーの入力を取得

    // 応答エリアに「読み込み中...」を表示
    document.getElementById("responseArea2").textContent = "読み込み中...";

    // Lambdaを呼び出して結果を表示
    callLambda(question).then(response => {
        document.getElementById("responseArea").textContent = response;  // Lambdaからの応答を表示
    });
}
