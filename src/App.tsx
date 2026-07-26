import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './app/page'
import Force from './app/prototypes/force/page'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prototypes/force" element={<Force />} />
      </Routes>
    </BrowserRouter>
  )
}
