// フォーム送信時の処理
document.getElementById("questionForm").addEventListener("submit", function(event) {
    event.preventDefault();  // フォームのデフォルト送信動作を防ぐ

    const question = document.getElementById("userQuestion").value;  // ユーザーの入力を取得

    // 応答エリアに「読み込み中...」を表示
    document.getElementById("responseArea").textContent = "読み込み中...";

    // API GatewayのURL（Lambdaのエンドポイント）
    const apiEndpoint = 'https://your-api-id.execute-api.us-west-2.amazonaws.com';

    // FetchでLambdaを呼び出し
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: question  // ユーザーの質問をLambdaに送信
        }),
    })
    .then(response => response.json())  // レスポンスをJSONに変換
    .then(data => {
        // Lambdaの応答を表示
        document.getElementById("responseArea").textContent = data.response;
    })
    .catch(error => {
        // エラー時はエラーメッセージを表示
        document.getElementById("responseArea").textContent = "エラーが発生しました。";
    });
});
