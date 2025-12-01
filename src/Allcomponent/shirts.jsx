import Structure from "../props/Structure";
import f1 from "../img/clothes/f1.jpg";
import f2 from "../img/clothes/f2.jpg";
import f3 from "../img/clothes/f3.jpg";
import f4 from "../img/clothes/f4.jpg";
import f5 from "../img/clothes/f5.jpg";
import f6 from "../img/clothes/f6.jpg";
import f7 from "../img/clothes/f7.jpg";
import f8 from "../img/clothes/f8.jpg";
import n1 from "../img/clothes/n1.jpg";
import n2 from "../img/clothes/n2.jpg";
import n3 from "../img/clothes/n3.jpg";
import n4 from "../img/clothes/n4.jpg";
import n5 from "../img/clothes/n5.jpg";
import n6 from "../img/clothes/n6.jpg";
import n7 from "../img/clothes/n7.jpg";

import "../styles/product.css";

function Shirts() {
  return (
    <>
      {/* Section Title */}
      <div className="row">
        <div className="col-md-12">
          <div className="cards">
            <div className="name_card">
              <h5>All Shirts - Styled & Perfect</h5>
              <p>
                Premium men's shirts collection — unique designs, perfect fit, and top-tier fabrics for every style and occasion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row">

       

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f2}
            name_product="Deep Navy Mandarin Shirt"
            text_product="Eastern Touch Elegance"
            title_product="Stand collar, premium twill fabric with subtle texture."
            price={1550}
            delete={2100}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f3}
            name_product="Midnight Black Satin Shirt"
            text_product="Night Out Essential"
            title_product="Luxurious satin finish, perfect for evening events and parties."
            price={1950}
            delete={2600}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f4}
            name_product="Stone Grey Flannel Shirt"
            text_product="Winter Warmth"
            title_product="Soft brushed flannel, cozy yet stylish for cold days."
            price={1250}
            delete={1700}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f5}
            name_product="Sky Blue Pin Stripe Shirt"
            text_product="Corporate Power Move"
            title_product="Fine pinstripes on premium cotton-poplin, non-iron finish."
            price={1450}
            delete={1950}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f6}
            name_product="Sand Beige Pure Linen Shirt"
            text_product="Summer Breeze"
            title_product="Ultra-breathable 100% linen, relaxed fit for hot weather."
            price={1650}
            delete={2250}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f7}
            name_product="Charcoal Hidden Placket Shirt"
            text_product="Clean & Modern"
            title_product="Concealed buttons, matte fabric, sharp minimalist look."
            price={1750}
            delete={2400}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f8}
            name_product="Dusty Rose Silk-Blend Shirt"
            text_product="Statement Piece"
            title_product="Silk-cotton blend with natural sheen, limited edition color."
            price={1899}
            delete={2550}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={n1}
            name_product="Olive Green Military Shirt"
            text_product="Rugged Elegance"
            title_product="Epaulets and flap pockets, heavy-duty cotton with vintage wash."
            price={1399}
            delete={1899}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={n2}
            name_product="Burgundy Velvet Touch Shirt"
            text_product="Luxury Winter"
            title_product="Soft velvet-feel fabric, rich color perfect for holidays."
            price={1999}
            delete={2700}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={n3}
            name_product="Cream Cuban Collar Shirt"
            text_product="Vacation Vibes"
            title_product="Open camp collar, relaxed fit, lightweight rayon blend."
            price={1299}
            delete={1750}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={n4}
            name_product="Teal Blue Denim Shirt"
            text_product="Casual Cool"
            title_product="Soft-washed denim, double chest pockets, goes with everything."
            price={1499}
            delete={1999}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={n5}
            name_product="Mustard Yellow Oxford Shirt"
            text_product="Bold & Confident"
            title_product="Heavy oxford cloth, button-down collar, standout color."
            price={1399}
            delete={1900}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={n6}
            name_product="Mocha Brown Check Shirt"
            text_product="Smart Layering"
            title_product="Subtle windowpane check, perfect under blazers or solo."
            price={1599}
            delete={2150}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={n7}
            name_product="Royal Purple Dress Shirt"
            text_product="King's Choice"
            title_product="Rich purple tone, mother-of-pearl buttons, pure luxury."
            price={2099}
            delete={2800}
          />
        </div>

      </div>
    </>
  );
}

export default Shirts;