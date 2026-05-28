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
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 py-8 sm:py-12 lg:py-14 lg:px-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
          Our Services
        </h1>

        <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {data.map((item, index) => (
          <div
            className="rounded-lg sm:rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 lg:p-6 shadow-sm"
            key={index}
          >
            <h2 className="text-sm sm:text-base font-semibold text-gray-900">
              {item.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              {item.desc}
            </p>
            <button
              type="button"
              className="mt-4 sm:mt-5 rounded-lg sm:rounded-xl bg-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white hover:bg-black"
            >
              Read More
            </button>
          </div>
        ))}

      </div>
      </div>
    </section>
  );
}

export default Services;