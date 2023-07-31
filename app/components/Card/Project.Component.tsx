import { ProjectItem } from "@/app/data/projects";
import React from "react";
import { Container, Content } from "..";

const MetaContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 items-center justify-start w-full">
      {children}
    </div>
  );
};
const Meta = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-w-0 flex-1 px-4">{children}</div>;
};
const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-gray-700  text-lg font-bold">{children}</h1>;
};
const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="flex items-center mt-1 text-gray-500  text-xs">{children}</p>
  );
};

export const Project = ({ description, title, stack }: ProjectItem) => {
  return (
    <Container.ListItem>
      <Content.ListItem>
        <MetaContainer>
          <Meta>
            <Title>{title}</Title>
            <Description> {description}</Description>
            <Description>
              {" "}
              {stack.map((item, index) => {
                return (
                  <span key={index} className="mx-1">
                    {item}
                  </span>
                );
              })}
            </Description>
          </Meta>
        </MetaContainer>
      </Content.ListItem>
    </Container.ListItem>
  );
};
