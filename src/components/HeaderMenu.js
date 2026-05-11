import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 10px;
  background: var(--header-back);
  color: white;
  padding: 10px;
`;

const H1 = styled.h1`
  font-size: 2em;
`;

const HP = styled.p`
  margin: 0;
`;

const Button = styled.button`
  margin: 0 0.5rem;
  background: var(--button-back);
  border: 0;
  color: white;
  padding: 10px;
  border-radius:5px;
  font-size: 1em; 
`;

function HeaderMenu() {
  return (
    <Header className="header">
      <div>
        <H1>Travel Image App</H1>
        <HP>Using create-react-app</HP>
      </div>
      <nav>
        <Link to="/"><Button>Home</Button></Link>
        <Link to="/browse"><Button>Browse</Button></Link>
        <Link to="/about"><Button>About</Button></Link>
      </nav>
    </Header>
  );
}

export default HeaderMenu;