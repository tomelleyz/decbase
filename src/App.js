import "./App.css";
import logo from "./assets/icons/decbase-logo.svg";
import headerImg from "./assets/images/header-img.jpg";
import Button from "./components/Button";
import ServiceCard from "./components/ServiceCard";
import interiorDesignIcon from "./assets/icons/interior-design-icon.svg";
import architectureIcon from "./assets/icons/architecture-icon.svg";
import planningIcon from "./assets/icons/planning-icon.svg";
import aboutUsImg from "./assets/images/about-us-section-interior-img.jpg";
import successYearsImg from "./assets/images/success-years-section-interior-img.jpg";
import imgOfLouis from "./assets/images/louis-saville.jpg";
import imgOfRekha from "./assets/images/rekha-varadwaz.jpg";
import blogImg1 from "./assets/images/blog-img1.jpg";
import blogImg2 from "./assets/images/blog-img2.jpg";
import facebookIcon from "./assets/icons/facebook-icon.svg";
import twitterIcon from "./assets/icons/twitter-icon.svg";
import instagramIcon from "./assets/icons/instagram-icon.svg";
import linkedinIcon from "./assets/icons/linkedin-icon.svg";
import { useState } from "react";
import MobileNav from "./components/MobileNav";
import Backdrop from "./components/Backdrop";

function App() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <main>
      {openMobileNav && (
        <>
          <Backdrop setOpenMobileNav={setOpenMobileNav} />
          <MobileNav openMobileNav={openMobileNav} />
        </>
      )}

      <div className="top-navbar">
        <div className="logo">
          <img src={logo} alt="Decbase logo" />
        </div>
        <div className="mobile-menu-btn">
          <button onClick={() => setOpenMobileNav(true)}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <nav className="top-navbar-menu">
          <div className="menu-item">HOME</div>
          <div className="menu-item">PROJECT</div>
          <div className="menu-item">SERVICES</div>
          <div className="menu-item">ABOUT</div>
          <div className="menu-item">BLOG</div>
          <div className="menu-item">SHOP</div>
          <Button type="secondary" action="SIGN UP" />
        </nav>
      </div>

      <header className="header-section">
        <div className="header-section-text">
          <h6>MODERN INTERIOR</h6>
          <h1>Create your interior design.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <Button type="primary" action="CONTACT US" />
        </div>
        <div className="header-section-img">
          <img src={headerImg} alt="interior design" />
        </div>
      </header>

      <section className="services-section">
        <h6>WHAT WE DO</h6>
        <h2>Our Services</h2>
        <div className="services-card-group-container">
          <div className="single-card-container">
            <ServiceCard
              bgColor="white"
              icon={interiorDesignIcon}
              cardTitle="Interior Design"
            />
          </div>
          <div className="single-card-container">
            <ServiceCard
              bgColor="brown"
              icon={architectureIcon}
              cardTitle="Architecture"
            />
          </div>
          <div className="single-card-container">
            <ServiceCard
              bgColor="white"
              icon={planningIcon}
              cardTitle="Planning"
            />
          </div>
        </div>
      </section>

      <section className="about-us-section">
        <div className="about-us-section-img-container">
          <img src={aboutUsImg} alt="interior design" />
        </div>
        <div className="about-us-section-text-container">
          <h6>ABOUT US</h6>
          <h2>Interior Is the Will of an Epoch Maestro</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form injected humour,
            or randomised words which don't look even slightly believable.If you
            are going to use a passage of Lorem Ipsum, sure there isn't anything
            embarrassing hidden the middleof text. All the Lorem Ipsum
            generators on the Internettend to repeat predefined chunks as
            necessary,making this the first true generator on the Internet.
          </p>
          <Button type="primary" action="LEARN MORE" />
        </div>
      </section>

      <section className="success-years-section">
        <div className="success-years-section-text-container">
          <h1>20</h1>
          <h3>Years of Successfully Working in the Interior Design Industry</h3>
          <Button type="primary" action="READ MORE" />
        </div>
        <div className="success-years-section-img-container">
          <img src={successYearsImg} alt="interior design" />
        </div>
      </section>

      <section className="completed-work-section">
        <h2>3000+ Successfully Completed Projects</h2>
        <div className="project-numbers-grid">
          <div className="grid-item grid-item1">
            <div>
              <p className="project-number">980</p>
              <p className="project-number-text">Projects</p>
            </div>
          </div>
          <div className="grid-item grid-item2"></div>
          <div className="grid-item grid-item3"></div>
          <div className="grid-item grid-item4">
            <div>
              <p className="project-number">520</p>
              <p className="project-number-text">Happy Clients</p>
            </div>
          </div>
          <div className="grid-item grid-item5"></div>
          <div className="grid-item grid-item6"></div>
          <div className="grid-item grid-item7">
            <div>
              <p className="project-number">330</p>
              <p className="project-number-text">Winners</p>
            </div>
          </div>
          <div className="grid-item grid-item8"></div>
          <div className="grid-item grid-item9"></div>
          <div className="grid-item grid-item10">
            <div>
              <p className="project-number">120</p>
              <p className="project-number-text">Recomments</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-section-heading">
          <h6>TESTIMONIALS</h6>
          <h2>What Our Clients Say About Us</h2>
        </div>
        <div className="testimonial-cards-group-container">
          <div className="testimonial-card-container">
            <div className="testimonial-card">
              <img src={imgOfLouis} alt="Louis Saville" />
              <div className="testimonial-card-text">
                <h4>
                  Louis Saville{" "}
                  <span className="job-title">/CEO at Google Inc.</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonial-card-container">
            <div className="testimonial-card">
              <img src={imgOfRekha} alt="Rekha Varadwaz" />
              <div className="testimonial-card-text">
                <h4>
                  Rekha Varadwaz{" "}
                  <span className="job-title">/Manager at Nike Inc.</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-section-heading">
          <h6>LATEST NEWS</h6>
          <h2>From Our Blog</h2>
        </div>
        <div className="blog-cards-group-container">
          <div className="blog-card-container blog-card-container1">
            <div className="blog-card">
              <img src={blogImg1} alt="interior design" />
              <h4 className="blog-card-title">Latest Interior Design Trends</h4>
              <p className="blog-card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt ut labore et dolore magna aliqua.
              </p>
              <div>
                <Button type="primary" action="CONTINUE READING" />
              </div>
            </div>
          </div>
          <div className="blog-card-container blog-card-container2">
            <div className="blog-card">
              <img src={blogImg2} alt="interior design" />
              <h4 className="blog-card-title">
                28 Notable Product at ARC Interior Design
              </h4>
              <p className="blog-card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt ut labore et dolore magna aliqua.
              </p>
              <div>
                <Button type="primary" action="CONTINUE READING" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-text-container">
          <div>
            <h3>Subscribe to Our Newsletter</h3>
            <hr />
          </div>
          <p>
            Find out early about all upcoming promotions and new product
            releases with our newsletter.
          </p>
          <form>
            <div className="form-field-group">
              <input type="email" placeholder="Enter your email address..." />
              <button
                onClick={(event) => event.preventDefault()}
                type="submit"
                className="btn btn-primary"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-links-container">
          <div className="single-footer-container footer-logo-container">
            <img src={logo} alt="Decbase logo" />
            <p>
              But i must explain to you all this mistaken idea of dencouncing
              pleasure.
            </p>
          </div>
          <div className="single-footer-container">
            <h5>Quick Links</h5>
            <p>About Our Company</p>
            <p>Services We Provide</p>
            <p>Career &amp; Opportunity</p>
            <p>Privacy &amp; Policy</p>
            <p>Contact Us</p>
          </div>
          <div className="single-footer-container">
            <h5>Company</h5>
            <p>About Our Company</p>
            <p>Our Testimonials</p>
            <p>Latest News</p>
            <p>Our Mission</p>
            <p>Get a Free Quote</p>
          </div>
          <div className="single-footer-container">
            <h5>Contact Us</h5>
            <p>Sagrada Familia, Herba</p>
            <p>Street Front USA</p>
            <p>brandoxide@gmail.com</p>
            <p>002-568423591</p>
          </div>
          <div className="single-footer-container">
            <h5>Follow Us</h5>
            <div className="social-links-container">
              <div className="single-social-link">
                <img src={facebookIcon} alt="facebook icon" />
              </div>
              <div className="single-social-link">
                <img src={twitterIcon} alt="twitter icon" />
              </div>
              <div className="single-social-link">
                <img src={instagramIcon} alt="instagram icon" />
              </div>
              <div className="single-social-link">
                <img src={linkedinIcon} alt="linkedin icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-section">
          <hr />
          <p>Copyright &copy; 2021. Brandoxide. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
