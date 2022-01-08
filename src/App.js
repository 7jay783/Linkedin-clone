import React,{useState} from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Network from './components/Network';

function App() {
  const [content, setContent] = useState('Home')
  return (
    <>
     <Navbar content={content} setContent={setContent}/>
    <div className="App">
      
     
      
          <div>
          {
          content==='Home'?(<Home/>) : (<Network/> )    
          }
            </div>    
              
      
    </div>
    </>
    
  );
}

export default App;
