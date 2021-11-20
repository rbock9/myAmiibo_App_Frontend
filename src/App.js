import './App.css';

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Home";
import Amiibos from "./pages/Amiibos";
import Mycollection from "./pages/Mycollection";


function App() {

  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://rbock-myamiibo-app-backend.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/mycollection" element={<Mycollection URL={URL}/>}/>
        <Route exact path="/amiibos" element={<Amiibos URL={URL}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
