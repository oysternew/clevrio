import { BlogType } from "../../types";
import Link from "next/link";
import React from "react";
import DivAnimateX from "../../components/utils/DivAnimateX";
type Props = {
  blogData: BlogType[];
};
const PopularBlogPosts = ({ blogData }: Props) => {
  return (
    <DivAnimateX className="sidebar-post mb-30">
      <div className="sidebar_title">
        <h4>Popular post</h4>
      </div>
      {blogData.slice(0, 5).map((item: BlogType, index) => (
        <div className="single_popular" key={index}>
          <Link href={`/blog/${item.slug}`}>
            <img src={item.img.image} alt={item.img.alt} />
          </Link>
          <h5>
            <Link href={`/blog/${item.slug}`}>{item.title}</Link>
          </h5>
        </div>
      ))}
    </DivAnimateX>
  );
};

export default PopularBlogPosts;
