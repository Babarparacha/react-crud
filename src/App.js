import logo from './logo.svg';
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/update' element={<Update/>}/>
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
