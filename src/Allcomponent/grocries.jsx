import Structure from "../props/Structure";
import p12 from "../img/Grocries/g2.jpg";
import p14 from "../img/Grocries/g4.jpg";
import p15 from "../img/Grocries/g5.jpg";
import p16 from "../img/Grocries/g6.jpg";

import "../styles/none.css";
import "../styles/product.css";

function Grocries() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="cards">
            <div className="name_card">
              <h5>Grocries Market Collection</h5>
              <p>Revitalize your skin with our premium hydrating, purifying, and glowing face masks.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">

       

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
            title_product="Deep-cleansing peel-off mask that removes blackheads, dirt and excess oil without drying skin -off mask that removes blackheads -off mask that removes blackheads ."
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
            title_product="Deep-cleansing peel-off mask that removes blackheads, dirt and excess oil without drying skin -off mask that removes blackheads -off mask that removes blackheads ."
            price={310}
            delete={520}
          />
        </div>

      </div>
    </>
  );
}

export default Grocries;