import "./Delivery.css";

function Delivery() {

  return (

    <section className="delivery">

      {/* LEFT IMAGE */}

      <div className="delivery-left">

        <div className="delivery-overlay">

          <h1>
            Miles Away,
            <span>
              Hearts Together.
            </span>
          </h1>

          <p>
            Distance shouldn't dim the joy of celebration.
            Our curated hampers deliver your love worldwide.
          </p>

        </div>

      </div>

      {/* RIGHT CONTENT */}

      <div className="delivery-right">

        <p className="delivery-tag">
          GLOBAL DELIVERY
        </p>

        <h1>
          Seamless Gifting,
          Worldwide.
        </h1>

        <div className="delivery-card">

          <h2>
            ✈ Express Global Shipping
          </h2>

          <p>
            Delivering to USA, UK, Canada,
            Australia and 50+ countries.
          </p>

        </div>

        <div className="delivery-card">

          <h2>
            🎁 Guaranteed Delivery
          </h2>

          <p>
            Safe festive packaging with
            premium quality assurance.
          </p>

        </div>

      </div>

    </section>

  );

}

export default Delivery;
