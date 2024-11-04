import { useState } from "react";

function GridGalleryItem({ image = "" }) {
  return (
    <div className="carousel-item flex flex-row items-center justify-center">
      <div className="grid grid-cols-5 grid-rows-2">
        <img src={image} alt="alt" className="cols-span-2" />
        <img src={image} alt="alt" />
        <img src={image} alt="alt" />
      </div>
      <div className="grid grid-cols-5 grid-rows-2">
        <img src={image} alt="alt" />
        <img src={image} alt="alt" />
        <img src={image} alt="alt" />
      </div>
    </div>
  );
}

export default function GridGalley({ images = [] }) {
  const [currentItem, setCurrentItem] = useState(0);
  const image = images[currentItem];

  const handleNextItem = () => {
    setCurrentItem((prev) => {
      if (prev === images.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handlePreviousItem = () => {
    setCurrentItem((prev) => prev - 1);
  };

  return (
    <section className="w-full flex flex-row items-center justify-center">
      <span className="h-full w-auto flex flex-row items-center justify-center">
        <button className="h-full btn btn-ghost rounded-full" onClick={handlePreviousItem}>
          ⬅️
        </button>
      </span>
      <section className="h-full carousel">
        <GridGalleryItem image={image} />
      </section>
      <span className="h-full w-auto flex flex-row items-center justify-center">
        <button className="h-full btn btn-ghost rounded-full" onClick={handleNextItem}>
          ➡️
        </button>
      </span>
    </section>
  );
}
