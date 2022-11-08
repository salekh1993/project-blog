import React from "react";
import { Link } from "react-router-dom";
import "./Content.css";

const Advertising = ({ posts }) => {
  return (
    <div className="advertising">
      {posts.map((item) => {
        return (
          <Link to={`/post/${item.id}`} className="advertising-item">
            <div className="advertising-card">
              <p>{item.title.slice(0, 20)}...</p>
              <img src={item.Image} alt="asd" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Advertising;
