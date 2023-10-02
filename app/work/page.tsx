"use client";

import React from "react";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  TabGroup,
  WorkContent,
  WorkContainer,
  ListContainer,
  Back,
} from "../components";
import { BLOGS, PROJECTS } from "../data";
import { ProjectCard, BlogCard } from "./component";
import { withNavbar } from "../components/Navbar/WithNavbar.Component";

function Projects() {
  return (
    <WorkContainer>
      <WorkContent>
        <Back />
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
  );
}

export default withNavbar(Projects);
