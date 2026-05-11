import { Link } from 'react-router-dom';
import { StyledHeader, HeaderTitle, HeaderDescription, StyledButton, StyledBanner, BannerH1, BannerH3, BannerDiv } from './StyledComponents';

export function Home() {
    return (
      <main>
        <StyledHeader>
          <div>
            <HeaderTitle>Travel Image App</HeaderTitle>
            <HeaderDescription>Using create-react-app</HeaderDescription>
          </div>
          <nav><Link to="/"><StyledButton>Home</StyledButton></Link><Link to="/browse"><StyledButton>Browse</StyledButton></Link><Link to="/about"><StyledButton>About</StyledButton></Link></nav>
        </StyledHeader>
        <StyledBanner style={{backgroundImage: `url('http://www.randyconnolly.com/funwebdev/3rd/images/travel/large1600/9496792166.jpg')`, height: '800px', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
          <BannerDiv>
            <BannerH1>Travel Photos</BannerH1>
            <BannerH3>Upload and Share</BannerH3>
            <p><Link to="/browse"><StyledButton>Browse</StyledButton></Link><Link to="/about"><StyledButton>About</StyledButton></Link></p>
          </BannerDiv>
        </StyledBanner>
      </main>
    )
}