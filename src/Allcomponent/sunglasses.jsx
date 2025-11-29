
import Structure from "../props/Structure"
import ss1 from "../img/glasses/ss1.webp"
import ss2 from "../img/glasses/ss2.webp"
import ss3 from "../img/glasses/ss3.webp"
import ss4 from "../img/glasses/ss4.webp"


import "../styles/product.css"

function Sunglasses() {
return (
  <>
    {/* Section Title */}
    <div className="row">
      <div className="col-md-12">
        <div className="cards">
          <div className="name_card">
            <h5>SunGlasses</h5>
            <p>
              Discover stylish sunglasses for every occasion — protect your eyes, enhance your look, and enjoy superior comfort and durability.
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
          img={ss1}
          name_product="Ray-Ban Aviator"
          text_product="Classic Aviator Sunglasses"
          title_product="Timeless design with UV protection lenses, perfect for outdoor activities and daily wear."
           price={21000}
            delete={25000}
        />
      </div>

      {/* 2 */}
      <div className="col-md-3">
        <Structure
          img={ss2}
          name_product="Oakley Holbrook"
          text_product="Sporty Sunglasses"
          title_product="Durable frame with polarized lenses, ideal for sports, driving, and sunny adventures."
           price={27000}
            delete={31000}
        />
      </div>

      {/* 3 */}
      <div className="col-md-3">
        <Structure
          img={ss3}
          name_product="Prada Minimal Baroque"
          text_product="Fashion Designer Sunglasses"
          title_product="Elegant and unique frame design, combining fashion with superior UV protection."
           price={39000}
            delete={42000}
        />
      </div>

      {/* 4 */}
      <div className="col-md-3">
        <Structure
          img={ss4}
          name_product="Persol PO0714"
          text_product="Luxury Foldable Sunglasses"
          title_product="Iconic folding design, premium lenses, and lightweight frame for effortless style and comfort."
          price={7000}
            delete={10000}
        />
      </div>

    </div>
  </>
);


}

export default Sunglasses
