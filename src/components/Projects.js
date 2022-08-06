import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import angularImg from "../assets/img/angularImg.png";
import reactImg from "../assets/img/reactImg.png";
import softwareImg from "../assets/img/softwareImg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "Angular Project",
            description: "Responsive Single Page App",
            imgUrl: angularImg,
            url: "https://ericklee85.github.io/angular-demo/",
          },
          {
            title: "MERN Project",
            description: "Coming Soon",
            imgUrl: reactImg,
            url: "https://www.google.com",
          },
          {
            title: "Sofware Development",
            description: "Enterprise Project",
            imgUrl: softwareImg,
            url: "https://www.google.com",
          },
    ]
    return (
        <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <p>Currently working on a 38 hour lecture with Udemy, building a React Native Mobile App! I'll be sure to publish it as soon as I complete it!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Working on it!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="img"></img>
      </section>
    )
};