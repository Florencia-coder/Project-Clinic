import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './components/test.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Test/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;