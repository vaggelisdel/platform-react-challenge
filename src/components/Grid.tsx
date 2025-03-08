
import { useEffect, useState } from "react";
import { CatItem } from "../types";
import Card from "./Card";

interface GridProps {
  cats: CatItem[];
  onLoadMore: () => void;
  onCatClick?: (cat: CatItem) => void;
}

const Grid = ({ cats, onLoadMore, onCatClick }: GridProps) => {
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setColumns(1);
      } else if (width < 768) {
        setColumns(2);
      } else if (width < 992) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mb-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {cats.map((cat) => (
          <div key={cat.id} className="col">
            <Card 
              cat={cat}
              onClick={() => onCatClick ? onCatClick(cat) : undefined}
            />
          </div>
        ))}
      </div>

        <div className="d-flex justify-content-center py-4">
          <button 
            onClick={onLoadMore}
            className="btn btn-primary px-4 py-2 rounded-pill shadow"
          >
            Load More
          </button>
        </div>
    </div>
  );
};

export default Grid;
