import React from "react";
import ImageComponent from "./ImageComponent";
import ShortInfo from "./ShortInfo";

const SelfDefenceShortInfo = (props) => {
  return (
    <div>
      <section 
       className="p-5 text-center text-sm-start">
        <div className="container">
          <div className="row justify-content-between align-items-center flex-row-reverse">
            <ShortInfo
              header="Empower Yourself with Self-Defense"
              content="In today's world, every woman deserves to feel safe and confident. Surveys reveal that a staggering 81% of women have faced some form of harassment or assault. Self-defense isn't just a skill; it's a powerful tool to reclaim your personal safety and empowerment. Equip yourself with the knowledge and confidence to stand strong."
              btnText="Discover More"
              href="/selfdefence"
            />

            <ImageComponent imageUrl="https://media.istockphoto.com/photos/female-athlete-practicing-with-trainer-picture-id835151772?b=1&k=20&m=835151772&s=170667a&w=0&h=N3Psux_t60znssiUOYnBv7u81EBF8yRjtDUQSnAK5PY=" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelfDefenceShortInfo;
