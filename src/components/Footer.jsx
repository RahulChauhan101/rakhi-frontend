import "./Footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-top">

        {/* BRAND */}

        <div className="footer-brand">

          <h1>Rakhi</h1>

          <p>
            Celebrating bonds with premium festive gifting experiences worldwide.
          </p>

        </div>

        {/* SHOP */}

        <div className="footer-links">

          <h2>Shop</h2>

          <a href="/">Rakhi Collection</a>
          <a href="/">Gift Hampers</a>
          <a href="/">Premium Gifts</a>
          <a href="/">Best Sellers</a>

        </div>

        {/* SUPPORT */}

        <div className="footer-links">

          <h2>Support</h2>

          <a href="/">Contact Us</a>
          <a href="/">Shipping</a>
          <a href="/">Returns</a>
          <a href="/">Privacy Policy</a>

        </div>

        {/* NEWSLETTER */}

        <div className="footer-newsletter">

          <h2>Newsletter</h2>

          <p>
            Subscribe for festive offers and exclusive launches.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Rakhi. All Rights Reserved.
        </p>

      </div>

    </footer>

  );

}

export default Footer;