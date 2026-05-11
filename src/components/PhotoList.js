import PhotoThumb from "./PhotoThumb";
import styled from "styled-components";

const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 5px;
  background-color: #2b7a78;
`;

function PhotoList({ photos, showImageDetails }) {
  if (!photos || photos.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <PhotosGrid>
      {photos.map(photo => (
        <PhotoThumb
          key={photo.id}
          photo={photo}
          showImageDetails={showImageDetails}
        />
      ))}
    </PhotosGrid>
  );
}

export default PhotoList;