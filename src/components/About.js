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

function About() {
  return (
    <Banner>
      <BannerH1>About Our Website</BannerH1>
    </Banner>
  );
}
  
export default About;