import React from "react";
import { useParams } from "react-router-dom";
import Left from "./Left";
import Right from "./Right";
import Advertising from "./Advertising";
import "./Content.css";

const Content = ({ data }) => {
  const { category } = useParams("");
  const posts = data.filter((item) => item.category === category);

  return (
    <div className="content">
      <h1>{category.toUpperCase()}</h1>
      <div className="content__item">
        <Left posts={posts.filter((item) => item.direction === "left")} />
        <Right posts={posts.filter((item) => item.direction === "right")} />
      </div>
      <hr />
      <h1>You can also wath</h1>
      <h3>Read more</h3>
      <Advertising
        posts={data.filter(
          (item, index) =>
            item.category !== category && index < 20 && index % 2 === 0
        )}
      />
    </div>
  );
};

export default Content;
