import React from "react";
import { Breed } from "../types";

interface BreedCardProps {
  breed: Breed;
  onClick?: () => void;
}

const BreedListItem = ({ breed, onClick }: BreedCardProps) => {
  return (
    <div className="card h-100 shadow-sm border-0" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{breed.name}</h5>

        <p className="card-text text-muted text-truncate-3">{breed.description}</p>

        <div className="mt-auto">
          {breed.temperament.split(", ").slice(0, 3).map((temp) => (
            <span key={temp} className="badge bg-secondary me-1">
              {temp}
            </span>
          ))}
          {breed.temperament.split(", ").length > 3 && (
            <span className="badge bg-secondary">+{breed.temperament.split(", ").length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreedListItem;
