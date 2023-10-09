import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";
import Themetoggle from "../../components/themetoggle";
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Portfolio = () => {
  return (
    <div className=" px-3 max-sm:px-2">
      <div className="About-header">
        <div>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </div>
        <Row className="my-8 mb-8">
          <Col lg="10">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}

          </Col>
        </Row>
        <div className="mb-3 grid  max-sm:px-0 grid-cols-2 max-sm:grid-cols-1 gap-4 max-sm:gap-2 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <LazyLoadImage src={data.img} alt="" />
                
                <div className="content font-bold">
                <Link to={data.link}>
                  <p>{data.description}</p>
                 </Link>
                </div>
              </div>
            );
          })}
          <div className="po_item1">
            <LazyLoadImage src="https://honeshraipareek.github.io/photography/auto.jpg" alt="auto" />
            <div className="content1 font-black">
              <p>Photography</p>
              <a target="_blank" href="https://honeshraipareek.github.io/photo.html">view project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
