
import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    const isSection = this.props.isSection;

    return (
      <div
        className="education-main"
        id="education"
        style={{ position: "relative", zIndex: 1 }}
      >
        {!isSection && <Header theme={theme} />}

        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>

              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>

                <h3
                  className="heading-sub-text"
                  style={{ color: theme.text }}
                >
                  Basic Qualification and Achievements
                </h3>
              </div>
            </div>
          </Fade>

          <Educations theme={theme} />

          {!isSection && certifications.certifications.length > 0 && (
            <Certifications theme={theme} />
          )}
        </div>

        {!isSection && <Footer theme={theme} />}
        {!isSection && <TopButton theme={theme} />}
      </div>
    );
  }
}

export default Education;
