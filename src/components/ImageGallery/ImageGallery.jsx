import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({images, onClick}) => {
    return (
 <ul className={s.ImageGallery} >
        {images.length > 0 &&
          images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
            webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClick={onClick}
          />
        ))}
    </ul>
    );
};

export default ImageGallery;

