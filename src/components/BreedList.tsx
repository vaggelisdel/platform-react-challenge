import { Breed } from "../types";
import { useNavigate } from "react-router-dom";
import BreedListItem from "./BreedListItem";

interface BreedCardProps {
  breeds: Breed[];
  onBreedClick?: (breed: Breed) => void
}

const BreedList = ({ breeds, onBreedClick }: BreedCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {breeds.length > 0 &&
          breeds.map((breed: Breed) => (
            <div key={breed.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <BreedListItem
                breed={breed}
                onClick={() => onBreedClick ? onBreedClick(breed) : undefined}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BreedList;
