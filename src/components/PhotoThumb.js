import { StyledPhotoBox, StyledFigure, PhotoThumbnail, PhotoBoxButton, PhotoBoxHeader, PhotoBoxText } from "./StyledComponents";

function PhotoThumb({ photo, showImageDetails, toggleFavorites }) {
  const { title, location, filename } = photo;

  return (
    <StyledPhotoBox>
      <StyledFigure>
        <PhotoThumbnail title={title} alt={title} src={`https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${filename}`} 
          loading="lazy"/>
      </StyledFigure>
      <div>
        <PhotoBoxHeader>{title}</PhotoBoxHeader>
        <PhotoBoxText>{location.city}, {location.country}</PhotoBoxText>
        <PhotoBoxButton onClick={() => showImageDetails(photo)}>View</PhotoBoxButton> <PhotoBoxButton onClick={() => toggleFavorites(photo)}>❤</PhotoBoxButton>
      </div>
    </StyledPhotoBox>
  )
}

export default PhotoThumb;