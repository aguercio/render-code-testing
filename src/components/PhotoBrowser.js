import PhotoList from "./PhotoList";
import EditPhotoDetails from "./EditPhotoDetails";
import styled from "styled-components";

const ThumbnailBox = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 47% auto;
  grid-gap: 0;
`;

function PhotoBrowser({ photos, currentPhoto, showImageDetails, updatePhoto, addFavorite }) {
  return (
    <ThumbnailBox>
      <PhotoList photos={photos} showImageDetails={showImageDetails} addFavorite={addFavorite} />
      <EditPhotoDetails photo={currentPhoto} updatePhoto={updatePhoto} />
    </ThumbnailBox>
  );
}

export default PhotoBrowser;