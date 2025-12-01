import Structure from "../props/Structure";
import f1 from "../img/Fragrances/f1.jpg";
import f2 from "../img/Fragrances/f2.jpg";
import f3 from "../img/Fragrances/f3.jpg";
import f4 from "../img/Fragrances/f4.jpg";
import f5 from "../img/Fragrances/f5.jpg";
import f6 from "../img/Fragrances/f6.jpg";
import f7 from "../img/Fragrances/f7.jpg";
import f8 from "../img/Fragrances/f8.jpg";





import "../styles/product.css";

function Fragrances() {
  return (
    <>
      {/* Section Title */}
      <div className="row">
        <div className="col-md-12">
          <div className="cards">
            <div className="name_card">
              <h5>Luxury & Niche Fragrances</h5>
              <p>
                Discover our hand-picked collection of the world's most complimented and long-lasting designer and niche perfumes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row">

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f1}
            name_product="Creed Aventus 100ml EDP"
            text_product="King of Men's Fragrance"
            title_product="Smoky pineapple, birch, musk & oakmoss — the most complimented scent ever made."
            price={11500}
            delete={14500}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f2}
            name_product="Dior Sauvage Elixir 60ml"
            text_product="Ultimate Beast Mode"
            title_product="Spicy lavender, warm Indian oud, cardamom — 12+ hours longevity with massive projection."
            price={7200}
            delete={9200}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f3}
            name_product="Tom Ford Oud Wood 100ml"
            text_product="Pure Sophistication"
            title_product="Rare oud, warm oud, rosewood, cardamom, sandalwood & vetiver — perfect for special occasions."
            price={9800}
            delete={12500}
          />
        </div>

        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f4}
            name_product="MFK Baccarat Rouge 540 Extrait 70ml"
            text_product="Signature Scent Legend"
            title_product="Saffron, bitter almond, amberwood — the strongest version with 14+ hours performance."
            price={15800}
            delete={19500}
          />
        </div>
        
        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f5}
            name_product="MFK Baccarat Rouge 540 Extrait 70ml"
            text_product="Signature Scent Legend"
            title_product="Saffron, bitter almond, amberwood — the strongest version with 14+ hours performance."
            price={15800}
            delete={19500}
          />
        </div>
          <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f6}
            name_product="MFK Baccarat Rouge 540 Extrait 70ml"
            text_product="Signature Scent Legend"
            title_product="Saffron, bitter almond, amberwood — the strongest version with 14+ hours performance."
            price={15800}
            delete={19500}
          />
        </div>
        <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f7}
            name_product="MFK Baccarat Rouge 540 Extrait 70ml"
            text_product="Signature Scent Legend"
            title_product="Saffron, bitter almond, amberwood — the strongest version with 14+ hours performance."
            price={15800}
            delete={19500}
          />
        </div>
         <div className="col-md-6 col-md-3 mb-4">
          <Structure
            img={f8}
            name_product="MFK Baccarat Rouge 540 Extrait 70ml"
            text_product="Signature Scent Legend"
            title_product="Saffron, bitter almond, amberwood — the strongest version with 14+ hours performance."
            price={15800}
            delete={19500}
          />
        </div>




       

    

      </div>
    </>
  );
}

export default Fragrances;