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
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Our Services
        </h1>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {data.map((item, index) => (
          <div
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            key={index}
          >
            <h2 className="text-base font-semibold text-gray-900">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {item.desc}
            </p>
            <button
              type="button"
              className="mt-5 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
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