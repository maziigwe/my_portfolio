import React from "react";
import project from "../interfaces/project";

export const Project = (item: project) => {
  return (
    <div className="position-relative mx-1 card shadow _project">
      <h4 className="card-header">{item.title}</h4>

      {/* {item.dist} */}
      <div>
        {" "}
        <img className="card-img img-fluid" src={item.image} />
      </div>
      <p className="px-2 m-0">{item.description}</p>
      <div className="text-right card-footer bottom-0  right-0 left-0  ">
        <div className=" btn btn-outline-primary mx-2 "> {"Code </>"} </div>
        <div className="btn btn-primary">Live</div>
      </div>
    </div>
  );
};
