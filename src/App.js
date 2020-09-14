// App.js
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ian Vicherek",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "I'm a Web Developer",
        subTitle: "Welcome to my Portfolio",
        text: "Check out my projects below!",
      },
      about: {
        title: "About Me",
        subTitle1: "My Developer Start",
        subTitle2: "Discovering Front End",
        subTitle3: "Where I Am Now",
        subTitle4: "Future Plans",

        text1:
          "I began learning coding with Python. I grabbed the book Cracking codes with Python, and read it cover to cover within a matter of day. While reading through the book, I found myself falling in love with the process of coding. It was all new, and exciting, and I used whatever spare time I had to write out, play with, break, and fix the code examples I was reading about.",
        text2:
          "Even though I enjoyed the process of coding, I found that working with Python as my primary language wasn't fulfilling. I did know, however, that I wanted to have a career in a programing field. Clicking through youtube, I happend to stumble upon a video about freecodecamp.org, and I was hooked. While working through the lessons on freecodecamp, I fell in love with the dynamic and responsive nature of web development. I could type something into me IDE, and immediatly see a response on my screen. From then on, I dived in deeper and never looked back.",
        text3:
          "Since then, I have gotten a through understanding of Html and CSS, as well as learned Javascript and React as my main languages and frameworks. Furthermore, I have put some time into learning and understanding the Fetch API and GraphQL for any API related projects I wanted to work on. I have looked at and worked with multiple CSS Frameworks, including Bootsrap, Materilize, Semantic UI and Skeleton CSS. My favourite, however, is TailwindCSS, especially when used in conjunction with the Styled Components libarary. The versatility it offers is unmatched by any other CSS framework I have come across.",
        text4:
          "In the immediate future, I want to find work at a company that uses the technologies I have learned. This is both to sharpen and grow my existing skillset, as well as experience the working enviroment at a web development company. From there, I want to learn the tech stack the company uses, and perhaps delve into the back end side of things. Long term, I want to continue learning about good web design, and keep learning and actively growing my career.",
      },
      contact: {
        title: "Get in Touch",
      },
    };
  }

  render() {
    return (
      <Router>
        <Navbar />

        <Route
          path="/"
          exact
          render={() => (
            <Home
              title={this.state.home.title}
              subTitle={this.state.home.subTitle}
              text={this.state.home.text}
            />
          )}
        />
        <Route
          path="/about"
          render={() => (
            <About
              title={this.state.about.title}
              subTitle1={this.state.about.subTitle1}
              subTitle2={this.state.about.subTitle2}
              subTitle3={this.state.about.subTitle3}
              subTitle4={this.state.about.subTitle4}
              text1={this.state.about.text1}
              text2={this.state.about.text2}
              text3={this.state.about.text3}
              text4={this.state.about.text4}
            />
          )}
        />
        <Route
          path="/contact"
          render={() => <Contact title={this.state.contact.title} />}
        />

        <Footer />
      </Router>
    );
  }
}
export default App;
