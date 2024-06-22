import React from "react";
import "../Styles/Home.scss";
import { Link } from "react-router-dom";
import {
  BiLogoDevTo,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import { useState } from "react";
import MouseTracker from "../Components/MouseMove";
const Home = () => {
  const [tab, set_tab] = useState(1); 
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      tab <= 3 ? set_tab(tab + 1) : set_tab(3);
      e.preventDefault();
    }
    if (e.key === "ArrowUp") {
      tab >= 1 ? set_tab(tab - 1) : set_tab(1);
      e.preventDefault();
    }
  });
  return (
    <div className="home-wrap flex">
      <MouseTracker />
      <div className="banner flex">
        <div className="left flex col">
          <div className="top flex col">
            <h1>Jawad Ali</h1>
            <h2>Full Stack Developer</h2>
            <p>
              Crafting pixel-perfect digital experiences that captivate, engage,
              and empower users with accessibility at their core.
            </p>
          </div>
          <div className="navs flex col">
            <ul className="flex col">
              <li
                className="flex"
                onClick={() => set_tab(1)}
                style={{ color: `${tab == 1 ? "white" : ""}` }}
              >
                <div
                  className="line"
                  style={{
                    width: `${tab == 1 ? "80px" : "40px"}`,
                    background: `${tab == 1 ? "white" : ""}`,
                  }}
                ></div>
                ABOUT
              </li>
              <li
                className="flex"
                onClick={() => set_tab(2)}
                style={{ color: `${tab == 2 ? "white" : ""}` }}
              >
                <div
                  className="line"
                  style={{
                    width: `${tab == 2 ? "80px" : "40px"}`,
                    background: `${tab == 2 ? "white" : ""}`,
                  }}
                ></div>
                PROJECTS
              </li>
              <li
                className="flex"
                onClick={() => set_tab(3)}
                style={{ color: `${tab == 3 ? "white" : ""}` }}
              >
                <div
                  className="line"
                  style={{
                    width: `${tab == 3 ? "80px" : "40px"}`,
                    background: `${tab == 3 ? "white" : ""}`,
                  }}
                ></div>
                CONTACT
              </li>
            </ul>
          </div>
          <div className="links flex">
                
                <Link className="link" target="_blank" to={'https://github.com/Jawad-Ali-Soomro'}>
                  <BiLogoGithub />
                </Link>
                <Link className="link" target="_blank" to={'https://dev.to/jawadalisoomro'}>
                  <BiLogoDevTo />
                </Link>
                <Link className="link" target="_blank">
                  <BiLogoInstagram />
                </Link>
                <Link className="link" target="_blank">
                  <BiLogoLinkedin />
                </Link>
                <Link className="link" target="_blank">
                  <BiLogoTwitter />
                </Link>
              </div>
        </div>
        <div className="right flex col">
          {tab == 1 ? (
            <div className="about-wrap wrap flex col">
              <h1>Hey There!</h1>
              <h1>Jawad Ali Here</h1>
              <p>
                Embarking on my journey as a <span>web developer</span> in 2021,
                I've evolved into a <span>skilled</span> MERN stack{" "}
                <span>specialist</span>, adept in{" "}
                <span>backend development</span> and <span>API</span> design.
                I'm dedicated to creating seamless digital experiences that{" "}
                <span>push boundaries </span>
                & exceed expectations
              </p>
              <p>
                My focus at <span>Pakistan</span> centers on crafting accessible
                user interfaces, <span>blending design</span> and engineering
                seamlessly. I'm passionate about <span>building</span> software
                that excels both <span>visually</span> and
                <span> functionally</span>. Outside of work, I enjoy rock
                climbing, diving into books, and <span>exploring</span> Hyrule
                in search of hidden treasures like Korok seeds
              </p>
            </div>
          ) : tab == 2 ? (
            <div className="projects-wrap wrap lex col">
              <ul className="flex col">
                <Link className="flex link col" to={'https://github.com/Jawad-Ali-Soomro/Shopy'}>
                  Shopy
                  <span>- WEBFLOW DEVELOPMENT</span>
                </Link>
                <Link className="flex link col" to={'https://github.com/Jawad-Ali-Soomro/swift-cart'}>
                  Swift Cart
                  <span>- WEBFLOW DEVELOPMENT</span>
                </Link>
                <Link className="flex link col" to={'https://github.com/Jawad-Ali-Soomro/arthub'}>
                  Arthub
                  <span>- WEBFLOW DEVELOPMENT</span>
                </Link>
                <Link className="flex link col" to={'https://github.com/Jawad-Ali-Soomro/CinePro'}>
                  Cinepro
                  <span>- WEBFLOW DEVELOPMENT</span>
                </Link>
              </ul>
            </div>
          ) : tab == 3 ? (
            <div className="contact-wrap wrap flex col">
              <h1>Hello.</h1>
              <p>
                Hello. Need a <span>beautiful</span>, well-structured{" "}
                <span>website</span> that you can own and <span>maintain</span>{" "}
                yourself? Get in <span>touch</span>.
              </p>
              <Link className="link" target="_blank">jawadal829@gmail.com</Link>
              <div className="links flex">
                
                <Link className="link" target="_blank" to={'https://github.com/Jawad-Ali-Soomro'}>
                  <BiLogoGithub />
                </Link>
                <Link className="link" target="_blank" to={'https://dev.to/jawadalisoomro'}>
                  <BiLogoDevTo />
                </Link>
                <Link className="link" target="_blank">
                  <BiLogoInstagram />
                </Link>
                <Link className="link" target="_blank">
                  <BiLogoLinkedin />
                </Link>
                <Link className="link" target="_blank">
                  <BiLogoTwitter />
                </Link>
              </div>
            </div>
          ) : (
            this
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
