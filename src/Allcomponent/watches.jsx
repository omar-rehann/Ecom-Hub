import Structure from "../props/Structure";
import w1 from "../img/watches/w1.jpg";
import w2 from "../img/watches/w2.jpg";
import w3 from "../img/watches/w3.jpg";
import w4 from "../img/watches/w4.jpg";
import w5 from "../img/watches/w5.jpg";
import w6 from "../img/watches/w6.jpg";
import w7 from "../img/watches/w7.jpg";
import w8 from "../img/watches/w8.jpg";
import w9 from "../img/watches/w9.jpg";

import "../styles/product.css";

function Watches() {
  return (
    <>
      {/* Section Title */}
      <div className="row">
        <div className="col-md-12">
          <div className="cards">
            <div className="name_card">
              <h5>Luxury Men's Watches</h5>
              <p>
                Elevate your wrist game with our exclusive collection of premium timepieces — Swiss movements, sapphire crystal, and timeless designs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row">

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={w1}
            name_product="Rolex Datejust 41 Silver Dial"
            text_product="Iconic Dress Watch"
            title_product="Stainless steel, Jubilee bracelet, automatic movement, sapphire crystal of all world."
            price={285000}
            delete={335000}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={w2}
            name_product="Omega Seamaster Diver 300M"
            text_product="Professional Dive Watch"
            title_product="Co-Axial Master Chronometer, blue ceramic bezel, helium escape valve."
            price={198000}
            delete={235000}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={w3}
            name_product="Patek Philippe Nautilus 5711 Blue"
            text_product="Holy Grail Sports Watch"
            title_product="Ultra-thin automatic, iconic porthole design, discontinued model — investment piece."
            price={1850000}
            delete={2200000}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={w4}
            name_product="Cartier Tank Louis Large"
            text_product="Timeless Elegance"
            title_product="18k yellow gold, quartz movement, roman numerals, sapphire cabochon crown."
            price={398000}
            delete={465000}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={w5}
            name_product="Audemars Piguet Royal Oak 41mm"
            text_product="Luxury Sports Legend"
            title_product="Black dial, tapisserie pattern, stainless steel, octagonal bezel with exposed screws."
            price={1250000}
            delete={1480000}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={w6}
            name_product="Tag Heuer Carrera Chronograph"
            text_product="Racing Heritage"
            title_product="Automatic chronograph, tachymeter bezel, skeleton back, sporty yet elegant."
            price={148000}
            delete={185000}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={w7}
            name_product="IWC Portugieser Chrono"
            text_product="Classic Pilot Style"
            title_product="Large 41mm case, blue hands, leather strap, in-house movement of all the world in all the countery of all the world."
            price={295000}
            delete={350000}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={w8}
            name_product="Seiko Prospex Turtle SRP777"
            text_product="Best Value Diver"
            title_product="Automatic 4R36 movement, 200m WR, luminous hands, unbelievable quality for the price."
            price={18900}
            delete={25900}
          />
        </div>

        <div className="col-6 col-md-3 mb-4">
          <Structure
            img={w9}
            name_product="Tissot Le Locle Powermatic 80"
            text_product="Swiss Dress Watch"
            title_product="80-hour power reserve, roman numerals, exhibition case back, elegant daily wearer."
            price={24900}
            delete={32000}
          />
        </div>

      </div>
    </>
  );
}

export default Watches;