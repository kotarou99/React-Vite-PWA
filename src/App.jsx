import { useEffect, useState } from 'react';
import './App.css';
import OneSignal from 'react-onesignal';

function App() {
  const [tasks, setTasks] = useState([]);

  // OneSignalの初期化
  useEffect(() => {
    (async () => {
      await OneSignal.init({
        appId: '3f2f3975-7bef-45d1-a40b-5f47602517ea',
        serviceWorkerParam: {
          scope: '/React-Vite-PWA/',
        },
        serviceWorkerPath: '/React-Vite-PWA/OneSignalSDKWorker.js',
      });
    })();
  }, []);  
  
  // プッシュ通知を送信する関数
  const sendNotification = async () => {
    try {
      const response = await OneSignal.postNotification({
        contents: { en: "This is a test notification!" },
        headings: { en: "Hello!" },
        included_segments: ["Subscribed Users"],
      });
      console.log("Notification sent:", response);
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <button onClick={sendNotification}>Send Test Notification</button>
    </div>
  );
}

export default App;

// カメラ機能のコード
// import { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [stream, setStream] = useState(null);

//   // Start camera
//   const startCamera = async () => {
//     try {
//       const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
//       setStream(mediaStream);
//     } catch (error) {
//       console.error('Error accessing camera:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>React Vite PWA</h1>
//       <button onClick={startCamera}>Start Camera</button>
//       {stream && (
//         <video
//           autoPlay
//           playsInline
//           muted
//           ref={(video) => {
//             if (video) video.srcObject = stream;
//           }}
//           style={{ width: '100%', maxWidth: '500px', marginTop: '20px' }}
//         ></video>
//       )}
//     </div>
//   );
// }

// export default App;
