
import { useState } from "react";
import { Link } from "react-router-dom";
import { Breed, CatItem } from "../types";
import { Modal} from "react-bootstrap";

interface CatModalProps {
    catId: string | null;
    onOpenChange: (open: boolean) => void;
}

const CModal = ({ catId, onOpenChange }: any) => {

    const [cat, setCat] = useState<CatItem | null>({
        id: "1", url: 'https://t3.ftcdn.net/jpg/01/04/40/06/360_F_104400672_zCaPIFbYT1dXdzN85jso7NV8M6uwpKtf.jpg', width: 400, height: 400, breeds: []
    });

    const handleShare = () => {
        if (!cat) return;
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
    };



    if (!catId) return null;

    const isFavorite = (imageId: string): boolean => {
        return false;
    };

    const handleFavoriteToggle = () => {
        
    };

    return (
        <Modal show={!!catId} onHide={() => onOpenChange(false)} size="xl" centered>
            <Modal.Body className="d-flex flex-column flex-md-row p-0" style={{ height: "60vh" }}>
                {/* Left side */}
                <div className="d-flex justify-content-center align-items-center bg-dark w-100">
                    <i className="bi bi-x-lg text-black position-absolute top-0 end-0 p-3" onClick={() => onOpenChange(false)}/>
                    {cat && (
                        <img
                            src={cat.url}
                            alt={cat?.breeds?.length > 0 ? cat?.breeds[0].name : "A default cat"}
                            className={'h-100 w-100'}
                            style={{objectFit: 'cover'}}
                        />
                    )}
                </div>
                {/* Right side*/}
                <div className="w-100 w-md-40 p-4 overflow-auto">
                    {cat ? (
                        <div>
                            <h2 className="h4 fw-bold">
                                {cat.breeds?.length > 0 ? cat.breeds[0].name : "Default Cat"}
                            </h2>

                            <div className="d-flex gap-2 my-3">
                                <button
                                    onClick={handleFavoriteToggle}
                                    className={"btn btn-outline-secondary"}
                                >
                                    <i className="bi bi-heart me-2"/>
                                    Add to Favorites
                                </button>

                                <button className="btn btn-outline-secondary" onClick={handleShare}>
                                    <i className="bi bi-share me-2" />
                                    Share
                                </button>
                            </div>

                            {cat.breeds?.length > 0 && <BreedData breed={cat.breeds[0]} />}

                            {!cat.breeds?.length && (
                                <p className="text-muted fst-italic">No breed info available for this cat.</p>
                            )}

                            <hr />
                            <h5 className="text-muted">Image Info</h5>
                            <div className="row text-sm">
                                <div className="col-6">Width</div>
                                <div className="col-6 text-end fw-medium">{cat.width}px</div>
                                <div className="col-6">Height</div>
                                <div className="col-6 text-end fw-medium">{cat.height}px</div>
                                <div className="col-6">ID</div>
                                <div className="col-6 text-end text-muted text-truncate">{cat.id}</div>
                            </div>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center align-items-center h-100 text-muted">
                            Cat not found
                        </div>
                    )}
                </div>
            </Modal.Body>
        </Modal>
    );
};

const BreedData = ({ breed }: { breed: Breed }) => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700">{breed.description}</p>

      <div className="grid grid-cols-2 gap-y-2 text-sm">
        <div className="font-medium">Temperament</div>
        <div>{breed.temperament}</div>

        <div className="font-medium">Origin</div>
        <div>{breed.origin}</div>

        <div className="font-medium">Life Span</div>
        <div>{breed.life_span} years</div>

        <div className="font-medium">Weight</div>
        <div>{breed.weight.metric} kg</div>
      </div>

      <Link
        to={`/breeds?id=${breed.id}`}
        className="inline-flex items-center mt-2 text-primary hover:text-primary/80 transition-colors"
      >
        <span>View all {breed.name} cats</span>
      </Link>
    </div>
  );
};

export default CModal;
