import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/index';
import Home from './pages/Home/iindex';
import AuthorPage from './pages/Author';

const App = () => {
  return (
    <BrowserRouter>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/author/:id' element={<AuthorPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
