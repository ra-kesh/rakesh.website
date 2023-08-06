"use client";

import React from "react";
import {
  Layout,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabGroup,
  WorkContent,
  WorkContainer,
  ListContainer,
} from "../components";
import { BLOGS, PROJECTS } from "../data";
import { ProjectCard, BlogCard } from "./component";

export default function Projects() {
  return (
    <Layout.Standard>
      <WorkContainer>
        <WorkContent>
          <TabGroup>
            <TabsList>
              <TabsTrigger>Projects</TabsTrigger>
              <TabsTrigger>Blogs</TabsTrigger>
            </TabsList>
            <TabsContent>
              <ListContainer items={PROJECTS} item={ProjectCard} />{" "}
            </TabsContent>
            <TabsContent>
              <ListContainer items={BLOGS} item={BlogCard} />
            </TabsContent>
          </TabGroup>
        </WorkContent>
      </WorkContainer>
    </Layout.Standard>
  );
}
