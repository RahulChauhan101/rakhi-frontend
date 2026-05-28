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

    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 py-8 sm:py-12 lg:py-14 lg:px-8">
        <p className="text-[10px] sm:text-xs font-semibold tracking-widest text-pink-700 uppercase">
          CUSTOMER LOVE
        </p>

        <h1 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
          What Our Customers Say
        </h1>

        <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {
            reviews.map((review, index) => (

            <div
              className="rounded-lg sm:rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 lg:p-6 shadow-sm"
              key={index}
            >

              <img
                src={review.image}
                alt={review.name}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
              />

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-gray-700">
                "{review.text}"
              </p>

              <h2 className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold text-gray-900">
                {review.name}
              </h2>

            </div>

            ))
          }
        </div>
      </div>

    </section>

  );

}

export default Testimonials;
