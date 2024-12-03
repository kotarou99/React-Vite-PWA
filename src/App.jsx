// import { useEffect,useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import OneSignal from 'react-onesignal'

// function App() {
//   useEffect(() => {
//     (async() => {
//       OneSignal.init({ 
//         appId: '3f2f3975-7bef-45d1-a40b-5f47602517ea', 
//       })
//     })()
//   }, [])
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
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
