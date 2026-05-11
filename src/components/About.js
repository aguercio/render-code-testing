import styled from "styled-components";

const Container = styled.main`
  background: #f4f4f4;
  min-height: 100vh;
  padding: 40px;
`;

const Card = styled.div`
  background: #ffffff;
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const Heading = styled.h1`
  color: #264653;
  margin-bottom: 10px;
`;

const Subheading = styled.h3`
  color: #2a9d8f;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #333;
  line-height: 1.6;
  margin-bottom: 15px;
`;

function About() {
  return (
    <Container>
      <Card>
        <Heading>About This App</Heading>
        <Subheading>Final project</Subheading>

        <Text>
          This is my final project for web programing 2.
        </Text>

      </Card>
    </Container>
  );
}

export default About;