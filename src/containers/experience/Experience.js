import React, { Component } from "react";
import { Fade } from "react-reveal";
import { experience } from "../../portfolio";
import "./Experience.css";

class Experience extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="experience-main" id="experience">
        <div className="basic-experience">
          <Fade bottom duration={1000}>
            <div className="experience-heading">
              <h1 style={{ color: theme.text }}>Experience</h1>
              <p style={{ color: theme.secondaryText }}>
                {experience.subtitle}
              </p>
            </div>
          </Fade>

          {experience.sections.map((section, index) => (
            <Fade bottom duration={1000} key={index}>
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>{section.title}</h2>

                {section.experiences.map((item, i) => (
                  <div className="experience-item" key={i}>
                    <h3 style={{ color: theme.imageHighlight }}>
                      {item.title}
                    </h3>

                    <h4 style={{ color: theme.text }}>{item.company}</h4>

                    <p style={{ color: theme.secondaryText }}>
                      {item.duration} | {item.location}
                    </p>

                    <p style={{ color: theme.secondaryText }}>
                      {item.description}
                    </p>

                    <a
                      href={item.company_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Organization ↗
                    </a>
                  </div>
                ))}
              </div>
            </Fade>
          ))}
        </div>
      </div>
    );
  }
}

export default Experience;
