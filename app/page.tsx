import { Container, Content, Description, Title, Wave } from "./components";

export default function Home() {
  return (
    <Container>
      <Content>
        <Title>
          Hello<Wave>👋 </Wave>, I am Rakesh!
        </Title>
        <Description>
          A frontend developer who loves to work on React and all things
          JavaScript/TypeScript.
        </Description>
      </Content>
    </Container>
  );
}
