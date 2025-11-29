import Structure from "../props/Structure";
import f1 from "../img/Furuntire/f1.jpg";
import f2 from "../img/Furuntire/f2.jpg";
import f3 from "../img/Furuntire/f3.jpg";
import f4 from "../img/Furuntire/f4.jpg";
import f5 from "../img/Furuntire/f5.jpg";
import f6 from "../img/Furuntire/f6.jpg";
import f7 from "../img/Furuntire/f7.jpg";

import "../styles/product.css";

function Furniture() {
  return (
    <>
      {/* Section Title */}
      <div className="row">
        <div className="col-md-12">
          <div className="cards">
            <div className="name_card">
              <h5>Modern Luxury Furniture</h5>
              <p>
                Transform your home with our premium furniture collection — handcrafted designs, high-quality materials, and timeless elegance for living room, bedroom & office.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row">

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={f1}
            name_product="Chesterfield Leather Sofa 3-Seater"
            text_product="Classic British Luxury"
            title_product="Genuine aniline leather, deep button tufting, solid hardwood frame, lifetime warranty."
            price={48500}
            delete={67900}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={f2}
            name_product="Scandinavian Velvet Corner Sofa"
            text_product="Modern L-Shape"
            title_product="Soft emerald velvet, modular design, high-density foam, includes throw pillows of all the world ."
            price={38900}
            delete={52000}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={f3}
            name_product="Italian Marble Dining Table 8 Seats"
            text_product="Carrara Marble Top"
            title_product="Real Italian marble, stainless steel gold legs, 240×100 cm, seats 8 comfortably."
            price={67900}
            delete={89000}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={f4}
            name_product="King Size Upholstered Bed with Storage"
            text_product="Hotel Style Bedroom"
            title_product="Premium linen fabric, hydraulic storage, winged headboard 180×200 cm."
            price={32900}
            delete={45900}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={f5}
            name_product="Minimalist TV Unit with LED"
            text_product="Floating Wall Design"
            title_product="High-gloss white, tempered glass shelves, hidden cable management."
            price={14900}
            delete={21500}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={f6}
            name_product="Solid Teak Wood Coffee Table"
            text_product="Natural Nordic Style"
            title_product="100% solid teak, live edge design, handcrafted, water-resistant finish."
            price={18900}
            delete={25900}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={f7}
            name_product="Executive Leather Office Chair"
            text_product="Ergonomic Boss Chair"
            title_product="Genuine leather, aluminum base, multi-lock mechanism, lumbar support."
            price={12900}
            delete={17900}
          />
        </div>

      </div>
    </>
  );
}

export default Furniture;