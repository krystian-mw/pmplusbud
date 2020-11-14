// import { useRouter } from "next/router";

export default function _404() {
  //   const router = useRouter()
  //   const goBack = () => {

  //   }
  return (
    <>
      <div style={{ textAlign: "center", color: "#14213dff" }}>
        <h1 style={{ padding: "2rem" }}>Błąd 404</h1>
        <h1>Tu nic nie ma ...</h1>
        <h1>Ale my ci zrobimy!</h1>
        <img
          style={{ margin: "auto", display: "block", maxWidth: "100vw" }}
          // src="https://images02.military.com/sites/default/files/media/money/homes/2017/06/couple-dream-home-sketch.jpg"
          src="https://www.middlecreekbuilders.com/img/new-homes/home-drawing.jpg"
        />
      </div>
      {/* <div onClick={goBack}>
      </div> */}
    </>
  );
}