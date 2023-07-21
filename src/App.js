import { Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Header from '../src/components/Header/Header';
import Reviews from '../src/components/Reviews/Reviews';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import HomeReview from './components/HomeReview/HomeReview';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<><Home></Home><HomeReview></HomeReview></>}></Route>
        <Route path='/home' element={<><Home></Home><HomeReview></HomeReview></>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
