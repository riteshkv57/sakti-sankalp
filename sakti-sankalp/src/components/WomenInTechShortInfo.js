import React from "react";
import ShortInfo from "./ShortInfo";
import ImageComponent from "./ImageComponent";

const WomenInTechShortInfo = (props) => {
  return (
    <div>
      <section 
      // style={{backgroundColor:"#e7edfd"}}
       className="p-5 text-center text-sm-start">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <ShortInfo
              header="Women In Tech"
              content="The tech industry still has a long way to go toward equity and equality in the 
              workplace, but there are lots of ways it can do better."
              // padding="5"
              btnText="Learn more"
              href="/womenintech"
            />

            <ImageComponent imageUrl="https://mondo.com/wp-content/uploads/2023/02/women-in-tech-business-benefits-2023.jpg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenInTechShortInfo;
