import Structure from "../props/Structure"
import p11 from "../img/Phones/p19.jpg"
import p12 from "../img/Phones/p20.jpg"
import p13 from "../img/Phones/p21.jpg"
import p14 from "../img/Phones/p18.jpg"
import p15 from "../img/Phones/p23.jpg"
import p16 from "../img/Phones/p24.jpg"
import p17 from "../img/Phones/p25.jpg"
import "../styles/none.css"

import "../styles/product.css"

function OthertwoPhone() {
  return (
    <>
      <div className="row ">
        <div className="col-md-12">
          <div className="cards">
            <div className="name_card">
  <h5>Smart Phone</h5>
  <p>Explore the latest smartphones combining sleek design, powerful performance, and advanced features for everyday use.</p>
</div>
          </div>
        </div>
      </div>

     <div className="row">


  {/* 1 */}
  <div className="col-md-3">
    <Structure
      img={p11}
      name_product="Xiaomi Redmi A5 "
      text_product="Apple Flagship Smartphone"
      title_product="Premium iPhone with advanced camera system, powerful A17 chip on the smart phone in the all countery side"
       price={52000}
            delete={55000}
    />
  </div>

  {/* 2 */}
  <div className="col-md-3">
    <Structure
      img={p12}
      name_product="Xiaomi Redmi A15C "
      text_product="Latest Apple Smartphone"
      title_product="Sleek iPhone featuring stunning display, fast processor, and high-quality photography. Perfect for everyday use with strong performance."
      price={65000}
            delete={90000}
    />
  </div>

  {/* 3 */}
  <div className="col-md-3">
    <Structure
      img={p13}
      name_product="Xiaomi Redmi Note"
      text_product="Professional Apple Device"
      title_product="Powerful iPhone with advanced features, smooth graphics . "
  
       price={34000}
       delete={41000}
    />
  </div>

  {/* 4 */}
  <div className="col-md-3">
    <Structure
      img={p14}
      name_product="CMF by Nothing Phone"
      text_product="Reliable Apple Smartphone"
      title_product="Stylish iPhone offering high performance, sharp display, and strong battery life. A great choice for everyday tasks and consistent user experience."
      price={26000}
            delete={32000}
    />
  </div>

  {/* 5 */}
  <div className="col-md-3">
    <Structure
      img={p15}
      name_product="Infnix smart 10"
      text_product="High-Performance iPhone"
      title_product="Modern iPhone with responsive performance, vibrant screen, and dependable battery. Perfect option for users wanting speed and quality."
       price={25000}
            delete={29000}
    />
  </div>
   {/* 6 */}
  <div className="col-md-3">
    <Structure
      img={p16}
      name_product="Honor X5 Five"
      text_product="High-Performance iPhone"
      title_product="Modern iPhone with responsive performance, vibrant screen, and dependable battery. Perfect option for users wanting speed and quality."
       price={25000}
            delete={29000}
    />
  </div>
   {/* 7 */}
  <div className="col-md-3">
    <Structure
      img={p17}
      name_product="itel A50C"
      text_product="High-Performance iPhone"
      title_product="Modern iPhone with responsive performance, vibrant screen, and dependable battery. Perfect option for users wanting speed and quality."
       price={25000}
            delete={29000}
    />
  </div>

</div>

    </>
  );
}

export default OthertwoPhone
