import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuestLayout from "./layouts/GuestLayout"
import AddTask from "./pages/AddTask"
import TaskList from "./pages/TaskList"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout/>}>
          <Route path="/" element={<AddTask />} />
          <Route path="/tasklist" element={<TaskList />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
