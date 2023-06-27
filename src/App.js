import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
function App() {
  return ( 
    <div className="App"  style={{background:"" ,marginTop:"70px"}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />}></Route>
          <Route path="/product/:ProductId" element={<ProductDetail />}></Route>
          {/* ProductId is used as params by the help of use Params */}
          {/* <Route>404 NOT FOUND</Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
