
import React, { Component } from "react";

import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import TopButton from "../../components/topButton/TopButton";
import BackgroundVectors from "../../components/backgroundVectors/BackgroundVectors";

import Experience from "../../containers/experience/Experience";
import Education from "../education/EducationComponent";
import Certifications from "../../containers/certifications/Certifications";
import Projects from "../projects/Projects";
import Contact from "../contact/ContactComponent";
import ResumePage from "../resume/Resume";

class Home extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div
        style={{
          position: "relative",
          backgroundColor: theme.body,
        }}
      >
        <Header theme={theme} />

        <BackgroundVectors />

        {/* Home Section */}
        <div id="home" style={{ position: "relative", zIndex: 1 }}>
          <Greeting theme={theme} />
        </div>

        {/* Skills Section */}
        <div id="skills" style={{ position: "relative", zIndex: 1 }}>
          <Skills theme={theme} />
        </div>

        {/* Education Section */}
        <Education theme={theme} isSection={true} />

        {/* Certifications Section */}
        <div id="certifications" style={{ position: "relative", zIndex: 1 }}>
          <Certifications theme={theme} />
        </div>

        {/* Projects Section */}
        <Projects theme={theme} isSection={true} />

        {/* Experience Section */}
        <Experience theme={theme} />

        {/* Contact Section */}
        <Contact theme={theme} isSection={true} />

        {/* Resume Section */}
        <ResumePage theme={theme} isSection={true} />

        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
