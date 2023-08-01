"use client";

import React from "react";
import {
  Container,
  Content,
  Card,
  Layout,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabGroup,
} from "../components";
import { BLOGS, PROJECTS } from "../data";

export default function Projects() {
  return (
    <Layout.Standard>
      <Container.Project>
        <Content.Project>
          <TabGroup>
            <TabsList>
              <TabsTrigger>Projects</TabsTrigger>
              <TabsTrigger>Blogs</TabsTrigger>
            </TabsList>
            <TabsContent>
              <Container.List items={PROJECTS} item={Card.Work} />{" "}
            </TabsContent>
            <TabsContent>
              <Container.List items={BLOGS} item={Card.Work} />
            </TabsContent>
          </TabGroup>
        </Content.Project>
      </Container.Project>
    </Layout.Standard>
  );
}
