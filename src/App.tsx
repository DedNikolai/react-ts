import { FC } from "react";
import './style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import TodoItemPage from './pages/TodoItemPage';
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

const App: FC = () =>  {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<ProtectedRoute><Todos /></ProtectedRoute>} />
          <Route path="/todos/:id" element={<ProtectedRoute><TodoItemPage /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
