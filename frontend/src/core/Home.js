import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
export default function Home() {
  console.log("api is", API);
  return (
    <Base title="Home Page">
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success">Button 1</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">Button 2</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">Button 3</button>
        </div>
      </div>
    </Base>
  );
}
