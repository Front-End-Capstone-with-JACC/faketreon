import React from "react";
import "./Carousel.css";
import { Outlet, Link } from "react-router-dom";

export const Carousel = (props) => {
  return (
    <div className={props.user}>
        <Link to={props.user.name}>
          <img className={props.user.name} src={props.user.avatar} />
        </Link>
    </div>
  );
};
