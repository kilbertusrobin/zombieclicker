import './App.css'
import Layout from './layout/layout'
import LayoutValise from './layout/layoutValise';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      <div className='w-screen h-screen'>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='/valise' element={<LayoutValise />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
