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

const Banner = styled.div`
  height: 800px;
  background-image: url("http://www.randyconnolly.com/funwebdev/3rd/images/travel/large1600/9496792166.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

function Home() {
  return (
    <main>

      <Banner>
        <div>
          <h1>Travel Photos</h1>
          <h3>Upload and Share</h3>

          <p>
            <Link to="/browse"><Button>Browse</Button></Link>
            <Link to="/about"><Button>About</Button></Link>
          </p>
        </div>
      </Banner>
    </main>
  );
}

export default Home;
