import styled from "styled-components";

const Banner = styled.div`
  color: white;
  font-weight: bold;
  text-align: center;
  background-color: var(--list-back);
`;

const BannerH1 = styled.h1`
  font-size: 2rem;
  text-shadow: 2px 2px black;
`;

const BannerH3 = styled.h3`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 2px 2px black;
`;

function Home() {
  return (
    <Banner>
      <BannerH1>Travel Photos</BannerH1>
      <BannerH3>Upload and Share</BannerH3>
    </Banner>
  );
}
  
export default Home;