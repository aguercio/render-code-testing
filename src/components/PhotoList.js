import PhotoThumb from "./PhotoThumb";
import styled from "styled-components";

const PhotoGrid = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 5px;
  background-color: var(--list-back);
`;

function PhotoList({ photos, showImageDetails, addFavorite }) {

  return (
    <PhotoGrid>
      {/* photos.slice(0, 10).map - limit number of photos in shown in list */}
      {photos.map(photo => (
        <PhotoThumb
          key={photo.id}
          photo={photo}
          showImageDetails={showImageDetails}
          addFavorite={addFavorite}
        />
      ))}
    </PhotoGrid>
  );
}

export default PhotoList;