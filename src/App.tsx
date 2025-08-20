import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>LOGIN</h1>} />
        <Route path="/cadastro" element={<h1>CADASTRO</h1>} />
        <Route path="/home" element={<h1>HOME</h1>} />
        <Route path="/leads" element={<h1>LEADS</h1>} />
        <Route path="/perfil" element={<h1>PERFIL</h1>} />
      </Routes>
    </Router>
  )
}

export default App
