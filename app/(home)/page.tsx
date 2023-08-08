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

const Pill = () => {
  return (
    <div className="hidden md:block border border-gray-300 hover:border-gray-500 mb-6 py-1 px-3 max-w-fit mx-auto rounded-full ">
      <span className="text-sm font-medium text-gray-700 dark:text-white">
        Currently looking for my next full time role
      </span>
    </div>
  );
};

export default function Home() {
  return (
    <Layout.Standard>
      <HomeContainer>
        <HomeContent>
          <Pill />
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
