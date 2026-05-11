import { Link } from 'react-router-dom';
import { StyledHeader, HeaderTitle, HeaderDescription, StyledButton } from './StyledComponents';

export function About() {
    return (
      <main>
        <StyledHeader>
          <div>
            <HeaderTitle>Travel Image App</HeaderTitle>
            <HeaderDescription>Using create-react-app</HeaderDescription>
          </div>
          <nav><Link to="/"><StyledButton>Home</StyledButton></Link><Link to="/browse"><StyledButton>Browse</StyledButton></Link><Link to="/about"><StyledButton>About</StyledButton></Link></nav>
        </StyledHeader>
        <div>
          <h2>About Us</h2>
          <p>Welcome to the Travel Image App! We are passionate about sharing beautiful travel photos from around the world.</p>
        </div>
      </main>
    )

}