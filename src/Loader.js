import React from "react";
import "./Loader.css";
import { useSelector } from "react-redux";

const Loader = () => {
  const loader = useSelector((state) => state.loader.loader);
  return (
    loader && (
      <div className="loader">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    )
  );
};

export default Loader;
