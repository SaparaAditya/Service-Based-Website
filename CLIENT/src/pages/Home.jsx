import Analytics from "../pages/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We are the World Best IT Company</p> */}
              <h1>
                SEO Company in Ahmedabad Driven by Ethics and Transparency
              </h1>
              <p>
                Forget the rest, we're the Shahenshah of fully managed SEO! Our
                value-driven approach makes us the Numero Uno choice for
                businesses across India and outside India. Experience it for
                yourself and see why Thanksweb: Best SEO Company is the most
                trusted name in SEO!
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">Service</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="company.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="company.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            {/* <p>We are here to help you</p> */}
            <h1>Overview</h1>
            <p>
              Thanksweb - one of the Leading SEO Company in India. Offering
              Digital Marketing Services like SEO, SEM, SMO, PPC, ORM, Web
              Design and Website Development.
            </p>
            <p>
              Thanksweb was founded with base concept of Internet Marketing
              Services. Currently we are growing with good pace and ratio of
              satisfied customers. Our main motto is repeated business and
              effortless sales procedure.
            </p>
            <p>We believe in “We will earn if and only if our client earns”</p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">Service</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
