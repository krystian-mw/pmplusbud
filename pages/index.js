import "../styles/pages/Home.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS
const ImageRoot = process.env.NEXT_PUBLIC_IMAGE_ROOT;

export default function Home() {
  return (
    <div id="Home">
      <div className="entry">
        <div className="wrapper">
          <img
            src={`${ImageRoot}/h_1500,w_4000/v1598739151/home-page/tape-measure-1726546_ibv9y7.jpg`}
          />
        </div>
        <div className="title">
          <h1>PM+BUD - Firma Remontowo-Budowlana</h1>
          <h2>Usługi budowlane, remontowe i wykończeniowe</h2>
        </div>
      </div>
      <div className={ContainerClass}>

      </div>
    </div>
  );
}
