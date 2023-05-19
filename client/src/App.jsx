import './App.css';
//for  routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodaysTaskList from './pages/TodaysTaskList';
import WeeksTaskList from './pages/WeeksTaskList';
import EditTask from './pages/EditTask';
import TasksList from './pages/TasksList';
import AddTask from './pages/AddTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<TodaysTaskList />} />
        <Route path='/weeks-tasks' element={<WeeksTaskList />} />
        <Route path='/add-task' element={<AddTask />} />
        <Route path='/edit-task' element={<EditTask />} />
        <Route path='/all-tasks' element={<TasksList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
