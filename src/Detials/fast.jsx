import m1 from "../img/m3.webp"

import "../styles/details.css"
function Fast(){
   
    return(
        <>
       <div className="detials">
         <div className="row   align-items-center ">
            <div className="col-md-6">
                <div className="image">
                    <img src={m1} className="w-50"   id="photo" alt="" />
                    <div className="all_img">                    </div>
                </div>

            </div>
            <div className="col-md-6">
<div className="text">
  <h3>Fast Charging Adapter</h3>
  <h4>High-Speed Power Adapter</h4>

  <p>
    Enjoy rapid and efficient charging with this high-speed power adapter designed 
    for modern smartphones and tablets. Delivers stable power output, enhanced 
    safety protection, and universal compatibility—perfect for home, office, and travel.
  </p>

  <ul>
    <li>⚡ Supports fast charging for compatible devices</li>
    <li>🔌 Stable and efficient power output</li>
    <li>🔥 Multi-layer protection against overheating & overvoltage</li>
    <li>🌍 Universal compatibility with USB or Type-C cables</li>
    <li>👜 Compact and lightweight for easy travel</li>
  </ul>

  <h5>
    EGP 5000 <del>EGP 6000</del>
    <span>Save 1000 EGP!</span>
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
export default Fast