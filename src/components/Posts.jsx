import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { readPosts } from "../utility/crudUtility";
import { CardPost } from "./CardPost";

export const Posts = ({selectedProperties}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    readPosts(setPosts, selectedProperties);
  }, [selectedProperties]);
  
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {posts.length == 0 && (
        <div>A kiválasztott kategóriában nincs találat</div>
      )}
      {posts.map((obj) => (
        <CardPost key={obj.id} {...obj} />
      ))}
    </div>
  );
};
