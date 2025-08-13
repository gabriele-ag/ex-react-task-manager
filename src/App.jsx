import { BrowserRouter, Routes, Route } from "react-router-dom"

// GlobalContext API
import { GlobalProvider } from "./contexts/GlobalContext"

// Layout & Pages
import GuestLayout from "./layouts/GuestLayout"
import AddTask from "./pages/AddTask"
import TaskList from "./pages/TaskList"


function App() {
  

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout/>}>
            <Route path="/" element={<AddTask />} />
            <Route path="/tasklist" element={<TaskList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
    </>
  )
}

export default App
