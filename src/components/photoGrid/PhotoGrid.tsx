import React, { useState, useEffect } from "react";
import styles from "./PhotoGrid.module.css";

function ImageLoader() {
  return <div className={styles.loading}></div>;
}

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [imageLoadStates, setImageLoadStates] = useState<Map<string, boolean>>(
    () => new Map(),
  );

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${page}&limit=9`,
        );
        const data = await response.json();
        setPhotos(data.map((photo: any) => photo.download_url));
      } catch (error) {
        console.error("Failed to fetch photos", error);
      }
    };

    fetchPhotos();
    const interval = setInterval(() => {
      setPage((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, [page]);

  const handleImageLoad = (url: string) => {
    setImageLoadStates((prev) => new Map(prev).set(url, true));
  };

  return (
    <div className={styles.photoGrid}>
      {photos.map((url, index) => (
        <div key={`Customer_${index}`} className={styles.photoWrapper}>
          {!imageLoadStates.get(url) && <ImageLoader />}
          <img
            key={`Customer_${index}`}
            src={url}
            alt="Customer"
            loading="lazy"
            onLoad={() => handleImageLoad(url)}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
