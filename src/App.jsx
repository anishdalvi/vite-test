import './App.css'    
import { BrowserRouter,Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar_eg from './components/navbar/Navbar_eg'
import Tp from './components/Tp'
import Test1 from './components/navbar/Test1'
import Test2 from './components/navbar/Test2'
import Test3 from './components/navbar/Test3'

function App() {
  

  return (
    <>
    <BrowserRouter>
    
    <Navbar_eg />
    
      
    
      <Routes>
        <Route path="/" element={<Tp />} />
        
        <Route path="test1" element={<Test1 />} />
        <Route path="test2" element={<Test2 />} />
        <Route path="test3" element={<Test3 />} />
        
       
      </Routes>
     
      
    
    </BrowserRouter>
    </>
  )
}

export default App


