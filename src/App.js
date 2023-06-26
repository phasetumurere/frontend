import React from 'react'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddUser from './users/AddUser';


export default function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>        
          <Route exact path="/users" element={<Home />} />
          <Route exact path='/users/addNew' element={<AddUser/>} />
        </Routes>
      </Router>
    </div>
  )
}
