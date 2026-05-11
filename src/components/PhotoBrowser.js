import PhotoList from "./PhotoList";
import EditPhotoDetails from "./EditPhotoDetails";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 47% auto;
`;

const Details = styled.div`
  background-color: #feffff;
  padding: 0.5em;
  width: 95%;
`;

function PhotoBrowser({ photos, currentPhoto, setCurrentPhoto, updatePhoto }) {
  const showImageDetails = (photo) => setCurrentPhoto(photo);

  return (
    <Container>
      <PhotoList photos={photos} showImageDetails={showImageDetails} />

      <Details>
        <EditPhotoDetails
          photo={currentPhoto}
          updatePhoto={updatePhoto}
        />
      </Details>
    </Container>
  );
}

export default PhotoBrowser;