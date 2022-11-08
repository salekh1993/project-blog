import React from "react";
import { Link } from "react-router-dom";

const Right = ({ posts }) => {
  return (
    <div className="right">
      {posts.map((post) => {
        return (
          <div>
            <div>
              <img src={post.Image} alt="phot" />
            </div>
            <div>
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

export default Right;
