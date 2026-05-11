import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background: #264653;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Titles = styled.div`
  h1 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #ddd;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background: #2a9d8f;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: #21867a;
  }
`;

function Menu() {
  return (
    <Header>
      <Titles>
        <h1>Travel Image App</h1>
      </Titles>

      <Nav>
        <Link to="/"><Button>Home</Button></Link>
        <Link to="/browse"><Button>Browse</Button></Link>
        <Link to="/about"><Button>About</Button></Link>
      </Nav>
    </Header>
  );
}

export default Menu;