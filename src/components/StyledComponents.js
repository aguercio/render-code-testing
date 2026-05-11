import styled from 'styled-components';

const list_back = '#2b7a78';
const favorites_back = '#def2f1';
const details_back = '#feffff';
const details_box_back = '#def2f1';
const header_back = '#17252A';
const button_back = '#3aafa9';
const list_box_back = '#feffff';

export const StyledApp = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${favorites_back};
`;

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 10px;
  background: ${header_back};
  color: white;
  padding: 10px;
`;

export const HeaderTitle = styled.h1`
    font-size: 2em;
`;

export const HeaderDescription = styled.p`
    margin: 0;
`;

export const StyledButton = styled.button`
  margin: 0 0.5rem;
  background: ${button_back};
  border: 0;
  color: white;
  padding: 10px;
  border-radius:5px;
  font-size: 1em;

  &:hover {
    box-shadow: 0px 0px 8px 0px rgb(255, 255, 255);
    cursor: pointer;
  }
`;

export const HideButton = styled.button`
  position: absolute;
  margin: 0.5rem 0.5rem;
  background: ${button_back};
  border: 0;
  color: white;
  padding: auto;
  border-radius:5px;
  font-size: 1em;

  &:hover {
    box-shadow: 0px 0px 8px 0px rgb(255, 255, 255);
    cursor: pointer;
  }
`; 

export const StyledContainer = styled.section`
  margin-top: 25px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 47% auto;
  grid-gap: 0;
`;

export const StyledPhotos = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 5px;
  background-color: ${list_back};
`;

export const StyledPhotoBox = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  grid-gap: 2px;
  background-color: ${list_box_back};
  margin: 0.75rem;
  padding: 0.5rem;
  place-self: center center;
  justify-content: space-evenly;
`;

export const PhotoBoxButton = styled.button`
  margin: 0 0.5rem;
  background: ${button_back};
  border: 0;
  color: white;
  padding: 5px;
  font-size: 0.75em;
  border-radius: 3px;
  margin: 0 0.5em;
  min-width: 2.5em;

  &:hover {
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.49);
    cursor: pointer;
  }
`;

export const PhotoBoxHeader = styled.h3`
  font-size: 0.85em;
  font-weight: bold;
`;

export const PhotoBoxText = styled.p`
  font-size: 0.75em;
  margin: 0.25em 0 0.25em 0;
`;

export const PhotoThumbnail = styled.img`
  width: 100px;
  height: 100px;
`;

export const StyledFigure = styled.figure`
  margin: 0;
  padding: 0;
`;

export const StyledDetails = styled.article`
  background-color: ${details_back};
  padding: 0.5em;
  width: 95%
`;

export const DetailsPhotoBox = styled.div`
  box-sizing: border-box;
  margin: 0.75em;
 
  padding: 1em;
  background-color: ${details_box_back};
`;

export const StyledLegend = styled.legend`
  font-weight: bold;
  color: ${list_back};
  font-size: 1.2em;
`;

export const StyledFormImage = styled.img`
  width: 100%;
`;

export const StyledForm = styled.form`
  display: grid;
`;

export const StyledFormLabel = styled.label`
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const StyledFormInput = styled.input`
  padding: 0.75em;
  border: 0;
  border-radius: 5px; 

  &:hover {
    box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.49);
    cursor: text;
  }
`;

export const StyledBanner = styled.div`
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const BannerDiv = styled.div`
  display: inline-block;
  margin-top: 200px;
}
`;

export const BannerH1 = styled.h1`
  font-size: 2rem;
  text-shadow: 2px 2px black;
`;

export const BannerH3 = styled.h3`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 2px 2px black;
`;

export const StyledFavorites = styled.div`
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-auto-flow: column;

  align-items: center;
  grid-gap: 5px;
  background: ${favorites_back};
  color: ${header_back};
  padding: 5px;
  font-size: 0.8em;
  font-weight: bold;
  text-transform: uppercase;
  padding-left: 35px;
`;

export const StyledFavoriteItem = styled.div`
    &:hover {
        cursor: pointer;
        filter: grayscale(100%);
    }
`;