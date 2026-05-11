import styled from "styled-components";
import { useState } from "react";

const PhotoBox = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 2px;
  background: white;
  margin: 0.75rem;
  padding: 0.5rem;
`;

const ThumbImg = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.h3`
  font-size: 0.85em;
  font-weight: bold;
`;

const Location = styled.p`
  font-size: 0.75em;
  margin: 0.25em 0;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 5px;
`;

const Button = styled.button`
  background: #3aafa9;
  border: none;
  color: white;
  padding: 5px 8px;
  border-radius: 3px;
  font-size: 0.75em;
  cursor: pointer;
`;

function PhotoThumb({ photo, showImageDetails }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const imageLink = `https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${photo.filename}`;

  return (
    <PhotoBox>
      <ThumbImg src={imageLink} alt={photo.title} />

      <div>
        <Title>{photo.title}</Title>

        <Location>
          {[photo.city, photo.country].filter(Boolean).join(", ")}
        </Location>

        <ButtonRow>
          <Button onClick={() => showImageDetails(photo)}>
            View
          </Button>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
          >
            {isFavorite ? "♥" : "♡"}
          </Button>
        </ButtonRow>
      </div>
    </PhotoBox>
  );
}

export default PhotoThumb;
