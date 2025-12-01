import Structure from "../props/Structure";
import f1 from "../img/clothes/shoes1.png";
import f2 from "../img/clothes/shoes2.png";
import f3 from "../img/clothes/shoes3.png";
import f4 from "../img/clothes/shoes5.png";
import f5 from "../img/clothes/shoes6.png";
import f6 from "../img/clothes/shoes7.png";
import f7 from "../img/clothes/shoes8.png";

import "../styles/product.css";

function Shoes() {
  return (
    <>
      {/* Section Title */}
      <div className="row">
        <div className="col-md-12">
          <div className="cards">
            <div className="name_card">
              <h5>All Shoes - Premium Collection</h5>
              <p>
                Step up your style with our handpicked men's footwear — from classic leather shoes to modern sneakers and luxury boots.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row">

        {/* Shoe 1 */}
        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f1}
            name_product="Black Leather Oxford Cap-Toe"
            text_product="Timeless Formal"
            title_product="Handcrafted full-grain leather, Goodyear welted sole, perfect for suits."
            price={3499}
            delete={4899}
          />
        </div>

        {/* Shoe 2 */}
        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f2}
            name_product="Tan Suede Chelsea Boots"
            text_product="Smart Casual Icon"
            title_product="Premium Italian suede, elastic side panels, lightweight rubber sole for all-day comfort."
            price={3999}
            delete={5500}
          />
        </div>

        {/* Shoe 3 */}
        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f3}
            name_product="White Minimal Leather Sneakers"
            text_product="Clean & Modern"
            title_product="Genuine calf leather upper, extra cushioned insole."
            price={2799}
            delete={3799}
          />
        </div>

        {/* Shoe 4 */}
        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f4}
            name_product="Brown Double Monk Strap"
            text_product="Bold Elegance"
            title_product="Polished crust leather, dual buckle design, Blake stitch construction for flexibility."
            price={4299}
            delete={5900}
          />
        </div>

        {/* Shoe 5 */}
        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f5}
            name_product="Navy Knit Performance Sneakers"
            text_product="Comfort Meets Style"
            title_product="Breathable flyknit upper, memory foam insole, ultra-light sole ."
            price={2499}
            delete={3400}
          />
        </div>

        {/* Shoe 6 */}
        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f6}
            name_product="Dark Brown Combat Boots"
            text_product="Rugged Luxury"
            title_product="Water-resistant leather, heavy-duty lug sole, padded collar for tough weather."
            price={4499}
            delete={6200}
          />
        </div>

        {/* Shoe 7 */}
        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f7}
            name_product="Black Patent Leather Loafers"
            text_product="Evening & Wedding"
            title_product="Mirror shine patent finish, leather lining, perfect with tuxedo ."
            price={3899}
            delete={5300}
          />
        </div>

      </div>
    </>
  );
}

export default Shoes;