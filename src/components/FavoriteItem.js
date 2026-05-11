import styled from "styled-components";

const Inidicator = styled.div`
  position: relative;
  display: block;

  &:hover:after {
    content: "Click to remove";
    position: absolute;
    bottom: 50%;
    left: 1%;
    transform: scale(0.9);
    background: var(--header-back);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.7em;
    width: 50px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const FavPic = styled.img`
  width: 70px;
`;

function FavoriteItem({ photo, removeFavorite }) {
    const url = `http://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${photo.filename}`;
  
    return (
      <Inidicator>
        <FavPic
          src={url}
          alt={photo.title}
          width="70"
          onClick={() => removeFavorite(photo.id)}
        />
      </Inidicator>
    );
  }
  
  export default FavoriteItem;