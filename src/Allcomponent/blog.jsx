import "../styles/all.css";
import "../styles/blog.css";
import blogone from "../img/blog/b1.jpg";
import blogtwo from "../img/blog/b2.jpg";
import blogthree from "../img/blog/b3.jpg";
import blogfour from "../img/blog/b4.jpg";
import blogfive from "../img/blog/b5.jpg";
import blogsix from "../img/blog/b6.jpg";

function Blog() {
  const posts = [
    {
      img: blogone,
      alt: "Cotton-Jersey Zip-Up Hoodie",
      title: "The Ultimate Cotton-Jersey Zip-Up Hoodie Guide",
      subtitle: "Style, Comfort, and Versatility in One Wardrobe Essential",
      desc1: "Discover why the cotton-jersey zip-up hoodie has become a modern wardrobe staple...",
      desc2: "Learn how to style this versatile piece for different occasions...",
      btn: "Read Style Guide",
      reverse: false,
    },
    {
      img: blogtwo,
      alt: "Sustainable Fashion Choices",
      title: "Eco-Friendly Apparel: Making Sustainable Choices",
      subtitle: "How Our Organic Cotton Makes a Difference",
      desc1: "Explore our commitment to sustainable fashion with clothing made from 100% organic cotton...",
      desc2: "We break down the manufacturing process that reduces water usage...",
      btn: "Learn About Sustainability",
      reverse: true,
    },
    {
      img: blogthree,
      alt: "Seasonal Color Trends",
      title: "Fall/Winter 2023 Color Trends",
      subtitle: "Top Palette Picks for Your Wardrobe",
      desc1: "Discover the trending colors for the upcoming season and how to incorporate them...",
      desc2: "Our color experts explain which shades complement different skin tones...",
      btn: "View Color Guide",
      reverse: false,
    },
    {
      img: blogfour,
      alt: "Layering Techniques",
      title: "Master the Art of Layering",
      subtitle: "Transition Your Wardrobe Between Seasons",
      desc1: "Learn professional styling techniques to create multiple looks from key pieces...",
      desc2: "We demonstrate how to combine our hoodies with jackets and shirts...",
      btn: "Get Layering Tips",
      reverse: true,
    },
    {
      img: blogfive,
      alt: "Fabric Care Guide",
      title: "Essential Fabric Care Guide",
      subtitle: "Keep Your Clothes Looking New Longer",
      desc1: "Proper care extends the life of your garments significantly...",
      desc2: "Discover common laundry mistakes that damage clothes...",
      btn: "Read Care Instructions",
      reverse: false,
    },
    {
      img: blogsix,
      alt: "Capsule Wardrobe",
      title: "Building a Minimalist Capsule Wardrobe",
      subtitle: "Quality Over Quantity for Timeless Style",
      desc1: "Learn how to create a versatile capsule wardrobe with just 30 pieces...",
      desc2: "We identify the essential items every wardrobe needs...",
      btn: "Start Building Yours",
      reverse: true,
    },
  ];

  return (
    <>
      <div className="blog">
        <div className="background">
          <div className="container">
            <div className="text py-5">
              <h2 className="display-5">Blog</h2>
              <h3 className="text-light">Stay Ahead in Style</h3>
              <h1 className="fw-bold display-3">Dive Into Our Fashion Blog</h1>
            </div>
          </div>
        </div>

       <div className="container py-5 position-relative">
          {posts.map((post, index) => (
            <div
              key={index}
              className={`row align-items-center g-5 mb-5 ${
                post.reverse ? "flex-row-reverse" : ""
              }`}
            >              <div className="col-lg-6">
                <div className="image overflow-hidden rounded shadow">
                  <img
                    src={post.img}
                    alt={post.alt}
                    className="w-100 h-100 object-fit-cover transition"
                    style={{ minHeight: "300px" }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text ps-lg-4">
                  <h3 className="fw-bold text-primary">{post.title}</h3>
                  <h2 className="mb-3">{post.subtitle}</h2>
                  <p className="text-muted">{post.desc1}</p>
                  <p className="text-muted">{post.desc2}</p>
                  <a href="#" className="btn btn-primary px-4 py-2 mt-3">
                    {post.btn}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;