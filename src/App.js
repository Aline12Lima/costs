import {  BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './components/Pages/Home.js'
import  Company from './components/Pages/Company.js'
import Contact from './components/Pages/Contact.js'
import NewProject from './components/Pages/NewProject.js'
import Container from './components/Layout/Container.js'

function App() {
  return (

    <Router>
      <div>
        
        <Link to='/'> Home </Link>
        <Link to='/contact'> contact </Link>
        <Link to='/company'> Company </Link>
        <Link to='/newproject'> New Project</Link>
        

      </div>
      <Container customClass='min-heigth'>

         <Routes  >
          
           
              <Route exact path='/' element={<Home />} />
              <Route exact path='/company' element={<Company />} />
              <Route exact path='/contact' element={<Contact />} />
              <Route exact path='/newproject' element={<NewProject />} />
          
          
        </Routes>
        </Container>
       
      <footer>Footer</footer>
    </Router>
      
  );
}

export default App;
