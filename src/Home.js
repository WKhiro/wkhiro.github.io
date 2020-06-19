import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-flexbox-grid';
import { Particles } from 'react-particles-js';
import { Spring } from 'react-spring/renderprops';
import { FaLinkedin, FaGithub, FaCopyright } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";
import { MdMailOutline } from "react-icons/md";
import { IconContext } from "react-icons";
import styled, { keyframes } from 'styled-components';
import punchy from './assets/punchy.png';

const StyledImg = styled.img`

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const Styles = styled.div`

/* Background configuration */
.gradient
{
  background: linear-gradient(rgba(250, 0, 0, 0.5), transparent), no-repeat;
  background-color: purple; /* primary color of gradient */
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  z-index: -3;
}

.gradientContainer
{
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
}

/* Text columns */
.welcomeText
{
  color: white;
  text-shadow: 2px 2px 4px black;
  padding: 50px;
}

.welcomeText.right
{
  margin-left: 20px;
}

.header
{
    text-align: center;
    margin-bottom: 20px;
}

.headerH3
{
  display: inline;
}

.linkSpacing
{
  margin-bottom: 5px;
}

.linkDiv
{
  margin-right: 10px;
  display: inline;
  color: white;
  &:hover
  {
    opacity: 0.8;
  }
}

.icon
{
  display: inline;
  filter: drop-shadow(2px 2px 4px black);
}

.iconText
{
  display: inline;
  margin-left: 10px;
}

.gameIcon
{
  filter: drop-shadow(2px 2px 4px black);
  margin-left: 10px;
}

/* Copyright text */
.bottomText
{
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px black;
}

.bottomText.copyRight
{
  margin-bottom: 20px;
}

a
{
  color: aqua;
  text-decoration: none;
}

`;

export const Home = () => (
  <Styles>
    <div className="gradientContainer">
    {/* Value_area: smaller = denser clusters */}
      <Particles className="gradient" params={{
        particles: {
          color: {
            value: "#FFFFFF"
          },
          line_linked: {
            color: {
              value: "#33A3FF"
            }
          },
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 600
            }
          },
          size: {
            value: 3
          }
        }
      }}
      />
    </div>

    <Container>
      <Row top="xs">
        <Spring from={{opacity: 0}} to={{opacity: 1}}
        config={{delay: 100, duration: 1000}}>
        {props =>
        <Col xs className="welcomeText" style={props}>
          <h1 className="header">Welcome!</h1>
          <p>
            This is my personal website. I either linked you here myself,
            or you got here via my GitHub. Either way, you can learn more about
            me by reading the section to the right, or by looking at my blog or
            projects page. <br/><br/> Here are some handy links if you want to
            email me, view my LinkedIn, or check out my projects directly on
            Github!
          </p>
          <div className="linkSpacing">
            <a href="mailto:wesleykok@hotmail.com">
              <div className="linkDiv">
                <IconContext.Provider value={{ size: '1.5em' }}>
                  <div className="icon"><MdMailOutline /></div>
                </IconContext.Provider>
                <p className="iconText">Email</p>
              </div>
            </a>
          </div>
          <div className="linkSpacing">
            <a href="https://www.linkedin.com/in/wesley-kok/">
              <div className="linkDiv">
                <IconContext.Provider value={{ size: '1.5em' }}>
                  <div className="icon"><FaLinkedin /></div>
                </IconContext.Provider>
                <p className="iconText">LinkedIn</p>
              </div>
            </a>
          </div>
          <div className="linkSpacing">
            <a href="https://github.com/WKhiro">
              <div className="linkDiv">
                <IconContext.Provider value={{ size: '1.5em' }}>
                  <div className="icon"><FaGithub /></div>
                </IconContext.Provider>
                <p className="iconText">GitHub</p>
              </div>
            </a>
          </div>
          <StyledImg src={punchy} />
        </Col>
        }
        </Spring>

        <Spring from={{opacity: 0}} to={{opacity: 1}}
        config={{delay: 500, duration: 1000}}>
        {props =>
        <Col xs className="welcomeText right" style={props}>
          <h1 className="header"> About Me </h1>
            <h3>Who Am I?</h3>
            <p>
              I'm Wesley. I'm a fresh graduate, and an aspiring software
              engineer. Besides pursuing formal education in Computer Science
              through university courses, I began my journey into
              software development by tinkering around with technologies I found
              interesting to me, such as ReactJS, Unity, and Android Studio.
              I've been exposed to a lot of coding languages as well, but never
              truly got to specialize in a select few. Currently, I'm aimming to
              specialize more in Python, JavaScript, and HTML5/CSS3. Recently,
              I've been searching for an entry-level software engineer position
              whilst improving my coding proficiency in the meantime.
            </p>
            <h3>Alma Mater</h3>
            <ul>
              <li>University of California - San Diego</li>
              <li>B.S. in Computer Science (Spring 2020)</li>
            </ul>
            <h6>Favorite Courses</h6>
            <ul>
              <li>Artificial Intelligence</li>
              <li>Computer Security</li>
              <li>Computer Graphics</li>
            </ul>
            <h3 className="headerH3">
              Hobbies and Interests
              <IconContext.Provider value={{ size: '1.5em' }}>
                <GiGamepad className="gameIcon"/>
              </IconContext.Provider>
            </h3>
            <p>
              I love playing video games and badminton. I was an active member
              of the UCSD Badminton Team, and have played for my respective
              school's team since high school (8 years). Outside of team
              practice, I often played badminton recreationally as well
              (although not recently due to COVID-19)
            </p>
            <p>
              I'm also an avid gamer; I mostly enjoy playing League of Legends
              and Nintendo games. I adore cats as well.
            </p>
        </Col>
        }
        </Spring>
      </Row>

      <div className="bottomText">Favicon is made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from<a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>

      <div className="bottomText copyRight">

          <IconContext.Provider value={{ size: '1.5em' }}>
            <FaCopyright className="icon"/>
          </IconContext.Provider>
          2020 Wesley Kok
      </div>
    </Container>
  </Styles>
)
