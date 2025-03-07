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

  const [selectedCatId, setSelectedCatId] = useState<string | null>(null);

  const { randomCats = [], page } = props?.data;

  useEffect(() => {
    props.fetchRandomCats(10, 1);
  }, []);


  const handleLoadMore = () => {
    props.fetchRandomCats(10, page);
  };

  const handleClick = (cat: CatItem) => {
    setSelectedCatId(cat.id);
    navigate(`/?id=${cat.id}`, { replace: true });
  };

  const handleCloseModal = () => {
    setSelectedCatId(null);
    navigate("/", { replace: true });
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
        />

        <CModal
          catId={selectedCatId}
          onOpenChange={(open: boolean) => {
            if (!open) handleCloseModal();
          }}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps: any = (dispatch: any) => {
  return {
    fetchRandomCats: (limit: number, page: number) => dispatch(HomepageActionCreators.fetchRandomCatsRequested(limit, page)),
  };
};

export const mapStateToProps = (state: RootState) => {
  return {
    data: state.data.cats,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);