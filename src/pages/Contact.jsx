import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import tw from "tailwind.macro";

import Hero from "../components/Hero";

const Wrapper = styled.div`
  ${tw`-mt-24`}
`;

const FormWrapper = styled.div`
  ${tw` flex justify-center flex-col mx-2 sm:mx-auto -mt-64 px-4 
   max-w-screen-sm mb-24 border-solid border-2 rounded border-gray-300 shadow-lg `}
`;

const Form = styled.form`
  ${tw`flex flex-col my-4`}
`;

const Label = styled.label`
  ${tw`mb-1 font-semibold`}
`;

const Input = styled.input`
  ${tw`border-gray-200 h-6 mb-2 rounded`}
`;

const TextArea = styled.textarea`
  ${tw`h-64 border-gray-500 border-t-2 border-l-2  mb-4 rounded`}
`;

const Button = styled.button`
  ${tw` h-8 w-24 md:w-32 bg-blue-700 hover:bg-blue-500 border-gray-600 hover:border-700 text-white font-bold`}
`;

const KEY = process.env.REACT_APP_EMAILJS_API_KEY


const Contact = ({ title }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    setDisabled({
      disabled: true,
    });

    emailjs
      .sendForm(
        "gmail",
        "template_ykr6vvc",
        e.target,
        KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Wrapper>
      <Hero title={title}></Hero>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Your Name</Label>
          <Input
            name="name"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Label htmlFor="email">Your Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="subject">Subject</Label>
          <Input
            name="subject"
            id="subject"
            type="text"
            placeholder="Subject"
            value={subject}
            required
            onChange={(e) => setSubject(e.target.value)}
          />
          <Label htmlFor="message">Enter A Message</Label>
          <TextArea
            name="message"
            id="message"
            type="text"
            placeholder="Message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit" value="send" disabled={disabled}>
            Send
          </Button>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
};

export default Contact;
