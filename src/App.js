import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import AllProduct from './page/AllProduct';
import Login from './page/Security/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allproducts' element={<AllProduct />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
