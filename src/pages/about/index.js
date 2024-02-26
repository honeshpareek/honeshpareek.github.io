import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import SkillsCarousel from "../../components/carousel";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header max-sm:px-3 max-sm:pl-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className=" pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4 font-bold">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4 font-bold">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4 font-bold">Skills</h3>
          </Col>
          <Col lg="7" className="flex flex-row justify-center align-middle flex-wrap gap-4">
            {skills.map((data, i) => {
              return (
              <div className="relative rounded-full w-fit overflow-clip ">
                <div className="absolute progress-width -z-10 w-full h-full flex"
                style={{
                  width: `${data.value}%`,
                }}></div>
                <div key={i} className=" w-max bg-slate-500 justify-center items-center rounded-full flex py-3 px-4 m-1" 
               >
                  <h3 className=" uppercase">{data.name}</h3>
                  {/* <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div> */}
                </div>
              </div>
              );
            })}
          </Col>
        </Row>
        <Row className="p-0 sec_sp justify-center flex mb-30">
          <SkillsCarousel />
        </Row>
        <Row className="sec_sp">
          <Col lang="3">
            <h3 className="color_sec py-4` font-bold">services</h3>
          </Col>
          <Col lg="7" className="mr-64">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
