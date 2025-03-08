import { useEffect, useState } from "react";
import { Breed, CatItem } from "../../types";
import { useNavigate } from "react-router-dom";
import CModal from "../../components/CModal";
import { connect } from 'react-redux';
import { RootState } from "../../redux/types";
import BreedList from "../../components/BreedList";
import { BreedsActionCreators } from "./ducks";

const Breeds = (props: any) => {
  const navigate = useNavigate();

  const { data: { list = []} = {}, details } = props;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.fetchAllBreedsRequested();
  }, []);

  useEffect(() => {
    if (details) {
      setOpen(true);
    }
  }, [details]);

  const handleClick = (breed: Breed) => {
    navigate(`/breeds/?id=${breed.id}`, { replace: true });
  };


  return (
    <div className="container py-5">
      <div className="mb-5">
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold">Breeds list</h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '550px' }}>
            Explore different cat breeds and their characteristics. Click on a breed to see more images.
          </p>
        </div>

        <BreedList
          breeds={list}
          onBreedClick={handleClick}
        />

      </div>
    </div>
  );
};

const mapDispatchToProps: any = (dispatch: any) => {
  return {
    fetchAllBreedsRequested: () => dispatch(BreedsActionCreators.fetchAllBreedsRequested()),
    resetCatDetails: (slice: string) => dispatch(BreedsActionCreators.resetApiData(slice))
  };
};

export const mapStateToProps = (state: RootState) => {
  return {
    data: state.data?.breeds?.list
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Breeds);