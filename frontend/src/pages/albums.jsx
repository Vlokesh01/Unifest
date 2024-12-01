import AlbumsHeader from "../components/albums/albumheader";
import AlbumsFooter from "../components/aboutus/aboutusfooter";
import Gallery from "../components/albums/gallery";
const albumspage = () => {
  return (
    <div className=" overflow-hidden">
      <AlbumsHeader />
      <Gallery />
      <AlbumsFooter />
    </div>
  );
};

export default albumspage;
