"use client";

import React from "react";
import { Container, Content, Card, Layout } from "../components";
import { BLOGS, PROJECTS } from "../data";

export default function Projects() {
  return (
    <Layout.Standard>
      <Container.Project>
        <Content.Project>
          <Container.List items={PROJECTS} item={Card.Work} />
          <Container.List items={BLOGS} item={Card.Work} />
        </Content.Project>
      </Container.Project>
    </Layout.Standard>
  );
}
