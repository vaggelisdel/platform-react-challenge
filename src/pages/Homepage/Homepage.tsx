import { useEffect, useState } from "react";
import Grid from "../../components/Grid";
import { CatItem } from "../../types";
import { useNavigate } from "react-router-dom";
import CModal from "../../components/CModal";
import { HomepageActionCreators } from "./ducks";
import { connect } from 'react-redux';
import { RootState } from "../../redux/types";

const Homepage = (props: any) => {
  const navigate = useNavigate();

  const { data: { randomCats = [], page = 1} = {}, details } = props;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.fetchRandomCats(10, 1);
  }, []);

  useEffect(() => {
    if (details) {
      setOpen(true);
    }
  }, [details]);


  const handleLoadMore = () => {
    props.fetchRandomCats(10, page);
  };

  const handleClick = (cat: CatItem) => {
    props.fetchSelectedCatDetails(cat.id);
    navigate(`/?id=${cat.id}`, { replace: true });
  };

  const handleCloseModal = () => {
    setOpen(false);
    navigate("/", { replace: true });
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
          cats={randomCats}
          onLoadMore={handleLoadMore}
          onCatClick={handleClick}
          showLoadMore={true}
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
    fetchRandomCats: (limit: number, page: number) => dispatch(HomepageActionCreators.fetchRandomCatsRequested(limit, page)),
    fetchSelectedCatDetails: (catId: string) => dispatch(HomepageActionCreators.fetchSelectedCatDetailsRequested(catId)),
    resetCatDetails: (slice: string) => dispatch(HomepageActionCreators.resetApiData(slice))
  };
};

export const mapStateToProps = (state: RootState) => {
  return {
    data: state.data?.homepage?.cats!,
    details: state?.data?.homepage?.catDetails!
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);