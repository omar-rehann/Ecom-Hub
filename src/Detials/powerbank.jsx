import m2 from "../img/m4.webp"

import "../styles/details.css"
function Powerbank(){
   
    return(
        <>
       <div className="detials">
         <div className="row   align-items-center ">
            <div className="col-md-6">
                <div className="image">
                    <img src={m2} className="w-50"   id="photo" alt="" />
                    <div className="all_img">                    </div>
                </div>

            </div>
            <div className="col-md-6">
<div className="text">
  <h3>20,000mAh Fast Charging Power Bank</h3>
  <h4>High-Capacity Portable Battery Pack</h4>

  <p>
    Stay powered all day with a durable 20,000mAh power bank featuring 
    fast charging, dual USB outputs, and smart protection technology. 
    Perfect for travel, work, emergencies, and outdoor use—compatible 
    with all phones and USB-powered devices.
  </p>

  <ul>
    <li>🔋 20,000mAh high-capacity battery</li>
    <li>⚡ Fast charging output (up to 22.5W)</li>
    <li>🔌 Dual USB + Type-C ports</li>
    <li>🛡️ Multi-layer safety protection (Overheat/Overcharge)</li>
    <li>📱 Compatible with all smartphones & gadgets</li>
  </ul>

  <h5>
    EGP 950 <del>EGP 1,300</del>
    <span>Save 350 EGP!</span>
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
export default Powerbank