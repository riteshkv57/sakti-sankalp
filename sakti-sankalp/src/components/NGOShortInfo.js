import React from "react";
import ShortInfo from "./ShortInfo";

const NGO = (props) => {
  return (
    <div>
      <section className="p-4 text-center text-sm-start">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <ShortInfo
              header="Connect with Us"
              content="Reach out to different NGOs across India which support and work
                towards Women's Empowerment, Self defence for Women, Girl child
                education."
              btnText="Learn more"
              href="ngo"
            />
            <ShortInfo
              header="Support Us"
              content="Reach out to different NGOs across India which support and work
              towards Women's Empowerment, Self defence for Women, Girl child
              education."
              btnText="Proceed"
              href="/"
            />
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default NGO;
