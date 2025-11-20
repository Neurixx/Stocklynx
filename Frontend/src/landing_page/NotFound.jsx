import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: 0, color: "#0d6efd" }}>404</h1>
      <h2 style={{ marginBottom: "1rem", color: "#333" }}>
        Oops! Page not found.
      </h2>
      <p style={{ color: "#6c757d", marginBottom: "2rem" }}>
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          backgroundColor: "#0d6efd",
          color: "white",
          padding: "0.75rem 1.5rem",
          borderRadius: "30px",
          fontWeight: "500",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#084298")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#0d6efd")}
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;
