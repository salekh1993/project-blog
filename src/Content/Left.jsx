import React from "react";
import { Link } from "react-router-dom";

const Left = ({ posts }) => {
  return (
    <div className="left">
      {posts.map((post) => {
        return (
          <div className="left__item">
            <div>
              <img src={post.Image} alt="phot" />
            </div>
            <div className="left__text">
              <h1>{post.title.toString().split("").slice(0, 30)}</h1>
              <p>
                {post.information.toString().split("").slice(0, 140)}
                <Link to={`/post/${post.id}`}>...read more</Link>
              </p>
              <h2>{post.category}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Left;
