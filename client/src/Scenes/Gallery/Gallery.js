import React, { useState, useCallback } from "react";
import styles from "./Gallery.module.css";
import Menu from "../../containers/Menu/Menu";
import Footer from "../../containers/Footer/Footer";
import ContactBox from "../../components/ContactBox/ContactBox";

import PhotoGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import img1 from "../../images/gallery/img_1.jpg";
import img2 from "../../images/gallery/img_2.jpg";
import img3 from "../../images/gallery/img_3.jpg";
import img4 from "../../images/gallery/img_4.jpg";
import img5 from "../../images/gallery/img_5.jpg";
import img6 from "../../images/gallery/img_6.jpg";
import img7 from "../../images/gallery/img_7.jpg";
import img8 from "../../images/gallery/img_8.jpg";
import img9 from "../../images/gallery/img_9.jpg";
import img10 from "../../images/gallery/img_10.jpg";
import img11 from "../../images/gallery/img_11.jpg";
import img12 from "../../images/gallery/img_12.jpg";
import img13 from "../../images/gallery/img_13.jpg";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: img1,
      width: 4,
      height: 3,
    },
    {
      src: img2,
      width: 1,
      height: 1,
    },
    {
      src: img3,
      width: 3,
      height: 4,
    },
    {
      src: img4,
      width: 3,
      height: 4,
    },
    {
      src: img5,
      width: 3,
      height: 4,
    },
    {
      src: img6,
      width: 4,
      height: 3,
    },
    {
      src: img7,
      width: 3,
      height: 4,
    },
    {
      src: img8,
      width: 4,
      height: 3,
    },
    {
      src: img9,
      width: 4,
      height: 3,
    },
    {
      src: img10,
      width: 4,
      height: 3,
    },
    {
      src: img11,
      width: 3,
      height: 4,
    },
    {
      src: img12,
      width: 4,
      height: 3,
    },
    {
      src: img13,
      width: 4,
      height: 3,
    },
  ];

  return (
    <div className={styles.Gallery}>
      <ContactBox />

      <div className={styles.nav}>
        <Menu dark fixed />
      </div>
      <main>
        <h1>Gallery</h1>
        <div className={styles.content}>
          <PhotoGallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
