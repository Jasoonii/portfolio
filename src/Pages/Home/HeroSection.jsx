import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jason</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Aspiring Software</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            Computer Science Major
            <br />University of Texas at Dallas '25
          </p>
        </div>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >
          <button className="btn btn-primary">Get In Touch</button>
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
