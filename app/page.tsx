"use client";

import {
  Container,
  Content,
  Description,
  Title,
  Wave,
  Actions,
  Button,
  Layout,
} from "./components";

import { ACTIONS } from "./data/actions";

export default function Home() {
  return (
    <Layout.Standard>
      <Container.Home>
        <Content.Home>
          <Title>
            Hello<Wave>👋 </Wave>, I am Rakesh!
          </Title>
          <Description>
            A frontend developer who loves to work on React and all things
            JavaScript/TypeScript.
          </Description>

          <Actions>
            {ACTIONS.map((action) => {
              return (
                <Button
                  key={action.id}
                  href={action.href}
                  rel={action.external ? "noopener noreferrer" : ""}
                  target={action.external ? "_blank" : ""}
                >
                  {action.icon}
                  {action.text}
                </Button>
              );
            })}
          </Actions>
        </Content.Home>
      </Container.Home>
    </Layout.Standard>
  );
}
