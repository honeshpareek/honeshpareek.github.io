import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";
import Themetoggle from "../../components/themetoggle";

const disable = () => {
    set
}

export const Portfolio = () => {
  return (
    <div className="sm: px-4">
      <div className="About-header">
        <div>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </div>
        <Row className="">
          <Col lg="10">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-3 grid grid-cols-2 max-sm:grid-cols-1 gap-3 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content font-black">
                  <p>{data.description}</p>
                  <Link to={data.link}>view project</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
