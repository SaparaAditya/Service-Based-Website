import { NavLink } from "react-router-dom";
import  Analytics  from "../pages/Analytics";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <h1>About Us </h1>
              <p>
              Looking to boost your business's online presence? Our SEO agency in Ahmedabad has been delivering results since 2016. We specialize in SEO, social media marketing, web design, and more, always prioritizing ethical practices and transparency. No locked-in contracts—just tailored services to drive your success.
              </p>
              <p>
              We understand the concerns and priorities of businesses like yours. Let's chat today and alleviate your worries about digital marketing success. With years of experience, we've tackled SEO challenges across various industries, helping small businesses and startups thrive with affordable rates. Trust us to navigate the ever-evolving landscape of SEO and digital marketing.
              </p>
              {/* <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p> */}
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <a href="/service">
                <button className="btn secondary-btn">Service</button>
              </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};