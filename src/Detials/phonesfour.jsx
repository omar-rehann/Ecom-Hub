import { useState } from "react"
import s2 from "../img/Phones/p3.jpg"

import "../styles/details.css"
function Phonsesfour(){
    const [photo,setphoto]=useState(s2);
    function change(newsrc){
        setphoto(newsrc)
    }
    return(
        <>
       <div className="detials">
         <div className="row   align-items-center ">
            <div className="col-md-6">
                <div className="image">
                    <img src={photo}   id="photo" alt="" />
                    <div className="all_img">
                    <img src={s2} onClick={()=>change(s2)} alt="" />
                    </div>
                </div>

            </div>
            <div className="col-md-6">
               <div className="text">
  <h3>iPhone 17 Pro Max</h3>
  <h4>Apple Flagship Smartphone</h4>
  <p>
    Premium iPhone with advanced camera system, powerful A17 chip, and long battery life. 
    Designed for top-tier performance and smooth daily use. 
    Featuring a titanium frame for durability, ProMotion display with 120Hz refresh rate, 
    and enhanced iOS experience for productivity and entertainment.
  </p>
  <ul>
    <li>📸 Triple-lens Pro camera with 5x telephoto zoom</li>
    <li>⚡ A17 Pro chip for console-level gaming</li>
    <li>🔋 All-day battery with fast charging</li>
    <li>🌐 5G connectivity and Wi-Fi 6E support</li>
    <li>🔒 Advanced Face ID security</li>
  </ul>
  <h5>
    EGP 5000 <del>EGP 6000</del> 
    <span>Save 1000 EGP!</span>
  </h5>
  <div class="icon">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    <i class="fa-regular fa-star"></i>
  </div>

</div>

            </div>
        </div>
       </div>
        </>
    )
}
export default Phonsesfour