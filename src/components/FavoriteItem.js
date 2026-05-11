import { StyledFavoriteItem } from "./StyledComponents";

export function FavoriteItem({ photo, toggleFavorites }) {
    const { title, filename } = photo;
    return (
        <StyledFavoriteItem onClick={() => toggleFavorites(photo)} title="Remove from favorites">
            <h3>{title}</h3>
            <img alt={title} src={`https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${filename}`} />
        </StyledFavoriteItem>
    )
}