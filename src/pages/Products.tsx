const Products = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Our Products</h1>
      <p>Here you can find all our amazing products.</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h3>Product 1</h3>
          <p>Description of product 1</p>
        </div>
        <div
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h3>Product 2</h3>
          <p>Description of product 2</p>
        </div>
        <div
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h3>Product 3</h3>
          <p>Description of product 3</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
