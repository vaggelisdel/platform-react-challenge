import Grid from "../components/Grid";
import { CatItem } from "../types";

const Homepage = () => {

  const catsDummyList: CatItem[] = [
    { id: "1", url: 'https://t3.ftcdn.net/jpg/01/04/40/06/360_F_104400672_zCaPIFbYT1dXdzN85jso7NV8M6uwpKtf.jpg', width: 300, height: 300 },
    { id: "2", url: 'https://t3.ftcdn.net/jpg/01/04/40/06/360_F_104400672_zCaPIFbYT1dXdzN85jso7NV8M6uwpKtf.jpg', width: 300, height: 300 },
    { id: "3", url: 'https://t3.ftcdn.net/jpg/01/04/40/06/360_F_104400672_zCaPIFbYT1dXdzN85jso7NV8M6uwpKtf.jpg', width: 300, height: 300 },
    { id: "4", url: 'https://t3.ftcdn.net/jpg/01/04/40/06/360_F_104400672_zCaPIFbYT1dXdzN85jso7NV8M6uwpKtf.jpg', width: 300, height: 300 },
    { id: "5", url: 'https://t3.ftcdn.net/jpg/01/04/40/06/360_F_104400672_zCaPIFbYT1dXdzN85jso7NV8M6uwpKtf.jpg', width: 300, height: 300 },
    { id: "6", url: 'https://t3.ftcdn.net/jpg/01/04/40/06/360_F_104400672_zCaPIFbYT1dXdzN85jso7NV8M6uwpKtf.jpg', width: 300, height: 300 },
    { id: "7", url: 'https://t3.ftcdn.net/jpg/01/04/40/06/360_F_104400672_zCaPIFbYT1dXdzN85jso7NV8M6uwpKtf.jpg', width: 300, height: 300 },
    { id: "8", url: 'https://t3.ftcdn.net/jpg/01/04/40/06/360_F_104400672_zCaPIFbYT1dXdzN85jso7NV8M6uwpKtf.jpg', width: 300, height: 300 },
  ];
 
  const handleLoadMore = () => {
    // TODO: implement load more click
  };

  const handleClick = (cat: CatItem) => {
    // TODO: implement cat click
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
          cats={catsDummyList}
          onLoadMore={handleLoadMore}
          onCatClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Homepage;
