import React from "react";
import Link from "../Routing/Link";

const ShortInfo = (props) => {
  return (
    <div className="col-md">
      <div className="text-center text-lg-start">
        <h2>{props.header}</h2>
        <p>{props.content}</p>
        <button className="btn btn-primary mb-5 rounded-pill">
          <Link className="text-white text-decoration-none" href={props.href}>
            {props.btnText}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ShortInfo;
