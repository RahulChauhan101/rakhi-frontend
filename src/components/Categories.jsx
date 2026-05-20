import "./Categories.css";

function Categories() {

  const categories = [

    {
      title: "Brother Gifts",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop"
    },

    {
      title: "Beauty Collection",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1170&auto=format&fit=crop"
    },

    {
      title: "Premium Hampers",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1170&auto=format&fit=crop"
    }

  ];

  return (

    <section className="categories-section">

      <h1>
        Curated For Every Bond
      </h1>

      <div className="categories-container">

        {
          categories.map((item, index) => (

            <div className="category-card" key={index}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="overlay">

                <h2>{item.title}</h2>

              </div>

            </div>

          ))
        }

      </div>

    </section>

  );

}

export default Categories;