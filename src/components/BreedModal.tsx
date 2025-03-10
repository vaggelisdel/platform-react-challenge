
import { Breed, CatItem } from "../types";
import { Modal } from "react-bootstrap";
import { RootState } from "../redux/types";
import { connect } from "react-redux";
import Grid from "./Grid";

interface BreedModalProps {
    breedDetails: Breed | null;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const BreedModal = ({ breedDetails, open, setOpen }: BreedModalProps) => {

    return (
        <Modal show={open} onHide={() => setOpen(false)} size="xl" centered>
            <div className="modal-content p-4 rounded-xl" style={{ maxHeight: '90vh' }}>
                <div className="modal-header border-0 p-0">
                    <h5 className="modal-title sr-only" id="breed-modal-title">
                        {breedDetails ? breedDetails.name : 'Breed Details'}
                    </h5>
                    <button
                        type="button"
                        className="btn p-0 border-0 shadow-none position-absolute top-0 end-0 text-gray-500 hover:text-gray-700"
                        onClick={() => setOpen(false)}
                        aria-label="Close"
                        style={{ background: 'none' }}
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <div className="modal-body p-0">
                    {breedDetails ? (
                        <div className="d-flex flex-column gap-4">
                            <div className="d-flex flex-column gap-3">
                                <h2 className="h3 fw-bold">{breedDetails.name}</h2>
                                <p className="text-muted">{breedDetails.description}</p>

                                <div className="row g-3 py-2">
                                    <div className="col-12 col-md-4">
                                        <div className="glass-card p-3 rounded-lg h-100">
                                            <h6 className="text-muted mb-1">Origin</h6>
                                            <p className="fw-medium mb-0">{breedDetails.origin}</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="glass-card p-3 rounded-lg h-100">
                                            <h6 className="text-muted mb-1">Temperament</h6>
                                            <p className="fw-medium mb-0 text-truncate">{breedDetails.temperament}</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="glass-card p-3 rounded-lg h-100">
                                            <h6 className="text-muted mb-1">Life Span</h6>
                                            <p className="fw-medium mb-0">{breedDetails.life_span} years</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-top pt-4">
                                <h3 className="h5 mb-3">{breedDetails.name} Images</h3>

                            </div>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center align-items-center text-muted">
                            Breed not found
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
};

const mapDispatchToProps = (dispatch: any) => ({

});

export const mapStateToProps = (state: RootState) => {
    return {

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BreedModal);
