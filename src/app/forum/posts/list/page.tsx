"use client";
import { ReactNode } from "react";
import ForumLayout from "../../layout";

const List = () => {
  return (
    <>
      <div className="container">
        <ul className="subforum" id="subform-list">
          <li className="subforum-row">
            <div className="subforum-icon subforum-column center">
              <i className="fa fa-car center"></i>
            </div>
            <div className="subforum-description subforum-column">
              <h4>
                <a href="#" id="title">
                  Description Title
                </a>
              </h4>
              <p id="content">
                Description Content: let's try to be cool, otherwise,w at 'sthe
                point in libing together with people youdont' live.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

List.getLayout = function getLayout(page: ReactNode) {
  return <ForumLayout>{page}</ForumLayout>;
};

export default List;
