import { useEffect, useState } from "react";
import Grid from "../../components/Grid";
import { CatItem } from "../../types";
import { useNavigate } from "react-router-dom";
import CModal from "../../components/CModal";
import { connect } from 'react-redux';
import { RootState } from "../../redux/types";
import { HomepageActionCreators } from "../Homepage/ducks";

const Favorites = (props: any) => {
  const navigate = useNavigate();

  const { favorites = [], details = {} } = props;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (details) {
      setOpen(true);
    }
  }, [details]);

  const handleClick = (cat: CatItem) => {
    props.fetchSelectedCatDetails(cat.id);
    navigate(`/favorites/?id=${cat.id}`, { replace: true });
  };

  const handleCloseModal = () => {
    setOpen(false);
    navigate("/favorites", { replace: true });
    props.resetCatDetails("catDetails");
  };

  return (
    <div className="container py-5">
      <div className="mb-5">
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold">Discover Cats</h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '550px' }}>
            Explore the cat's collection. Click on any image to see more details.
          </p>
        </div>

        <Grid
          cats={favorites}
          onCatClick={handleClick}
          showLoadMore={false}
        />

        <CModal
          catDetails={details}
          open={open}
          setOpen={handleCloseModal}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps: any = (dispatch: any) => {
  return {
    fetchSelectedCatDetails: (catId: string) => dispatch(HomepageActionCreators.fetchSelectedCatDetailsRequested(catId)),
    resetCatDetails: (slice: string) => dispatch(HomepageActionCreators.resetApiData(slice))
  };
};

export const mapStateToProps = (state: RootState) => {
  return {
    details: state?.data?.homepage?.catDetails!,
    favorites: state.data?.favorites?.cats
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);