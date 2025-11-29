import m2 from "../img/m2.webp"

import "../styles/details.css"
function Samsung(){
   
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
  <h3>Samsung Galaxy Buds2 Pro</h3>
  <h4>Premium Wireless Hi-Fi Sound Earbuds</h4>

  <p>
    Enjoy studio-quality audio with Samsung’s advanced Hi-Fi 24-bit sound, 
    intelligent Active Noise Cancellation, and comfortable ergonomic design. 
    Galaxy Buds2 Pro deliver rich, clear sound and seamless connectivity with 
    Samsung Galaxy devices—perfect for music, calls, travel, and workouts.
  </p>

  <ul>
    <li>🎧 24-bit Hi-Fi audio for crystal-clear sound</li>
    <li>🔇 Intelligent Active Noise Cancellation</li>
    <li>🌬️ Ambient Mode to hear surroundings naturally</li>
    <li>🔋 Up to 5 hours playback with ANC on (18 hours with case)</li>
    <li>📱 Auto-switch & seamless pairing with Galaxy ecosystem</li>
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
export default Samsung