import Structure from "../props/Structure"
import l11 from "../img/laptop/l11.jpg"
import l12 from "../img/laptop/l12.jpg"
import l13 from "../img/laptop/l13.jpg"
import l14 from "../img/laptop/l14.jpg"
import l15 from "../img/laptop/l15.jpg"
import l16 from "../img/laptop/l16.jpg"
import l17 from "../img/laptop/l17.jpg"
import "../styles/none.css"
import "../styles/product.css"

function Otherlap() {
  return (
    <>
      {/* Section Title */}
      <div className="row ">
        <div className="col-md-12">
          <div className="cards">
            <div className="name_card">
              <h5>Laptops</h5>
              <p>
                Explore high-performance laptops designed for work, study,
                creativity, and gaming. Find devices with fast processors,
                sharp displays, large storage options, and long battery life
                for a smooth and reliable experience.
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
            img={l11}
            name_product="Xiaomi Redmi A5"
            text_product="Entry-level laptop for everyday use"
            title_product="A reliable laptop built for basic tasks such as browsing, studying, and media playback. Features good battery life and a lightweight design suitable for students and casual users."
            price={52000}
            delete={55000}
          />
        </div>

        {/* 2 */}
        <div className="col-md-3">
          <Structure
            img={l12}
            name_product="Xiaomi Redmi A15C"
            text_product="Lightweight laptop with strong performance"
            title_product="A sleek and efficient laptop offering fast performance for multitasking, office work, and online learning. Comes with a clear display and optimized power management."
            price={65000}
            delete={90000}
          />
        </div>

        {/* 3 */}
        <div className="col-md-3">
          <Structure
            img={l13}
            name_product="Xiaomi Redmi Note Laptop"
            text_product="Powerful laptop for productivity"
            title_product="A high-performance laptop equipped with a strong processor, sharp graphics, and large storage—ideal for ."
            price={34000}
            delete={41000}
          />
        </div>

        {/* 4 */}
        <div className="col-md-3">
          <Structure
            img={l14}
            name_product="CMF by Nothing Laptop"
            text_product="Modern laptop with premium features"
            title_product="A stylish productivity laptop that offers excellent display quality, smooth performance, and solid battery life. Perfect for office tasks and day-to-day"
            price={26000}
            delete={32000}
          />
        </div>

        {/* 5 */}
        <div className="col-md-3">
          <Structure
            img={l15}
            name_product="Infinix SmartBook 10"
            text_product="Compact laptop for everyday performance"
            title_product="A compact laptop designed for students and regular users. Provides dependable speed "
            price={25000}
            delete={29000}
          />
        </div>

        {/* 6 */}
        <div className="col-md-3">
          <Structure
            img={l16}
            name_product="Honor Book X5"
            text_product="Efficient laptop for productivity"
            title_product="A smooth and efficient laptop offering fast boot times, stable multitasking, and a crisp display—an excellent choice for office work and home use."
            price={25000}
            delete={29000}
          />
        </div>

        {/* 7 */}
        <div className="col-md-3">
          <Structure
            img={l17}
            name_product="iTel Book A50C"
            text_product="Budget-friendly performance laptop"
            title_product="An affordable laptop providing essential performance for browsing, studying, and light work tasks.."
            price={25000}
            delete={29000}
          />
        </div>

      </div>
    </>
  );
}

export default Otherlap;
