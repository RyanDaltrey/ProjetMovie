import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import FilmsPage from "./Pages/FilmsPage";
import CategoriesPage from "./Pages/CategoriesPage";
import DetailsPage from "./Pages/DetailsPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./Components/Footer";
import { Container } from 'react-bootstrap';

function App() {
  return <>
    <BrowserRouter>
    <NavBar />
      <div className='p-5'></div>
      <Container>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/categories" element={<CategoriesPage/>} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
        </Container>
        <Footer />
    </BrowserRouter>
  </>;
}

export default App;

