import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TasksPage } from "./pages/TaskPage";
import { TasksFormPage } from './pages/TaskFormPage';
import { Navigation  } from './components/Navigation';


//aqui dirije las rutas
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to= "/tasks"/>} />
        <Route path="/tasks" element={<TasksPage/>} />
        <Route path="/tasks-create" element={<TasksFormPage/>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;