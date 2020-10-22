import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { css } from "styled-components/macro";

import { ReactComponent as Github } from "../Imgs/logo-github.svg";
import { ReactComponent as Netlify } from "../Imgs/netlify.svg";
import Form from "../Imgs/Contact-Form.png";
import Paladin from "../Imgs/paladin.png";
import Guessing from "../Imgs/Guessing-Game.png";
import Loan from "../Imgs/Loan-Calculator.png";
import Task from "../Imgs/Task-List.png";
import Reading from "../Imgs/Reading-List.png";

const Container = tw.div`mt-12`;
const HeadingContainer = tw.div` mb-12 md:mb-24`;
const Heading = tw.h2`mx-auto text-center mb-8`;
const Description = tw.p`mx-auto text-center text-lg`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mb-24 w-full sm:mx-2 md:mx-6 lg:mx-12 pb-4 sm:w-5/12 lg:w-1/3 flex flex-col items-center border-solid border border-gray-500 rounded-lg shadow-lg`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-full h-64 bg-cover bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  }
  .text {
    ${tw`text-xs text-gray-600 px-12 pt-5`}
  }
`;

const CardLinks = styled.div`
  ${tw`mt-4 flex`}
  .link {
    ${tw`mx-4 text-gray-400 focus:text-blue-700 `}
    .icon {
      ${tw`fill-current w-12 h-12`}
    }
  }
`;

export default ({
  heading = "My Latest Projects",
  description = "Below is a sampling of some of my lastest projects. Contact me if you want to know what else I'm working on!",
  cards = [
    {
      imageSrc: Form,
      name: "Material UI Contact Form",
      text:
        "This is a responsive form which authenticates data and sends an email. It is built using Material UI for styling, React, JavaScript, nodejs, react-hook-form for gathering input data, Yup for authentication, and email-js for email sending.",

      links: [
        {
          url: "https://github.com/no1atall/Form",
          icon: Github,
        },
        {
          url: "https://materialui-contact-form.netlify.app",
          icon: Netlify,
        },
      ],
    },

    {
      imageSrc: Paladin,
      name: "Paladin Demo Home Page",
      text:
        "This is a responsive demo home page built with Treact. It uses React, JavaScript, Html and CSS. The CSS is done with TailwindCSS framework and the styled components library. Github and Netilify links below.",

      links: [
        {
          url: "https://github.com/no1atall/Paladin/",
          icon: Github,
        },
        {
          url: "https://paladin-demo.netlify.app/",
          icon: Netlify,
        },
      ],
    },
    {
      imageSrc: Guessing,
      name: "Number Guessing Game",
      text:
        "This is a responsive guessing game where you have 7 guesses to guess a random number from 1 to 100. It uses Html, JavaScript, and CSS. Semantic UI is used as the CSS framework. Github and Netlify links below.",
      links: [
        {
          url: "https://github.com/no1atall/NumberGuessingGame",
          icon: Github,
        },
        {
          url: "https://littlenumberguessinggame.netlify.app/",
          icon: Netlify,
        },
      ],
    },
    {
      imageSrc: Reading,
      name: "Reading List",
      text:
        "This is a responsive Reading List. It uses local storage to keep tracks of books for you. It is built using Html, JavaScript, and CSS. Skeleon CSS is used as the CSS framework. Github and Netlify links below.",
      links: [
        {
          url: "https://github.com/no1atall/Book-List",
          icon: Github,
        },
        {
          url: "https://small-reading-list.netlify.app/",
          icon: Netlify,
        },
      ],
    },
    {
      imageSrc: Loan,
      name: "Loan Caculator",
      text:
        "This is a responsive loan calculator that calculates monthly payments, total interest, and total amount due. It is built with Html, JavaScript, and CSS. Bootstrap is used as the CSS framework. Github and Netlify links below.",
      links: [
        {
          url: "https://github.com/no1atall/LoanCalculator",
          icon: Github,
        },
        {
          url: "https://small-loan-calc.netlify.app/",
          icon: Netlify,
        },
      ],
    },
    {
      imageSrc: Task,
      name: " Personal Task List",
      text:
        "This is a responsive Task List utilizing local storage. It is built with Html, JavaScript and CSS. The CSS framework used for this project is Google's Material UI. Github and Netflify links below.",
      links: [
        {
          url: "https://github.com/no1atall/Task-List",
          icon: Github,
        },
        {
          url: "https://my-small-task-list.netlify.app/",
          icon: Netlify,
        },
      ],
    },
  ],
}) => {
  return (
    <Container>
      <HeadingContainer>
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
      </HeadingContainer>
      <Cards>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardImage imageSrc={card.imageSrc} />
            <CardContent>
              <span className="name">{card.name}</span>

              <p className="text">{card.text}</p>

              <CardLinks>
                {card.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.url}
                  >
                    <link.icon className="icon" />
                  </a>
                ))}
              </CardLinks>
            </CardContent>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};
