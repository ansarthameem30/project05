import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/about';
import Gallery from './pages/gallery/gallery';
import Home from './pages/home/home';
import Offer from './pages/offer/offer';
import Contact from './pages/contact/contact';
import Products from './pages/products/products';
import Notfound from './pages/notFound/notFound';
import Navbar from './components/navbar';
import Models from './pages/models/Models';


function App() {
  return (
    <BrowserRouter>
    <Navbar /> 
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='models' element={<Models/>}/>
        <Route path='offer' element={<Offer/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
       
    </BrowserRouter>
  );
}

export default App;
