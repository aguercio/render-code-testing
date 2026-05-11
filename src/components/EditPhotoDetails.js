import { useState, useEffect } from "react";
import styled from "styled-components";

const Details = styled.article`
  background-color: var(--details-back);
  padding: 0.5em;
  width: 95%
`;

const DetailsPhotoBox = styled.div`
  box-sizing: border-box;
  margin: 0.75em;

  padding: 1em;
  background-color: var(--details-box-back)
`;

const DetailsPhotoImg = styled.img`
  width: 100%
`;

const Legend = styled.form`
  font-weight: bold;
  color: var(--list-back);
  font-size: 1.2em;
`;

const Form = styled.form`
  display: grid;
`;

const FormLabel = styled.form`
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  padding: 0.75em;
  border: none;
  border-radius: 5px;

  &:focus {
    box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.49);
  }
`;

function EditPhotoDetails({ photo, updatePhoto }) {
  const [formData, setFormData] = useState(photo);

  useEffect(() => {
    setFormData(photo);
  }, [photo]);

  //allow edits to all 3 feilds in photo details form
  const handleChange = (e) => {
    const { name, value } = e.target;

    let updated;

    if (name === "city" || name === "country") {
      updated = {
        ...photo,
        location: {
          ...photo.location,
          [name]: value
        }
      };
    } else {
      updated = {
        ...photo,
        [name]: value
      };
    }

    updatePhoto(updated);
  };

  const imgUrl = `http://www.randyconnolly.com/funwebdev/3rd/images/travel/medium640/${photo.filename}`;

  return (
    <Details>
      <DetailsPhotoBox>
        <Form className="photoForm">
          <Legend>Edit Photo Details</Legend>
          <DetailsPhotoImg src={imgUrl} alt={photo.title} />

          <FormLabel>Title</FormLabel>
          <Input name="title" value={formData?.title || ""} onChange={handleChange} />

          <FormLabel>City</FormLabel>
          <Input name="city" value={formData?.location.city || ""} onChange={handleChange} />

          <FormLabel>Country</FormLabel>
          <Input name="country" value={formData?.location.country || ""} onChange={handleChange} />
        </Form>
      </DetailsPhotoBox>
    </Details>
  );
}

export default EditPhotoDetails;
