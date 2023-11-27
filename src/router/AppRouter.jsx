import React from 'react'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Navbar from '../components/Navbar'
import Main from '../pages/Main'
import About from '../pages/About';
import NewProject from '../pages/NewProject';
import ProjectList from '../pages/ProjectList';
import Contact from '../pages/Contact';
import UpdateProject from '../pages/UpdateProject';
// import UpdateProduct from '../pages/UpdateProduct';
const AppRouter = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
<Route path ="/" element={<Main/>}/>
<Route path ="/about" element={<About/>}/>
{/* <Route path ="/new-project" element={<NewProject/>}/> */}
<Route path ="/project" element={<ProjectList/>}/>
<Route path ="/contact" element={<Contact/>}/>
<Route path ="/update-project" element={<UpdateProject/>}/>
<Route path ="*" element={<Main/>}/>

    </Routes>

    </Router>
  )
}

export default AppRouter