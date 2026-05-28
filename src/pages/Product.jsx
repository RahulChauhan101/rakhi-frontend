import ProductsSection from "../components/ProductsSection";

function Products() {
  return (
    <div className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] bg-gray-50 px-3 sm:px-6 py-6 sm:py-10 lg:px-8">
      <ProductsSection title="All Products" />
    </div>
  );
}

export default Products;
