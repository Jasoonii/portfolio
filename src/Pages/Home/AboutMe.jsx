export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/hero_img.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Hey there! I'm Jason Dang, a passionate Computer Science major currently
            studying at the University of Texas at Dallas. 
            Welcome to my digital space, where I've crafted a portfolio to offer
            you a glimpse into my projects and work experience.
          </p>
          <p className="hero--section-description">
            Beyond the realm of algorithms and programming languages, you'll find a different side of me. 
            I have a love for eating and expressing my food adventures through food reviews on Instagram. 
            Follow me at @biteswithjasooni for a taste of my restaurant recommendations and food adventures.
          </p>
          <p className="hero--section-description">
            Why computer science, you ask? For me, it's not just about writing lines of code - it's a journey of constant learning and growth.
            I love the feeling of problem solving and am always up for a challenge!
          </p>
        </div>
      </div>
    </section>
  );
}
