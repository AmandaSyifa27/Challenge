// import Service from "./Components/Service";
// import Header from "./Components/Header";
// import WhyUs from "./Components/WhyUs";
// import Testimonial from "./Components/Testimonial";
// import Card3 from "./Components/Card3";
// import Faq from "./Components/Faq";
// import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import Functions from "./Functions";
import DetailMobil from "./Pages/DetailMobil";
// import Form from 'react-bootstrap/Form';
// import ReactDOM from "react-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Functions />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/detailCar" element={<DetailMobil />} />
      </Routes>
    </Router>
  );
}

export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<SearchPage />)
