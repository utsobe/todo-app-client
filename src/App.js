import Header from "./shared/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CompletedTask from "./pages/CompletedTask";
import Todo from "./pages/Todo";
import Calender from "./pages/Calender";

function App() {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/c-task" element={<CompletedTask />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/calender" element={<Calender />} />
        </Routes>
      </Header>
    </>
  );
}

export default App;
