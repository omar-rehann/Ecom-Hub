import m1 from "../img/m1.webp"

import "../styles/details.css"
function Apple(){
   
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
  <h3>Apple AirPods Pro</h3>
  <h4>Premium Wireless Noise-Cancelling Earbuds</h4>

  <p>
    Experience immersive sound with Apple’s advanced Active Noise Cancellation, 
    Adaptive Transparency, and personalized audio features. 
    AirPods Pro deliver superior comfort, secure fit, and seamless integration 
    with all Apple devices—perfect for music, calls, workouts, and daily use.
  </p>

  <ul>
    <li>🎧 Active Noise Cancellation for immersive listening</li>
    <li>🔊 Transparency Mode to hear your surroundings clearly</li>
    <li>🛠 Personalized Spatial Audio for enhanced sound</li>
    <li>🔋 Up to 6 hours of listening time on a single charge</li>
    <li>📱 Instant pairing with Apple ecosystem (iPhone, iPad, Mac)</li>
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
export default Apple