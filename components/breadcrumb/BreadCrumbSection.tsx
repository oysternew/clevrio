import Link from "next/link";
import React from "react";
type Props = {
  currentPage: string;
  headerText?: string;
};
const BreadCrumbSection = ({ currentPage, headerText }: Props) => {
  return (
    <section className="section-top">
      <div className="container">
        <div className="col-lg-10 offset-lg-1 text-center">
          <div className="section-top-title">
            <h1>{headerText ? headerText : currentPage}</h1>
            <ul>
              <li>
                <Link href="/">Home </Link>
              </li>
              <li className="ms-1"> / {currentPage}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbSection;
