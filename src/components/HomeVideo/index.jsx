// import sample from '../../../public/home-page-video.mp4';
import './style.css';

const HomeVideo = () => {
  return (
    <>
      <div className="videoContainer">
        <video className="videoTag" autoPlay loop muted>
          <source src="assets/home-page-video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default HomeVideo;
