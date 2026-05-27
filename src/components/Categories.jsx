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

    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Curated For Every Bond
        </h1>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {
          categories.map((item, index) => (

            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm"
              key={index}
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h2 className="text-lg font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-white/80">
                  Explore gifts
                </p>
              </div>

            </div>

          ))
        }

      </div>
      </div>
    </section>

  );

}

export default Categories;