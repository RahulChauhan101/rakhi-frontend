import "./Testimonials.css";

function Testimonials() {

  const reviews = [

    {
      name: "Priya Sharma",
      text:
        "Absolutely loved the premium packaging and delivery experience. Perfect festive gifting!",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg"
    },

    {
      name: "Rahul Mehta",
      text:
        "The hampers looked luxurious and arrived on time internationally. Highly recommended!",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg"
    },

    {
      name: "Anjali Verma",
      text:
        "Elegant products with beautiful presentation. My brother loved the Rakhi hamper.",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg"
    }

  ];

  return (

    <section className="testimonials">

      <p className="testimonial-tag">
        CUSTOMER LOVE
      </p>

      <h1>
        What Our Customers Say
      </h1>

      <div className="testimonial-container">

        {
          reviews.map((review, index) => (

            <div
              className="testimonial-card"
              key={index}
            >

              <img
                src={review.image}
                alt={review.name}
              />

              <p>
                “{review.text}”
              </p>

              <h2>
                {review.name}
              </h2>

            </div>

          ))
        }

      </div>

    </section>

  );

}

export default Testimonials;