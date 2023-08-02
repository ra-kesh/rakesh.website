"use client";

import React from "react";
import {
  Container,
  Content,
  Description,
  Layout,
  TitleSecondary,
} from "../components";

export default function About() {
  return (
    <Layout.Standard>
      <Container.About>
        <Content.About>
          <TitleSecondary>Hi There !</TitleSecondary>
          <Description>
            I am a frontend developer based out of India, who loves to craft
            beautifully designed products on web.
          </Description>
          <TitleSecondary>My career so far ...</TitleSecondary>
          <Description>
            After completing my degree, I was working as a manager in a
            Photography Firm managing clientele and contractual photographers
            till pandemic.
            <br />
            <br />
            During the pandemic, I got myself into a coding bootcamp taught by
            Tanay Pratap (Senior Software Engineer, MicroSoft) out of boredom.
            Where I have completed five full-stack projects within six months
            from scratch. I have also wrote some blogs during that time which
            have been read more than 2500 times already.
            <br />
            <br />
            After finishing with the bootcamp, I had a chance to work with
            Himanshu Kapoor(Senior software Engineer, GitLab) on his personal
            crypto project for three months .
            <br />
            <br />
            Then I joined Invact and built the whole frontend of their ADMIN
            Portal and Teacher Portal which is now being used to manage
            everything on the LMS. I was also the part of the Brand Reveal team
            and created the new marketing site within weeks by effectively
            collaborating with different stakeholders. I was awarded Employee Of
            The Month also due to my tech and non-tech contribution for the
            company.
            <br />
            <br />
            After a eventful year at INVACT, I am looking out for my next
            adventure right now.
          </Description>
        </Content.About>
      </Container.About>
    </Layout.Standard>
  );
}
