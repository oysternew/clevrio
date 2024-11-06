import Link from "next/link";
import React from "react";
import DivAnimateY from "../utils/DivAnimateY";
import { BlogType } from "@/types";
type Props = {
  showHeader?: boolean;
  endIndex: number;
  blogData: BlogType[];
};
const BlogSection = ({ showHeader, endIndex, blogData }: Props) => {
  return (
    <section id="blog" className="blog_area section-padding overflow-hidden">
      <DivAnimateY className="container">
        {showHeader && (
          <div className="section-title text-center">
            <h2>Latest Blog & news</h2>
            <p>
              We offer a brand new approach to the most basic learning
              paradigms. Choose from a wide range of learning options and gain
              new skills! Our school is know.
            </p>
          </div>
        )}
        <div className="row g-4">
          {blogData.slice(0, endIndex).map((item, index) => (
            <div className="col-lg-4 col-sm-6 col-xs-12" key={index}>
              <div className="single_blog">
                <img
                  src={item.img.image}
                  className="img-fluid"
                  alt={item.img.alt}
                />
                <div className="content_box">
                  <span>
                    {item.date} | <Link href="/blog">{item.category}</Link>
                  </span>
                  <h2>
                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                  </h2>
                  <Link className="btn_one" href={`/blog/${item.slug}`}>
                    Read More <i className="ti-arrow-top-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DivAnimateY>
    </section>
  );
};

export default BlogSection;
