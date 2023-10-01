"use client";

import {
  Description,
  TitlePrimary,
  Wave,
  Button,
  Layout,
  HomeContent,
  HomeContainer,
} from "../components";
import { Pill } from "../components/Pill.Component";
import { ACTIONS } from "../data";

export default function Home() {
  return (
    <Layout.Standard>
      <HomeContainer>
        <HomeContent>
          <Pill>
            <span className="text-xs font-medium text-accent-foreground tracking-normal ">
              looking for my next full time role
            </span>
          </Pill>
          <TitlePrimary>
            Hello<Wave>👋 </Wave>, I am Rakesh!
          </TitlePrimary>
          <Description className="text-xl md:max-w-3xl">
            A frontend developer who loves to work on React and all things
            JavaScript/TypeScript.
          </Description>

          <div className="sm:space-x-4">
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
          </div>
        </HomeContent>
      </HomeContainer>
    </Layout.Standard>
  );
}
