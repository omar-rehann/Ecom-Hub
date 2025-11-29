import { useState } from "react"
import l1 from "../img/laptop/l1.webp"
import l2 from "../img/laptop/l2.webp"
import l3 from "../img/laptop/l3.webp"
import l4 from "../img/laptop/l4.webp"
import l5 from "../img/laptop/l5.webp"

import "../styles/details.css"
function Lapone(){
    const [photo,setphoto]=useState(l1);
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
                    <img src={l1} onClick={()=>change(l1)} alt="" />
                    <img src={l2} onClick={()=>change(l2)} alt="" />
                    <img src={l3} onClick={()=>change(l3)} alt="" />
                    <img src={l4} onClick={()=>change(l4)} alt="" />
                    <img src={l5} onClick={()=>change(l5)} alt="" />




                    </div>
                </div>

            </div>
            <div className="col-md-6">
<div className="text">
  <h3>High-Performance Laptops</h3>
  <h4>Top Picks for Work, Study, and Gaming</h4>
  <p>
    Discover powerful laptops designed to handle multitasking, creative work, gaming, 
    and everyday productivity. Each device offers a blend of performance, durability, 
    and sleek design—perfect for professionals, students, and creators who need a reliable machine.
  </p>
  <ul>
    <li>💻 Latest-generation processors for smooth performance</li>
    <li>⚡ Fast SSD storage and upgradable RAM options</li>
    <li>🎮 Integrated or dedicated GPUs for graphics-heavy tasks</li>
    <li>🔋 Long-lasting battery with fast charging technology</li>
    <li>🌐 Wi-Fi 6 / 6E and advanced connectivity ports</li>
  </ul>
  <h5>
    Starting from EGP 20,000 <del>EGP 25,000</del>
    <span>Save up to 5,000 EGP!</span>
  </h5>
  <div className="icon">
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star-half-stroke"></i>
    <i className="fa-regular fa-star"></i>
  </div>
</div>

            </div>
        </div>
       </div>
        </>
    )
}
export default Lapone