
import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Resume.css";
import TopButton from "../../components/topButton/TopButton";

export default class ResumePage extends Component {
  render() {
    const theme = this.props.theme;
    const isSection = this.props.isSection;

    return (
      <div
        className="resume-main"
        id="resume"
        style={{
          position: "relative",
          zIndex: 1,
          padding: "60px 0 20px",
          textAlign: "center",
        }}
      >
        {!isSection && <Header theme={theme} />}

        {!isSection && (
          <Footer
            theme={theme}
            onToggle={this.props.onToggle}
          />
        )}

        {!isSection && <TopButton theme={theme} />}
      </div>
    );
  }
}
