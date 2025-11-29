import Structure from "../props/Structure"
import m1 from "../img/m1.webp"
import m2 from "../img/m2.webp"
import m3 from "../img/m3.webp"
import m4 from "../img/m4.webp"
import m5 from "../img/m5.webp"
import m6 from "../img/m7.webp"
import m7 from "../img/m8.webp"


function Accessories() {
  
  return (
    <>
      <div className="row ">
        <div className="col-md-12">
          <div className="cards">
            <div className="name_card">
              <h5>Mobile Accessories</h5>
              <p>Discover a wide range of mobile accessories designed to enhance your smartphone experience.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* 1 */}
        <div className="col-md-3">
         <Structure
  img={m1}
  name_product="Apple AirPods Pro"
  text_product="Wireless Noise-Cancelling Earbuds"
  title_product="Premium earbuds deliver clear sound, stable connection, and long battery life. Designed for comfort and daily"
  price={8000}
  delete={10000}
  buy="fa-solid fa-cart-shopping shop"
  
/>

        </div>

        {/* 2 */}
        <div className="col-md-3">
        <Structure
  img={m2}
  name_product="Samsung Galaxy Buds2 Pro"
  text_product="Hi-Fi Wireless Earbuds"
  title_product="Compact earbuds deliver rich audio, smooth controls, and enhanced noise reduction. Built for everyday comfort."
   price={6000}
    delete={8000}
/>

        </div>

        {/* 3 */}
        <div className="col-md-3">
         
<Structure
  img={m3}
  name_product="Fast Charging Adapter"
  text_product="High-Speed USB Charger"
  title_product="Efficient charger ensures safe power delivery and fast charging. Lightweight and durable for travel or home or anywhere use."
  price={4000}
  delete={6000}
/>

        </div>

        {/* 4 */}
        <div className="col-md-3">
          <Structure
  img={m4}
  name_product="Portable Power Bank"
  text_product="10,000mAh Battery Pack"
  title_product="Slim power bank supports dual ports and fast charging. Reliable backup for trips, work,anywhere, and emergencies."
  price={3000}
  delete={6000}
/>

        </div>

        {/* 5 */}
        <div className="col-md-3">
         <Structure
  img={m5}
  name_product="Apple MagSafe Power Bank"
  text_product="Magnetic Wireless Pack"
  title_product="MagSafe battery attaches instantly for secure charging. Compact design offers smooth performance "
  price={1500}
  delete={3000}
/>

        </div>

        {/* 6 */}
        <div className="col-md-3">
          <Structure
  img={m6}
  name_product="Wireless Hands-Free Headset"
  text_product="Bluetooth Earphone"
  title_product="Lightweight headset provides clear audio and stable connection. Ideal for calls, driving, and study sessions."
  price={4000}
  delete={8000}
/>

        </div>

        {/* 7 */}
        <div className="col-md-3">
          <Structure
            img={m7}
            name_product="Universal Phone Holder"
            text_product="Adjustable Stand"
            title_product="Durable stand fits all phones and offers stable viewing angles. Great for watching videos, recording content, video calls and desk setups."
            price={5000}
            delete={9000}
          />
        </div>
      </div>
    </>
  );
}

export default Accessories
