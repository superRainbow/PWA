# PWA

專案基於 [Create React App](https://github.com/facebook/create-react-app).

## 指令

- 開發模式：npm start
  ```
  執行此指令會自動開啟瀏覽器至 http://localhost:3000
  ```
- 模擬 PWA 環境
  ```
  ngrok http [port]
  ```
- 測試：npm test
- 打包：npm run build

  ```
  打包環境為正式環境

  * 註：
      打包的時候除了執行原本的 react-scripts build 以外，還要多執行一個 sw-precache。
      sw-precache 使用 sw-config.js 當設定檔，並打包 build/ 資料夾下的所有東西、忽略所有 .map 的檔案
  ```
