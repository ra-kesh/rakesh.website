"use client";

import {
  Description,
  TitlePrimary,
  Wave,
  Actions,
  Button,
  Layout,
  HomeContent,
  HomeContainer,
} from "../components";
import { ACTIONS } from "../data";

export default function Home() {
  return (
    <Layout.Standard>
      <HomeContainer>
        <HomeContent>
          <TitlePrimary>
            Hello<Wave>👋 </Wave>, I am Rakesh!
          </TitlePrimary>
          <Description className="text-xl">
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
        </HomeContent>
      </HomeContainer>
    </Layout.Standard>
  );
}
