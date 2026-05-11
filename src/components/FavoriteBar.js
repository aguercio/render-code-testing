import FavoriteItem from "./FavoriteItem";
import styled from "styled-components";

const FavoritesList = styled.section`
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-auto-flow: column;

  align-items: center;
  grid-gap: 5px;
  background: var(--favorites-back);
  color: var(--header-back);
  padding: 5px;
  font-size: 0.8em;
  font-weight: bold;
  text-transform: uppercase;
`;

const Button = styled.button`
  margin: 0 0.5rem;
  background: var(--button-back);
  border: 0;
  color: white;
  padding: 10px;
  border-radius:5px;
  font-size: 1em; 
`;

function FavoriteBar({ favorites, removeFavorite, showFavorites, toggleFavoritesBar }) {
  return (
    <FavoritesList>
      <Button onClick={toggleFavoritesBar}>
        {showFavorites ? "Hide" : "Show"}
      </Button>

      {showFavorites &&
        favorites.map(photo => (
          <FavoriteItem
            key={photo.id}
            photo={photo}
            removeFavorite={removeFavorite}
          />
        ))}
    </FavoritesList>
  );
}

export default FavoriteBar;