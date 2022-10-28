import React from "react";
import project from "../interfaces/project";
import { Badge } from "../components/atoms/badge";

export const Project = (item: project) => {
  return (
    <div className="position-relative flex flex-column justify-content-between card shadow _project">
      <h4 className="card-header text-uppercase p-2 pb-0">{item.title}</h4>

      <div>
        {" "}
        <img className="card-img img-fluid" src={item.image} />
      </div>

      <div className="flex flex-column position-absolute justify-content-between p-1 text-justify card-footer bottom-0  right-0 left-0  ">
        <p className="text-lowercase m-0 mb-1">
          {item.description + "" + item.description}
        </p>
        <div className="flex justify-content-between">
          <Badge title={item.type} />
          <div className="text-right">
            {" "}
            <a href={`${item.repo ? item.repo : ""}`}>
              <div className=" btn btn-outline-primary mx-2  ">
                {" "}
                {"Code </>"}{" "}
              </div>
            </a>
            <div
              className={`btn btn-primary mr-1  ${
                !item.isLive ? " disabled " : ""
              }`}
            >
              Live
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
