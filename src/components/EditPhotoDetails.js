import { StyledDetails, DetailsPhotoBox, StyledLegend, StyledFormImage, StyledForm, StyledFormLabel, StyledFormInput } from './StyledComponents';

function EditPhotoDetails({ currentPhoto, editCurrentPhoto}) {

  const { title, location, filename } = currentPhoto || {};
  
  return (
    <StyledDetails>
      <DetailsPhotoBox>
        <StyledForm>
          <StyledLegend>Edit Photo Details</StyledLegend>
          <StyledFormImage src={`http://www.randyconnolly.com/funwebdev/3rd/images/travel/medium640/${filename}`} alt={title} />
          <StyledFormLabel>Title</StyledFormLabel>
          <StyledFormInput type="text" name="title" value={title} onChange={(e) => editCurrentPhoto({...currentPhoto, title: e.target.value})} />
          <StyledFormLabel>City</StyledFormLabel>
          <StyledFormInput type="text" name="city" value={location?.city} onChange={(e) => editCurrentPhoto({...currentPhoto, location: {...location, city: e.target.value}})} />
          <StyledFormLabel>Country</StyledFormLabel>
          <StyledFormInput type="text" name="country" value={location?.country} onChange={(e) => editCurrentPhoto({...currentPhoto, location: {...location, country: e.target.value}})} />
        </StyledForm>
      </DetailsPhotoBox>
    </StyledDetails>
  )
}

export default EditPhotoDetails;