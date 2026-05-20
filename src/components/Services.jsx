import "./Services.css";

function Services() {

  const data = [
    {
      title: "Web Design",
      desc: "Modern and responsive website design."
    },
    {
      title: "Frontend",
      desc: "React.js frontend development."
    },
    {
      title: "Backend",
      desc: "Node.js and Express backend APIs."
    }
  ];

  return (
    <section className="services">

      <h1>Our Services</h1>

      <div className="service-container">

        {data.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Read More</button>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;