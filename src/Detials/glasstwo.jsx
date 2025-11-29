import ss1 from "../img/glasses/ss2.webp"

import "../styles/details.css"
function Glasstwo(){
    return(
        <>
       <div className="detials">
         <div className="row   align-items-center ">
            <div className="col-md-6">
                <div className="image">
                    <img src={ss1}  className="w-50" id="photo" alt="" />
                    <div className="all_img">
                 



                    </div>
                </div>

            </div>
            <div className="col-md-6">
 <div className="text">
  <h3>SmartVision AR Glasses</h3>
  <h4>Advanced Augmented Reality Eyewear</h4>

  <p>
    Experience the future of augmented reality with SmartVision AR Glasses. 
    Combining sleek design, high-resolution display, and intuitive controls, 
    these glasses overlay digital information seamlessly onto the real world, 
    enhancing productivity, entertainment, and navigation.
  </p>

  <ul>
    <li>🕶 High-resolution AR display for immersive visuals</li>
    <li>⚡ Lightweight and comfortable design for all-day wear</li>
    <li>🔋 Long-lasting battery with quick recharge</li>
    <li>🌐 Wireless connectivity with smartphones and cloud apps</li>
    <li>🔒 Secure authentication and privacy features</li>
  </ul>

  <h5>
    EGP 7500 <del>EGP 9000</del>
    <span>Save 1500 EGP!</span>
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
export default Glasstwo