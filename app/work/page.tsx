"use client";

import React from "react";
import {
  Container,
  Content,
  Layout,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabGroup,
} from "../components";
import { BLOGS, PROJECTS } from "../data";
import { ProjectCard, BlogCard } from "./component";

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
              <Container.List items={PROJECTS} item={ProjectCard} />{" "}
            </TabsContent>
            <TabsContent>
              <Container.List items={BLOGS} item={BlogCard} />
            </TabsContent>
          </TabGroup>
        </Content.Project>
      </Container.Project>
    </Layout.Standard>
  );
}
