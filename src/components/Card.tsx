
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CatItem } from "../types";

interface CatCardProps {
  cat: CatItem;
  onClick?: () => void;
}

const Card = ({ cat, onClick }: CatCardProps) => {
    const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/?id=${cat.id}`);
    }
  };

  const handleFavoriteClick = () => {
    // TODO: implement favorite click
  };

  return (
    <div 
      className="cat-image-container w-100 h-100 position-relative" 
      onClick={handleClick}
    >
      <div className={"position-absolute top-0 start-0 w-100 h-100 bg-light opacity-0"}/>
      
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
            onClick={handleFavoriteClick}
          >
            <i className={`bi bi-heart`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
