"use client";

import React from "react";
import {
  AboutContent,
  AboutContainer,
  TitleSecondary,
  Description,
  Back,
} from "../components";
import { withNavbar } from "../components/Navbar/WithNavbar.Component";

function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <Back />
        <TitleSecondary>Hi There !</TitleSecondary>
        <Description className="md:max-w-3xl">
          I am a frontend developer based out of India, who loves to craft
          beautifully designed products on web with a touch of minimalism.
        </Description>
        <TitleSecondary>My career so far ...</TitleSecondary>
        <Description className="md:max-w-3xl">
          After completing my degree in 2019, I was working as a manager in a
          Photography Firm till pandemic.
          <br />
          <br />
          During the pandemic, I discovered a new passion for coding and I got
          myself into a coding bootcamp taught by Tanay Pratap (SSE,MicroSoft).
          Where I have learnt full stack web development with MERN and within
          six months I was able to complete five full-stack projects from
          scratch. I have also written some blogs during that time which have
          been read more than 2500 times already.
          <br />
          <br />
          After finishing with the bootcamp, I had a chance to work with
          Himanshu Kapoor (SSE,GitLab) on frontend of his personal crypto
          project for three months.
          <br />
          <br />
          Then I joined Invact and built the whole frontend of their Admin
          Portal and Teacher Portal which is now being used to manage everything
          on the LMS. I was also the part of the Brand Reveal Team and created
          the new marketing site within weeks by effectively collaborating with
          different stakeholders. I was awarded Employee Of The Month for the
          month of JUNE,2022 due to my tech and non-tech contribution for the
          company.
          <br />
          <br />
          After a eventful year at Bangalore and INVACT, currently I am taking a
          break and back to home, spending some time with family.
          <br />
          <br />
        </Description>
      </AboutContent>
    </AboutContainer>
  );
}

export default withNavbar(About);
