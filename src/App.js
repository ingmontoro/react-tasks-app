import './App.css';
import ingmontorodevlogo from './images/ingmontorodev-logo.png'
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="tasks-app">
      <div className='logo-container'>
        <img
          src={ingmontorodevlogo}
          className='logo'
          alt=''
        />
      </div>
      <div className='tasks-list'>
        <h1>Mis Tareas Prueba</h1>
        <TasksList />
      </div>
    </div>
  );
}

export default App;
