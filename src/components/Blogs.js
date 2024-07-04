import React from "react";

const Blogs = (props) => {
  return (
    <div>
      <div className="h1 text-center">Blogs</div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md g-4">
            <div className="card bg-light text-dark">
              <div className="card-body text-center">
                <h3 className="card-title g-4">
                  Sport and women's empowerment
                </h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis ad hic veritatis facere ipsum, ab nesciunt. Atque
                  numquam suscipit temporibus, error, quibusdam dolor, cum
                  delectus fugit asperiores perferendis odit cupiditate.
                </p>
                <a href="#" className="btn btn-dark">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md g-4">
            <div className="card bg-light text-dark">
              <div className="card-body text-center">
                <h3 className="card-title mb-3 text-wrap">
                  Women's empowerment and human development
                </h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis ad hic veritatis facere ipsum, ab nesciunt. Atque
                  numquam suscipit temporibus, error, quibusdam dolor, cum
                  delectus fugit asperiores perferendis odit cupiditate.
                </p>
                <a href="#" className="btn btn-dark">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md g-4">
            <div className="card bg-light text-dark">
              <div className="card-body text-center">
                <h3 className="card-title mb-3">
                  What is missing in measures of women's empowerment?
                </h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis ad hic veritatis facere ipsum, ab nesciunt. Atque
                  numquam suscipit temporibus, error, quibusdam dolor, cum
                  delectus fugit asperiores perferendis odit cupiditate.
                </p>
                <a href="#" className="btn btn-dark">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
