import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Clients Feedback</p>
          <h2 className="sections--heading">Customer Feedback</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        <object
          data="/Jason-Dang-Resume.pdf" // Use the absolute path from the root
          type="application/pdf"
          width="60%"
          height="600px" // You can adjust the height as needed
        >
          <p>Alternative text - include a link <a href="/Jason-Dang-Resume.pdf">to the PDF!</a></p>
        </object>
      </div>
    </section>
  );
}
