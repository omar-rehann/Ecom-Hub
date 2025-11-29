import "../styles/all.css"
function Contact(){
    return(
        <>
       
        <div className="form_contact py-5 my-5">
  <div className="container">
    <div className="row  text-md-start mb-5">
      <div className="col-12 col-lg-10">
        <h5 className="gray fw-bold mb-3">Contact US</h5>
        <h1 className="display-5 lh-base">
          We're always on the lookout to work <br className="d-none d-md-block" />
          with new clients. Please get in touch <br className="d-none d-md-block" />
          in one of the following ways.
        </h1>
      </div>
    </div>

    <div className="row g-5 align-items-start">
      <div className="col-lg-6">
        <form className="contact-form">
          <div className="mb-4">
            <label htmlFor="fullName" className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control form-control-md"
              id="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control form-control-md"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
            <input
              type="tel"
              className="form-control form-control-md"
              id="phone"
              placeholder="+20 123 456 7890"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="form-label fw-semibold">Subject</label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="subject"
              placeholder="How can we help you?"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label fw-semibold">Message</label>
            <textarea
              className="form-control form-control-md"
              id="message"
              rows="6"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-md px-5 py-3 fw-bold">
            Send Message
          </button>
        </form>
      </div>

      <div className="col-lg-6">
        <div className="contact-info">
          <div className="d-flex align-items-start mb-5">
            <div className="icon-wrapper me-4">
              <i className="fa-solid fa-location-dot fa-2x text-primary"></i>
            </div>
            <div>
              <h4 className="fw-bold mb-2">Office</h4>
              <p className="text-muted mb-2">Please visit us to have a discussion.</p>
              <p className="fw-medium">
                8014 Edith Blvd NE, Albuquerque,<br />
                New York, United States
              </p>
            </div>
          </div>

          <div className="d-flex align-items-start mb-5">
            <div className="icon-wrapper me-4">
              <i className="fa-solid fa-phone fa-2x text-primary"></i>
            </div>
            <div>
              <h4 className="fw-bold mb-2">Phone</h4>
              <p className="text-muted mb-2">Please speak with us directly.</p>
              <p className="fw-medium">(505) 792-2430</p>
            </div>
          </div>

          <div className="d-flex align-items-start mb-5">
            <div className="icon-wrapper me-4">
              <i className="fa-solid fa-envelope fa-2x text-primary"></i>
            </div>
            <div>
              <h4 className="fw-bold mb-2">Email</h4>
              <p className="text-muted mb-2">Please write to us directly.</p>
              <a href="mailto:demo@yourdomain.com" className="fw-medium text-decoration-none">
                demo@yourdomain.com
              </a>
            </div>
          </div>

          <div className="d-flex align-items-start">
            <div className="icon-wrapper me-4">
              <i className="fa-solid fa-clock fa-2x text-primary"></i>
            </div>
            <div>
              <h4 className="fw-bold mb-2">Opening Hours</h4>
              <p className="text-muted mb-2">Explore our business opening hours.</p>
              <p className="fw-medium">
                Mon – Fri: 9:00 AM – 6:00 PM<br />
                Saturday: 10:00 AM – 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Contact