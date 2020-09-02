import { useState } from "react";
import { useInView } from "react-intersection-observer";

import Loader from "./Loader";

export default function Map() {
  const [loading, setLoading] = useState(true);

  const src =
    "https://www.google.com/maps/embed/v1/place" +
    `?key=${process.env.NEXT_PUBLIC_GOOGLE_PUBLIC_API_KEY}` +
    `&q=Lesser+Poland+Voivodeship,+Poland`;

  const [ref, inView, entry] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      {!inView ? <Loader /> : <div />}
      <iframe
        id="Map"
        ref={ref}
        width="100%"
        height="400px"
        frameBorder="0"
        src={inView ? src : null}
      />
    </>
  );
}
