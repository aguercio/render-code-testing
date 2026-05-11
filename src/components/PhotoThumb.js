import styled from "styled-components";

const PhotoBox = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  grid-gap: 2px;

  background-color: var(--list-box-back);
  margin: 0.75rem;
  padding: 0.5rem;
  place-self: center center;
  justify-content: space-evenly;
`;

const PhotoBoxHeader = styled.h3`
  font-size: 0.85em;
  font-weight: bold;
`;

const PhotoBoxP = styled.p`
  font-size: 0.75em;
  margin: 0.25em 0 0.25em 0;
`;

const ThumbImage = styled.img`
  width: 100px;
  height: 100px;
`;

const PhotoButton = styled.button`
  padding: 5px;
  font-size: 0.75em;
  border-radius: 3px;
  margin: 0;
  margin: 0 0.5em;
  min-width: 2.5em;
  background: var(--button-back);
  border: 0;
  color: white;
`;

const Figure = styled.figure`
  margin: 0;
  padding: 0;
`;

function PhotoThumb({ photo, showImageDetails, addFavorite }) {
  const url = `http://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${photo.filename}`;

  return (
    <PhotoBox>
      <Figure>
        <ThumbImage src={url} alt={photo.title} />
      </Figure>
      <div>
        <PhotoBoxHeader>{photo.title}</PhotoBoxHeader>
        <PhotoBoxP>{photo.location.city}, {photo.location.country}</PhotoBoxP>
        <PhotoButton onClick={() => showImageDetails(photo.id)}>View</PhotoButton>
        <PhotoButton onClick={() => addFavorite(photo)}>❤</PhotoButton>
      </div>
    </PhotoBox>
  );
}
  
export default PhotoThumb;