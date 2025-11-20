function Brokerage() {
  return (
    <div className="container">
      <h2 style={{ fontSize: "24px", opacity: 0.9, marginBottom: "20px" }}>
        Charges for account opening
      </h2>
      <table style={{ width: "100%" }}>
        <thead style={{ border: "1px solid rgb(213, 210, 210)" }}>
          <tr>
            <th
              style={{
                padding: "12px 15px",
                fontSize: "14px",
                color: "#424242",
                fontWeight: "500",
              }}
            >
              Type of account
            </th>
            <th
              style={{
                padding: "12px 15px",
                fontSize: "14px",
                color: "#424242",

                fontWeight: "500",
              }}
            >
              Charges
            </th>
          </tr>
        </thead>
        <tbody style={{ border: "1px solid rgb(213, 210, 210)" }}>
          <tr>
            <td style={{ padding: "12px 15px" }}>Online account</td>
            <td style={{ padding: "12px 15px" }}>Free</td>
          </tr>
          <tr>
            <td style={{ padding: "12px 15px" }}>Offline account</td>
            <td style={{ padding: "12px 15px" }}>Free</td>
          </tr>
          <tr>
            <td style={{ padding: "12px 15px" }}>NRI account (offline only)</td>
            <td style={{ padding: "12px 15px" }}>₹ 500</td>
          </tr>
          <tr>
            <td style={{ padding: "12px 15px" }}>
              Partnership, LLP, HUF, or Corporate accounts (offline only)
            </td>
            <td style={{ padding: "12px 15px" }}>₹ 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Brokerage;

//Make many of these tables by taking info as props
