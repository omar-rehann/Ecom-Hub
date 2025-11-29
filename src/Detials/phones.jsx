import { useState } from "react"
import s1 from "../img//Phones/0.png"
import s2 from "../img/Phones/1.png"
import s3 from "../img/Phones/2.png"
import s4 from "../img/Phones/3.png"
import s5 from "../img/Phones/4.png"
import "../styles/details.css"
function Phonses(){
    const [photo,setphoto]=useState(s1);
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
                    <img src={s3} onClick={()=>change(s3)} alt="" />
                    <img src={s4} onClick={()=>change(s4)} alt="" />
                    <img src={s5} onClick={()=>change(s5)} alt="" />
                    <img src={s1} onClick={()=>change(s1)} alt="" />



                    </div>
                </div>

            </div>
            <div className="col-md-6">
               <div className="text">
  <h3>iPhone 12 Pro Max</h3>
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
export default Phonses