import "../styles/all.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import C1 from "../img/carousel/carousel-1.jpg";
import C2 from "../img/carousel/carousel-2.jpg";
import C3 from "../img/carousel/carousel-3.jpg";
import Teamone from "../img/team/t1.jpg"
import Teamtwo from "../img/team/t2.jpg"
import Teamthree from "../img/team/t3.jpg"
import Teamfour from "../img/team/t4.jpg"

import AboutImg from "../img/carousel/about.jpg";

function About(){
   return(
          <>
           <Swiper
             pagination={{ clickable: true }}
             modules={[Pagination]}
             className="mySwiper about-swiper"
             style={{ height: "70vh" }}
           >
             <SwiperSlide><img src={C1} className="w-100 h-100 object-cover" alt="Our Team" /></SwiperSlide>
             <SwiperSlide><img src={C2} className="w-100 h-100 object-cover" alt="Warehouse & Logistics" /></SwiperSlide>
             <SwiperSlide><img src={C3} className="w-100 h-100 object-cover" alt="Happy Customers" /></SwiperSlide>
           </Swiper>

           <div className="about py-5 bg-light">
            <div className="container">
              <div className="row align-items-center g-5">

               

                <div className="col-md-6 order-md-1">
                    <h3 className="display-5 fw-bold mb-4">
                        Welcome to <span className="text-primary">Rehan Store</span>
                    </h3>
                    
                    <h5 className="text-secondary mb-4">
                        Your Trusted Online Shopping Destination in Egypt & the Arab World
                    </h5>
                    
                    <p className="lead text-muted">
                        Founded in <strong>2021</strong>, Rehan Store was born with a simple mission: to make online shopping fast, easy, and enjoyable for everyone.
                    </p>
                    
                    <p className="text-muted">
                        What started as a small idea by a group of passionate entrepreneurs has quickly grown into one of the fastest-growing e-commerce platforms in the region — all thanks to your trust and support.
                    </p>
                    
                    <p className="text-muted">
                        Today, we’re proud to serve over <strong>250,000 happy customers</strong>, deliver to every governorate in Egypt within 24-72 hours, and offer hassle-free 14-day returns and cash-on-delivery across the country.
                    </p>
                    
                    <p className="text-muted fw-bold">
                        ✨ Our Mission: Deliver the best products at the best prices with the fastest shipping.<br />
                        Our Vision: To be the #1 online store in the hearts of Arab customers ❤️
                    </p>

                    <div className="mt-4">
                      <a href="/contact" className="btn btn-primary btn-lg px-5 shadow">
                        Get in Touch
                      </a>
                    </div>
                </div>
                 <div className="col-md-6 order-md-2">
                    <div className="image text-center">
                        <img src={AboutImg} className="img-fluid rounded shadow-lg w-100" alt="About [Your Store Name]" />
                    </div>
                </div>

              </div>
            </div>
           </div>


<div className="services py-5 bg-light">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="display-5 fw-bold">Why Choose Us?</h2>
      <p className="lead text-muted">We make online shopping simple, fast, and reliable</p>
    </div>

    <div className="row g-4">

      <div className="col-md-4 col-lg-3">
        <div className="box text-center p-4 bg-white rounded shadow-sm h-100 hover-shadow">
          <i className="fas fa-truck fa-3x text-primary mb-3"></i>
          <h4 className="fw-bold">Free & Fast Delivery</h4>
          <p className="text-muted small">
            Free shipping on orders over $50. Delivery within 1-3 business days across Egypt.
          </p>
        </div>
      </div>
      <div className="col-md-4 col-lg-3">
        <div className="box text-center p-4 bg-white rounded shadow-sm h-100 hover-shadow">
          <i className="fas fa-money-bill-wave fa-3x text-success mb-3"></i>
          <h4 className="fw-bold">Cash on Delivery</h4>
          <p className="text-muted small">
            Pay when you receive your order. Available in all governorates.
          </p>
        </div>
      </div>

      <div className="col-md-4 col-lg-3">
        <div className="box text-center p-4 bg-white rounded shadow-sm h-100 hover-shadow">
          <i className="fas fa-undo-alt fa-3x text-warning mb-3"></i>
          <h4 className="fw-bold">14-Day Easy Returns</h4>
          <p className="text-muted small">
            Not satisfied? Return it within 14 days for a full refund or exchange.
          </p>
        </div>
      </div>

      <div className="col-md-4 col-lg-3">
        <div className="box text-center p-4 bg-white rounded shadow-sm h-100 hover-shadow">
          <i className="fas fa-shield-alt fa-3x text-danger mb-3"></i>
          <h4 className="fw-bold">100% Secure Payment</h4>
          <p className="text-muted small">
            Your payment information is encrypted and fully protected.
          </p>
        </div>
      </div>

      <div className="col-md-4 col-lg-3">
        <div className="box text-center p-4 bg-white rounded shadow-sm h-100 hover-shadow">
          <i className="fas fa-headset fa-3x text-info mb-3"></i>
          <h4 className="fw-bold">24/7 Customer Support</h4>
          <p className="text-muted small">
            We're here to help anytime via phone, WhatsApp, or live chat.
          </p>
        </div>
      </div>

      <div className="col-md-4 col-lg-3">
        <div className="box text-center p-4 bg-white rounded shadow-sm h-100 hover-shadow">
          <i className="fas fa-tags fa-3x text-primary mb-3"></i>
          <h4 className="fw-bold">Best Price Guaranteed</h4>
          <p className="text-muted small">
            Found it cheaper elsewhere? We'll match the price!
          </p>
        </div>
      </div>

      <div className="col-md-4 col-lg-3">
        <div className="box text-center p-4 bg-white rounded shadow-sm h-100 hover-shadow">
          <i className="fas fa-certificate fa-3x text-success mb-3"></i>
          <h4 className="fw-bold">100% Original Products</h4>
          <p className="text-muted small">
            All items are genuine with official warranty from authorized distributors.
          </p>
        </div>
      </div>
      <div className="col-md-4 col-lg-3">
        <div className="box text-center p-4 bg-white rounded shadow-sm h-100 hover-shadow">
          <i className="fas fa-th-large fa-3x text-purple mb-3"></i>
          <h4 className="fw-bold">30,000+ Products</h4>
          <p className="text-muted small">
            Shop from a huge variety of categories — fashion, electronics, beauty & more.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>
<section className="team py-5 bg-light">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="display-5 fw-bold">Meet Our Team</h2>
      <p className="lead text-muted">The people who work day and night to bring you the best shopping experience</p>
    </div>

    <div className="row g-4 justify-content-center">

      {/* Team Member 1 */}
      <div className="col-md-6 col-lg-3">
        <div className="box text-center bg-white rounded shadow-sm overflow-hidden hover-shadow">
          <div className="image">
            <img src={Teamone} className="img-fluid w-100" alt="Ahmed Mohamed - CEO & Founder" style={{ height: "320px", objectFit: "cover" }} />
          </div>
          <div className="title p-4">
            <h3 className="h4 fw-bold mb-1">Ahmed Mohamed</h3>
            <h4 className="text-primary fw-semibold">CEO & Founder</h4>
            <p className="text-muted small">
              Visionary leader with 10+ years in e-commerce. Turned a small idea into one of the fastest-growing online stores in the region.
            </p>
          </div>
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="col-md-6 col-lg-3">
        <div className="box text-center bg-white rounded shadow-sm overflow-hidden hover-shadow">
          <div className="image">
            <img src={Teamtwo} className="img-fluid w-100" alt="Sara Ahmed - Operations Director" style={{ height: "320px", objectFit: "cover" }} />
          </div>
          <div className="title p-4">
            <h3 className="h4 fw-bold mb-1">Sara Ahmed</h3>
            <h4 className="text-primary fw-semibold">Operations Director</h4>
            <p className="text-muted small">
              Manages logistics & supply chain. Ensures your order reaches you in record time, every single time.
            </p>
          </div>
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="col-md-6 col-lg-3">
        <div className="box text-center bg-white rounded shadow-sm overflow-hidden hover-shadow">
          <div className="image">
            <img src={Teamthree} className="img-fluid w-100" alt="Omar Khaled - Head of Marketing" style={{ height: "320px", objectFit: "cover" }} />
          </div>
          <div className="title p-4">
            <h3 className="h4 fw-bold mb-1">Omar Khaled</h3>
            <h4 className="text-primary fw-semibold">Head of Marketing</h4>
            <p className="text-muted small">
              Digital marketing expert. Brings you the hottest deals and keeps [Your Store] trending across all platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Team Member 4 */}
      <div className="col-md-6 col-lg-3">
        <div className="box text-center bg-white rounded shadow-sm overflow-hidden hover-shadow">
          <div className="image">
            <img src={Teamfour} className="img-fluid w-100" alt="Nour Ehab - Customer Happiness Manager" style={{ height: "320px", objectFit: "cover" }} />
          </div>
          <div className="title p-4">
            <h3 className="h4 fw-bold mb-1">Nour Ehab</h3>
            <h4 className="text-primary fw-semibold">Customer Happiness Manager</h4>
            <p className="text-muted small">
              Leads our 24/7 support team. Your satisfaction is her #1 priority — always ready to help with a smile.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
         </>
       )
}

export default About;