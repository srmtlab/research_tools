# research_tools

- 研究室内で利用できる便利ツールを作成する
- Slackチャンネル：wg_研究室内便利ツール開発
- フロントエンド部分を非公開GitHub Pagesで作成
  - 静的機能をpythonでわざわざやるべき？
    - javascriptよりもpythonの方が書きやすいかも
  - LLMなどのAPIを使った動的なバックエンドはAWS Lambdaで実行(とりあえず担当する機能ごとにLambdaを作成，最終的に白松研究室固有のアカウントに移す)
    - 月100万リクエストまでは無料，多分余裕
