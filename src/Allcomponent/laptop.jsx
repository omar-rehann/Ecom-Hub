
import Structure from "../props/Structure"
import l1 from "../img/laptop/l1.webp"
import l2 from "../img/laptop/l2.webp"
import l3 from "../img/laptop/l3.webp"
import l4 from "../img/laptop/l4.webp"
import l5 from "../img/laptop/l5.webp"
import l6 from "../img/laptop/l8.webp"
import "../styles/product.css"

function Laptop() {
 return (
  <>
    {/* Section Title */}

    <div className="row">
      <div className="col-md-12">
        <div className="cards">
          <div className="name_card">
            <h5>Laptops</h5>
            <p>
              Explore high-performance laptops designed for gaming, business,
              creativity, and everyday productivity with powerful processors and sleek designs.
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
          img={l1}
          name_product="Lenovo Legion 5"
          text_product="High-Performance Gaming Laptop"
          title_product="Powerful laptop with RTX graphics, excellent cooling ز"
          price={45000}
            delete={52000}
        />
      </div>

      {/* 2 */}
      <div className="col-md-3">
        <Structure
          img={l2}
          name_product="HP Victus 16"
          text_product="Gaming & Productivity Laptop"
          title_product="Smooth multitasking, great battery life, and strong performance for gaming, editing, and everyday work."
          price={39000}
            delete={42000}
        />
      </div>

      {/* 3 */}
      <div className="col-md-3">
        <Structure
          img={l3}
          name_product="Dell XPS 13"
          text_product="Premium Ultrabook"
          title_product="Elegant ultrabook with high-resolution display, fast SSD, and lightweight design—perfect for business users."
           price={65000}
            delete={70000}
        />
      </div>

      {/* 4 */}
      <div className="col-md-3">
        <Structure
          img={l4}
          name_product="ASUS TUF Gaming F15"
          text_product="Durable Gaming Laptop"
          title_product="Strong build, RTX GPU, and dual-fan cooling system for seamless gaming and extended performance."
          price={22000}
            delete={33000}
        />
      </div>

      {/* 5 */}
      <div className="col-md-3">
        <Structure
          img={l5}
          name_product="Apple MacBook Air M2"
          text_product="Premium Lightweight Laptop"
          title_product="Ultra-fast M2 chip, stunning Retina display, and long battery life—perfect for designers, students"
           price={50000}
            delete={55000}
        />
      </div>

      {/* 6 */}
      <div className="col-md-3">
        <Structure
          img={l6}
          name_product="Acer Nitro 5"
          text_product="Gaming Laptop"
          title_product="Great value gaming laptop with strong GPU, RGB keyboard, and reliable thermal performance."
           price={50000}
            delete={90000}
        />
      </div>

    </div>
  </>
);

}

export default Laptop
