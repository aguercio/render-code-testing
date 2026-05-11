import { useState, useEffect } from "react";
import styled from "styled-components";

const DetailsBox = styled.div`
  margin: 0.75em;
  padding: 1em;
  background: #def2f1;
`;

const Image = styled.img`
  width: 100%;
`;

const Form = styled.form`
  display: grid;
`;

const Label = styled.label`
  margin-top: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75em;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #3aafa9;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 10px;
`;

function EditPhotoDetails({ photo, updatePhoto }) {
  const [formData, setFormData] = useState(photo);

  useEffect(() => {
    setFormData(photo);
  }, [photo]);

  if (!photo) return <p>Select a photo</p>;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    updatePhoto(formData);
  };

  return (
    <DetailsBox>
      <h2>Edit Photo Details</h2>

      <Image
        src={`https://www.randyconnolly.com/funwebdev/3rd/images/travel/medium640/${photo.filename}`}
        alt={photo.title}
      />

      <Form>
        <Label>Title</Label>
        <Input name="title" value={formData?.title || ""} onChange={handleChange} />

        <Label>City</Label>
        <Input name="city" value={formData?.city || ""} onChange={handleChange} />

        <Label>Country</Label>
        <Input name="country" value={formData?.country || ""} onChange={handleChange} />

        <Button type="button" onClick={handleSave}>Save</Button>
      </Form>
    </DetailsBox>
  );
}

export default EditPhotoDetails;
