import React from "react";
import ImageComponent from "./ImageComponent";
import ShortInfo from "./ShortInfo";

const Education = (props) => {
  return (
    <div>
      <section className="p-5 text-center text-sm-start">
        <div className="container">
          <div className="row justify-content-between align-items-center flex-row-reverse">
            <ShortInfo
              header="Education"
              content="Girls who receive an education are less likely to marry young
                and more likely to lead healthy, productive lives. They earn
                higher incomes, participate in the decisions that most affect
                them, and build better futures for themselves and their
                families. Girls' education strengthens economies and reduces
                inequality."
              btnText="Learn more"
              //   padding="5"
              href="/"
            />
            <ImageComponent
              imageUrl={
                "https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGVkdWNhdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
