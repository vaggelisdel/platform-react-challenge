
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Breed, CatItem } from "../types";
import { Modal } from "react-bootstrap";
import { RootState } from "../redux/types";
import { FavoritesActionCreators } from "../pages/Favorites/ducks";
import { connect } from "react-redux";

interface CatModalProps {
    catDetails: CatItem | null;
    open: boolean;
    setOpen: (open: boolean) => void;
    toogleToFavorites: (cat: CatItem) => void;
    favorites?: CatItem[]
}

const CModal = ({ catDetails, open, setOpen, toogleToFavorites, favorites }: CatModalProps) => {

      const [isFavorite, setIsFavorite] = useState(false);
    
      const handleFavoriteClick = (cat: CatItem) => {
        toogleToFavorites(cat);
      };
    
      useEffect(() => {
        if (favorites?.some((c: CatItem) => c.id === catDetails?.id)) {
          setIsFavorite(true);
        }else{
          setIsFavorite(false);
        }
      }, [favorites, catDetails]);

    const handleShare = () => {
        if (!catDetails?.id) return;
        navigator.clipboard.writeText(window.location.href);
    };


    if (!catDetails?.id) return null;


    return (
        <Modal show={open} onHide={() => setOpen(false)} size="xl" centered>
            <Modal.Body className="d-flex flex-column flex-md-row p-0" style={{ height: "60vh" }}>
                {/* Left side */}
                <div className="d-flex justify-content-center align-items-center bg-dark w-100">
                    <i className="bi bi-x-lg text-black position-absolute top-0 end-0 p-3" onClick={() => setOpen(false)} />
                    {catDetails && (
                        <img
                            src={catDetails.url}
                            alt={catDetails?.breeds?.length > 0 ? catDetails?.breeds[0].name : "A default cat"}
                            className={'h-100 w-100'}
                            style={{ objectFit: 'cover' }}
                        />
                    )}
                </div>
                {/* Right side*/}
                <div className="w-100 w-md-40 p-4 overflow-auto">
                    {catDetails ? (
                        <div>
                            <h2 className="h4 fw-bold">
                                {catDetails.breeds?.length > 0 ? catDetails.breeds[0].name : "Default Cat"}
                            </h2>

                            <div className="d-flex gap-2 my-3">
                                <button
                                    onClick={() => handleFavoriteClick(catDetails)}
                                    className={"btn btn-outline-secondary"}
                                >
                                    <i className={`bi ${isFavorite ? "bi-heart-fill text-danger" : "bi-heart"} me-2`} />
                                    Add to Favorites
                                </button>

                                <button className="btn btn-outline-secondary" onClick={handleShare}>
                                    <i className="bi bi-share me-2" />
                                    Share
                                </button>
                            </div>

                            {catDetails.breeds?.length > 0 && <BreedData breed={catDetails.breeds[0]} />}

                            {!catDetails.breeds?.length && (
                                <p className="text-muted fst-italic">No breed info available for this cat.</p>
                            )}

                            <hr />
                            <h5 className="text-muted">Image Info</h5>
                            <div className="row text-sm">
                                <div className="col-6">Width</div>
                                <div className="col-6 text-end fw-medium">{catDetails.width}px</div>
                                <div className="col-6">Height</div>
                                <div className="col-6 text-end fw-medium">{catDetails.height}px</div>
                                <div className="col-6">ID</div>
                                <div className="col-6 text-end text-muted text-truncate">{catDetails.id}</div>
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

const mapDispatchToProps = (dispatch: any) => ({
    toogleToFavorites: (cat: CatItem) => dispatch(FavoritesActionCreators.toggleToFavoritesRequested(cat))
});

export const mapStateToProps = (state: RootState) => {
    return {
        favorites: state.data?.favorites?.cats
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CModal);
