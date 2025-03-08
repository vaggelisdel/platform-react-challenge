import { useNavigate } from "react-router-dom";
import { CatItem } from "../types";
import { RootState } from "../redux/types";
import { connect } from 'react-redux';
import { FavoritesActionCreators } from "../pages/Favorites/ducks";
import { useEffect, useState } from "react";

interface CatCardProps {
  cat: CatItem;
  onClick?: () => void;
  toogleToFavorites: (cat: CatItem) => void;
  favorites?: CatItem[]
}

const Card: React.FC<CatCardProps> = ({ cat, onClick, toogleToFavorites, favorites }) => {
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/?id=${cat.id}`);
    }
  };

  const handleFavoriteClick = (cat: CatItem) => {
    toogleToFavorites(cat);
  };

  useEffect(() => {
    if (favorites?.some((c: CatItem) => c.id === cat.id)) {
      setIsFavorite(true);
    }else{
      setIsFavorite(false);
    }
  }, [favorites]);

  return (
    <div
      className="cat-image-container w-100 h-100 position-relative"
      onClick={handleClick}
    >
      <img
        src={cat.url}
        className="cat-image"
        loading="lazy"
      />

      <div className="cat-card-overlay">
        <div className="d-flex justify-content-between align-items-center">
          <button
            className={"btn btn-sm rounded-circle text-white"}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering card click
              handleFavoriteClick(cat);
            }}
          >
            <i className={`bi bi-heart-fill ${isFavorite ? "text-danger" : "text-white"}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toogleToFavorites: (cat: CatItem) => dispatch(FavoritesActionCreators.toggleToFavoritesRequested(cat))
});

export const mapStateToProps = (state: RootState) => {
  return {
    favorites: state.data?.favorites?.cats
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card);