import { Link } from "react-router-dom";
import "../styles/all.css"
import "../styles/header.css"
import Logo from "../img/icon.png"
import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
function Header() { 
  const [data,setdata]=useState(0);
  const [love,setlove]=useState(0);
  // show all length in side bar
  useEffect(()=>{
    function savedata(){
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const love = JSON.parse(localStorage.getItem("love") || "[]");
    setdata(cart);
    setlove(love)
    }
    savedata();
    let interval=setInterval(savedata,3000);
    return()=>clearInterval(interval)

  },[])

  

  return (
    <>
    
      <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
         <a className="navbar-brand d-flex align-items-center gap-2" href="#">
  <i class="fas fa-shopping-bag" style={{"font-size":" 26px","color": "#ff6f00;"}}></i>
  
  <span style={{"font-weight": "700" ,"font-size": "20px" ,"letter-spacing": "1px"}}>
    Ecom Hub
  </span>
</a>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Ecommerce Website</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                 <Link to="/home" className="links" onClick={()=>window.scrollTo(0,0)}>Home</Link>
                </li>

                <li className="nav-item">
                  <Link to="/about" className="links" onClick={()=>window.scrollTo(0,0)}>About</Link>

                </li>
                <li className="nav-item">
                 <Link to="/Blog" className="links" onClick={()=>window.scrollTo(0,0)}>Blog</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="links" onClick={()=>window.scrollTo(0,0)}>Contact Us</Link>

                </li>
                <li className="nav-item">
                <Link to="/login" className="links" onClick={()=>window.scrollTo(0,0)}>Login / Register</Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Other category
                  </a>

                  <ul className="dropdown-menu">
                    <li><Link to="/beauty" className="links" onClick={()=>window.scrollTo(0,0)}>Beauty</Link></li>
                    <li><Link to="/laptop" className="links" onClick={()=>window.scrollTo(0,0)}>Laptop</Link></li>
                      <li><Link to="/Grocories" className="links" onClick={()=>window.scrollTo(0,0)}>Grocories</Link></li>
                      <li><Link to="/frang" className="links" onClick={()=>window.scrollTo(0,0)}>Fragrances</Link></li>
                      <li><Link to="/Furuntire" className="links" onClick={()=>window.scrollTo(0,0)}>Furuntire</Link></li>
                      <li><Link to="/shoes" className="links" onClick={()=>window.scrollTo(0,0)}>Shoes Fashion</Link></li>
                      <li><Link to="/shirts" className="links" onClick={()=>window.scrollTo(0,0)}>Mens Shirts</Link></li>
                      <li><Link to="/watches" className="links" onClick={()=>window.scrollTo(0,0)}>Mens Watches</Link></li>
                      <li><Link to="/mobile" className="links" onClick={()=>window.scrollTo(0,0)}>Mobile Acsseories</Link></li>
                      <li><Link to="/another" className="links" onClick={()=>window.scrollTo(0,0)}>Another Item</Link></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                      <li><Link to="/else " className="links" onClick={()=>window.scrollTo(0,0)}>Somthing another item</Link></li>
                  </ul>
                </li>
              </ul>

             {/* one icon */}
               <form action="" className="icon ">
                <Link to="/buy" onClick={() => window.scrollTo(0, 0) }  className="w-100">
  <button className="btn btn-outline-primary w-100 mt-5">
    <i className="fa-solid fa-bag-shopping"></i>
    <span className="buy">  {JSON.parse(localStorage.getItem('cart') || '[]').length}
</span>
  </button>
</Link>

               
               

              </form>
              {/* two icon */}
              <form action="" className="icon ">
                <Link to="/love" onClick={() => window.scrollTo(0, 0)} className="w-100">
  <button className="btn btn-outline-primary w-100 mt-5">
      <i className="fa-regular fa-heart me-2"></i>
    <span className="love">  {JSON.parse(localStorage.getItem('love') || '[]').length}
</span>
  </button>
</Link>

               
               

              </form>
               
             
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Header;
