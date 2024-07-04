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

            <ImageComponent imageUrl="https://web-static.wrike.com/blog/content/uploads/2018/03/Women_in_Tech_Know_Their_Worth_Its_Time-Everyone_Else_Does_Too_1.jpg?av=461f21a4d35a6149d69602c26a6400d5" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenInTechShortInfo;
