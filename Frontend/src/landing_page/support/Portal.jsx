function Portal() {
  return (
    <section style={{ backgroundColor: "#F6F6F6" }}>
      <div className="container" style={{ padding: "40px 24px" }}>
        <div
          className="d-flex justify-content-between"
          style={{ paddingBottom: "32px" }}
        >
          <h1 style={{ fontSize: "36px", color: "#424242" }}>Support Portal</h1>
          <button className="btn btn-primary">My tickets</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Eg: How do i activate F&O, How do I open my account..."
            style={{
              width: "100%",
              padding: "16px 10px",
              border: "1px solid rgb(213, 210, 210)",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Portal;
