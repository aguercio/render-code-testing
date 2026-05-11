import { FavoriteItem } from "./FavoriteItem"
import { StyledFavorites } from "./StyledComponents"

export function FavoriteBar({favorites, toggleFavorites}) {
    return (
        <StyledFavorites>
             {favorites.map(fav => <FavoriteItem key={fav.id} photo={fav} toggleFavorites={toggleFavorites} />)}
        </StyledFavorites>
    )
}