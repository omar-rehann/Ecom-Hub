import Structure from "../props/Structure"
import s1 from "../img/0.png"
import s2 from "../img/Phones/1.png"
import s3 from "../img/Phones/2.png"
import s4 from "../img/Phones/3.png"
import s5 from "../img/Phones/p4.jpg"
import s6 from "../img/Phones/p5.jpg"
import s7 from "../img/Phones/p6.jpg"

import "../styles/product.css"

function Smart() {
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
      img={s1}
      name_product="iPhone 13 Pro Max"
      text_product="Apple Flagship Smartphone"
      title_product="Sleek iPhone featuring stunning display, fast processor, and high-quality photography. Perfect for everyday use with strong performance."
       price={52000}
            delete={55000}
    />
  </div>

  {/* 2 */}
  <div className="col-md-3">
    <Structure
      img={s2}
      name_product="iPhone 13 Plus Plus"
      text_product="Latest Apple Smartphone"
      title_product="Sleek iPhone featuring stunning display, fast processor, and high-quality photography. Perfect for everyday use with strong performance."
      price={65000}
            delete={90000}
    />
  </div>

  {/* 3 */}
  <div className="col-md-3">
    <Structure
      img={s3}
      name_product="iPhone 13 Pro Plus"
      text_product="Professional Apple Device"
      title_product="Powerful iPhone with advanced features, smooth graphics, and excellent cameras. Ideal for users who want performance "
  
       price={34000}
       delete={41000}
    />
  </div>

  {/* 4 */}
  <div className="col-md-3">
    <Structure
      img={s4}
      name_product="iPhone 13 Pro Max"
      text_product="Reliable Apple Smartphone"
      title_product="Stylish iPhone offering high performance, sharp display, and strong battery life. A great choice for everyday tasks and consistent user experience."
      price={26000}
            delete={32000}
    />
  </div>

  {/* 5 */}
  <div className="col-md-3">
    <Structure
      img={s5}
      name_product="iPhone 12 Plus"
      text_product="High-Performance iPhone"
      title_product="Modern iPhone with responsive performance, vibrant screen, and dependable battery. Perfect option for users wanting speed and quality."
       price={25000}
            delete={29000}
    />
  </div>
   {/* 6 */}
  <div className="col-md-3">
    <Structure
      img={s6}
      name_product="iPhone 16 Plus"
      text_product="High-Performance iPhone"
      title_product="Modern iPhone with responsive performance, vibrant screen, and dependable battery. Perfect option for users wanting speed and quality."
       price={25000}
            delete={29000}
    />
  </div>
   {/* 7 */}
  <div className="col-md-3">
    <Structure
      img={s7}
      name_product="iPhone 12 Plus"
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

export default Smart
