import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Nicholas Kuo's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Nicholas Kuo's Site</Link></h2>
          <p>
            Hello! This is my personal site. My name is Nicholas Kuo, and I have programmed this static
            website using React.js (with React Bootstrap, HTML/CSS, and JavaScript). 
          </p>
        </div>
      </header>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> My source code is available at <a href="https://github.com/nicholaskuo/nicholas-kuo">here</a>.</p>
    </article>
  </Main>
);

export default Index;
