import Structure from "../props/Structure"
import g1 from "../img/glasses/g1.jpg"
import g2 from "../img/glasses/g2.jpg"
import g3 from "../img/glasses/g3.jpg"
import g4 from "../img/glasses/g4.jpg"
import g5 from "../img/glasses/g5.jpg"
import g6 from "../img/glasses/g6.jpg"
import g7 from "../img/glasses/g7.jpg"
import "../styles/none.css"
import "../styles/product.css"

function OtherGlasses() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="cards">
            <div className="name_card">
              <h5>Smart Glasses</h5>
              <p>
                Explore the latest smart glasses combining sleek design, AR features, and advanced technology for enhanced productivity and entertainment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">

        {/* 1 */}
        <div className="col-md-3">
          <Structure
            img={g1}
            name_product="SmartVision AR Glasses"
            text_product="Advanced Augmented Reality Glasses"
            title_product="High-resolution AR display, lightweight design, and intuitive controls for immersive augmented reality experience."
            price={7500}
            delete={9000}
          />
        </div>

        {/* 2 */}
        <div className="col-md-3">
          <Structure
            img={g2}
            name_product="NextGen AR Spectacles"
            text_product="Premium AR Eyewear"
            title_product="Stylish smart glasses with seamless connectivity, long-lasting battery, and adaptive display for work and entertainment."
            price={6800}
            delete={8200}
          />
        </div>

        {/* 3 */}
        <div className="col-md-3">
          <Structure
            img={g3}
            name_product="VisionPro Smart Glasses"
            text_product="High-Tech AR Glasses"
            title_product="Augmented reality glasses offering real-time notifications, immersive visuals, and comfortable all-day wear."
            price={7200}
            delete={8800}
          />
        </div>

        {/* 4 */}
        <div className="col-md-3">
          <Structure
            img={g4}
            name_product="AR Explorer Glasses"
            text_product="Reliable Smart Eyewear"
            title_product="Perfect for navigation, AR apps, and interactive experiences, with durable frame and sleek design."
            price={6500}
            delete={7900}
          />
        </div>

       

      

      </div>
    </>
  );
}

export default OtherGlasses;
