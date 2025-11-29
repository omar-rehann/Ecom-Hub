import { BrowserRouter ,Routes, Route } from "react-router-dom";

import Header from "./Allcomponent/header";
import Home from "./Miancomponent/home"
import About from "./Miancomponent/about"
import Blog from "./Miancomponent/blog"
import Contact from './Miancomponent/contact'
import Login from "./Allcomponent/login"
import Registerr from "./Miancomponent/register"
import Beauty from "./Miancomponent/beauty"
import Alllap from "./Miancomponent/alllap"
import Grocories from "./Miancomponent/Grocories"
import Shoess from "./Miancomponent/shoes"
import Watchess from "./Miancomponent/watch";
import Tshirts from "./Miancomponent/tshirt";
import Frang from "./Miancomponent/frang";
import Furn from "./Miancomponent/furn";
import Not from "./Detials/notfound"
import Mobile from "./Miancomponent/mobile";
import Footer from "./Allcomponent/footer"
import Product from "./Allcomponent/product"
import Love from "./Allcomponent/love"



// not use phonesfour
function App() {
 return(
  <>
   <BrowserRouter>
    <Header/> 

  <Routes>
    <Route path="*" element={<Home/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Registerr/>}></Route>
    <Route path="/beauty" element={<Beauty/>}></Route>
    <Route path="/laptop" element={<Alllap/>}></Route>
    <Route path="/Grocories" element={<Grocories/>}></Route>
    <Route path="/shoes" element={<Shoess/>}></Route>
    <Route path="/watches" element={<Watchess/>}></Route>
    <Route path="/shirts" element={<Tshirts/>}></Route>
    <Route path="/frang" element={<Frang/>}></Route>
     <Route path="/another" element={<Not/>}></Route>
      <Route path="/else" element={<Not/>}></Route>
      <Route path="/back" element={<Home/>}></Route>
        <Route path="/mobile" element={<Mobile/>}></Route>
        <Route path="/buy" element={<Product/>}></Route>
          <Route path="/love" element={<Love/>}></Route>




  </Routes>
       <Footer/>

  </BrowserRouter>
  </>
 )

}

export default App;
