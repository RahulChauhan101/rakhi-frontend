function Dashboard() {

  const token = localStorage.getItem("token");

  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center"
      }}
    >
      <h1>Dashboard</h1>

      <p>User Logged In Successfully ✅</p>

      <p>{token}</p>
    </div>
  );
}

export default Dashboard;