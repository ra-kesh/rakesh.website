"use client";

import React from "react";
import { Container, Content, Card, Layout } from "../components";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <Layout.Standard>
      <Container.Project>
        <Content.Project>
          <Container.List items={PROJECTS} item={Card.Project} />
        </Content.Project>
      </Container.Project>
    </Layout.Standard>
  );
}
