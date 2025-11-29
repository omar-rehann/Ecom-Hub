
import Structure from "../props/Structure"
import t1 from "../img/tt1.webp"
import t2 from "../img/tt2.webp"
import t3 from "../img/tt3.webp"


import "../styles/product.css"

function Tablet() {
return (
  <>
    {/* Section Title */}
    <div className="row">
      <div className="col-md-12">
        <div className="cards">
          <div className="name_card">
            <h5>Tablets</h5>
            <p>
              Explore the latest tablets for work, study, and entertainment — slim, powerful, and designed for on-the-go productivity.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Products */}
    <div className="row">

      {/* 1 */}
      <div className="col-md-3">
        <Structure
          img={t1}
          name_product="iPad Pro 12.9"
          text_product="Apple High-End Tablet"
          title_product="Powerful M2 chip, Liquid Retina XDR display, and perfect for professional work or creative tasks."
           price={39000}
            delete={42000}
        />
      </div>

      {/* 2 */}
      <div className="col-md-3">
        <Structure
          img={t2}
          name_product="Samsung Galaxy Tab S9"
          text_product="Premium Android Tablet"
          title_product="Vivid AMOLED display, Snapdragon 8 Gen 2 processor, ideal for multitasking and media consumption."
           price={42000}
            delete={45000}
        />
      </div>

      {/* 3 */}
      <div className="col-md-3">
        <Structure
          img={t3}
          name_product="Lenovo Tab P12 Pro"
          text_product="Versatile Productivity Tablet"
          title_product="OLED screen, stylus support, and strong battery life for work and entertainment."
           price={19000}
            delete={22000}
        />
      </div>

      

    </div>
  </>
);



}

export default Tablet
