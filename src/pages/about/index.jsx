import React from "react";
import "./index.scss";
import mypic from "../../assets/mypic.jpg"

const About = () => (
  <main className="about-page">
    <div className="container">
      <div className="about-content">
        <div className="image-placeholder">
          <img
            src={mypic}
            alt="Author profile"
          />
        </div>
        <div className="about-text">
          <h1>About the Author</h1>
          <p>
            Hi, I'm Manjunath. I am a Full Stack Developer with a deep passion for
            building scalable systems and continuously learning new technologies.
          </p>
      <p>
        Over the years, I’ve worked across the full stack — from crafting
        intuitive front-end experiences in React, to building robust backend
        systems using Node.js, FastAPI, and Django. I’ve designed and optimized
        databases using PostgreSQL and MongoDB, and I actively explore modern
        architectures, system design principles, and emerging technologies like
        Agentic AI development.
      </p>

      <h2>Why I Created This Platform</h2>
      <p>
        As a developer, I constantly explore new tools, frameworks, and
        architectural patterns. While learning, I maintain structured notes of
        key insights, patterns, and important concepts — the kind of notes I
        wish I had during interviews or while building production systems.
      </p>
      <p>This platform serves two purposes:</p>
      <ul>
        <li>
          A knowledge base for myself — a place to revisit critical concepts
          when needed
        </li>
        <li>A beginner-friendly and interview-ready resource for others</li>
      </ul>
        </div>
      </div>
    </div>
  </main>
);

export default About;
