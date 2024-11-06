import React from "react";
import DivAnimateX from "../../components/utils/DivAnimateX";

const BlogSearchbar = () => {
  return (
    <DivAnimateX className="sidebar-post mb-30">
      <div className="blog_search">
        <input
          type="text"
          className="form-control"
          placeholder="Type & Press Enter"
        />
      </div>
    </DivAnimateX>
  );
};

export default BlogSearchbar;
