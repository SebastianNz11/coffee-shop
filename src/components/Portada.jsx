import React from "react";

export const Portada = () => {
  return (
    <img
      src="/portada.jpg"
      className="img-fluid z-1"
      alt=""
      style={{ height: "400px", width: "100%", objectFit: "cover" }}
    ></img>
  );
};
