function SupportOptions() {
  return (
    <div className="container">
      <div className="row">
        <div className="options row col-8 pt-5 pb-5">
          {/* 1st */}
          <div
            className=" option d-flex align-items-center"
            style={{ border: "1px solid rgb(213, 210, 210)" }}
          >
            <span
              className="icon"
              style={{ padding: "15px 20px", height: "60px", width: "60px" }}
            >
              <i className="fa-solid fa-circle-plus"></i>
            </span>
            <h2 className="supportHeadings">Account Opening</h2>
            <span className="dropDownBtn">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
          {/* 2nd */}
          <div
            className=" option d-flex align-items-center"
            style={{ border: "1px solid rgb(213, 210, 210)" }}
          >
            <span
              className="icon"
              style={{ padding: "15px 20px", height: "60px", width: "60px" }}
            >
              <i class="fa-solid fa-circle-user"></i>
            </span>
            <h2 className="supportHeadings">Your Zerodha Account</h2>
            <span className="dropDownBtn">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
          {/* 3rd */}
          <div
            className=" option d-flex align-items-center"
            style={{ border: "1px solid rgb(213, 210, 210)" }}
          >
            <span
              className="icon"
              style={{ padding: "15px 20px", height: "60px", width: "60px" }}
            >
              <i class="fa-solid fa-paper-plane"></i>
            </span>
            <h2 className="supportHeadings">Kite</h2>
            <span className="dropDownBtn">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
          {/* 4th */}
          <div
            className=" option d-flex align-items-center"
            style={{ border: "1px solid rgb(213, 210, 210)" }}
          >
            <span
              className="icon"
              style={{ padding: "15px 20px", height: "60px", width: "60px" }}
            >
              <i class="fa-solid fa-indian-rupee-sign"></i>
            </span>
            <h2 className="supportHeadings">Funds</h2>
            <span className="dropDownBtn">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
          {/* 5th */}
          <div
            className=" option d-flex align-items-center"
            style={{ border: "1px solid rgb(213, 210, 210)" }}
          >
            <span
              className="icon"
              style={{ padding: "15px 20px", height: "60px", width: "60px" }}
            >
              <i class="fa-solid fa-code-branch"></i>
            </span>
            <h2 className="supportHeadings">Console</h2>
            <span className="dropDownBtn">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
          {/* 6th */}
          <div
            className=" option d-flex align-items-center"
            style={{ border: "1px solid rgb(213, 210, 210)" }}
          >
            <span
              className="icon"
              style={{ padding: "15px 20px", height: "60px", width: "60px" }}
            >
              <i class="fa-solid fa-coins"></i>
            </span>
            <h2 className="supportHeadings">Coin</h2>
            <span className="dropDownBtn">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportOptions;
