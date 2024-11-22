import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// OneSignalの初期化
if (typeof window !== 'undefined') {
  const OneSignal = window.OneSignal || [];
  OneSignal.push(function () {
    OneSignal.init({
      appId: '97f61e1e-6645-4807-9a94-2bb1e29ed4db', // あなたのアプリID
      serviceWorkerPath: '/React-Vite-PWA/OneSignalSDKWorker.js', // サービスワーカーのパス
      path: '/React-Vite-PWA/', // サブディレクトリ用のスコープ設定
      notifyButton: {
        enable: true, // 通知許可ボタンを有効化
      },
    });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
