function LeftSection({ img, productName, desc, links }) {
  return (
    <div className="container mb-5" style={{ padding: "10px 80px" }}>
      <div className="row">
        <div className="col-6">
          <img
            src={img}
            alt="Kit_png"
            style={{ height: "470px", width: "558px" }}
          />
        </div>

        <div className="col-6 mt-5 pt-5 ps-5 ">
          <h2>{productName}</h2>
          <p>{desc}</p>
          {links && links.length
            ? links.map((el) => (
                <a className="me-4" href="#">
                  {el} →
                </a>
              ))
            : null}
          <br />
          <div className="mt-5">
            <img
              className="me-3"
              src="assets/googlePlayBadge.svg"
              alt="Play STore"
            />
            <img src="assets/appstoreBadge.svg" alt="App Store" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
