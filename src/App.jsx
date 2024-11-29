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
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

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

  // タスクを追加する関数
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // タスクを削除する関数
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
