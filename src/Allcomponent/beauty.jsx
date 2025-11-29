import Structure from "../props/Structure";
import p11 from "../img/beauty/b1.jpg";
import p12 from "../img/beauty/b2.jpg";
import p13 from "../img/beauty/b3.jpg";
import p14 from "../img/beauty/b4.jpg";
import p15 from "../img/beauty/b5.jpg";
import p16 from "../img/beauty/b6.jpg";

import "../styles/none.css";
import "../styles/product.css";

function Beauty() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="cards">
            <div className="name_card">
              <h5>Face Masks Collection</h5>
              <p>Revitalize your skin with our premium hydrating, purifying, and glowing face masks.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">

        {/* 1 - Hydrating Mask */}
        <div className="col-6 col-md-4 col-lg-3">
          <Structure
            img={p11}
            name_product="Hyaluronic Acid Hydrating Mask"
            text_product="Intense Moisture Boost"
            title_product="Sheet mask infused with hyaluronic acid and aloe vera for deep hydration and plump skin in 15 minutes."
            price={290}
            delete={490}
          />
        </div>

        {/* 2 - Clay Purifying Mask */}
        <div className="col-6 col-md-4 col-lg-3">
          <Structure
            img={p12}
            name_product="Green Clay Detox Mask"
            text_product="Deep Pore Cleansing"
            title_product="Natural French green clay mask that draws out impurities, controls oil and minimizes pores of all the worlds in all the face body."
            price={350}
            delete={590}
          />
        </div>

        {/* 3 - Vitamin C Glow Mask */}
        <div className="col-6 col-md-4 col-lg-3">
          <Structure
            img={p13}
            name_product="Vitamin C Brightening Mask"
            text_product="Radiance in 10 Minutes"
            title_product="Gel mask packed with vitamin C and niacinamide to brighten dull skin and fade dark spots instantly."
            price={320}
            delete={550}
          />
        </div>

        {/* 4 - Collagen Anti-Aging Mask */}
        <div className="col-6 col-md-4 col-lg-3">
          <Structure
            img={p14}
            name_product="Collagen Firming Gold Mask"
            text_product="Lifting & Smoothing"
            title_product="Luxurious gold foil sheet mask with marine collagen that firms skin and reduces fine lines."
            price={390}
            delete={650}
          />
        </div>

        {/* 5 - Charcoal Black Mask */}
        <div className="col-6 col-md-4 col-lg-3">
          <Structure
            img={p15}
            name_product="Activated Charcoal Peel-Off Mask"
            text_product="Blackhead Remover"
            title_product="Deep-cleansing peel-off mask that removes blackheads, dirt and excess oil without drying skin."
            price={280}
            delete={480}
          />
        </div>

        {/* 6 - Soothing Aloe Vera Mask */}
        <div className="col-6 col-md-4 col-lg-3">
          <Structure
            img={p16}
            name_product="Aloe Vera Calming Mask"
            text_product="Redness & Irritation Relief"
            title_product="Cooling gel mask with 98% pure aloe vera to soothe sensitive, irritated or sunburned skin."
            price={310}
            delete={520}
          />
        </div>

      </div>
    </>
  );
}

export default Beauty;