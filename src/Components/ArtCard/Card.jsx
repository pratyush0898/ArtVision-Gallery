import React, { useState } from 'react';
import Download from '../../assets/svg/download.svg';
import './Card.css';

const Card = ({ img, text }) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const handleImageLoaded = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImageSize({ width: naturalWidth, height: naturalHeight });
  };

  const downloadImage = async () => {
    const fileName = img.substring(img.lastIndexOf('/') + 1);

    try {
      const response = await fetch(img, { mode: 'no-cors' });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      // Revoke the URL after download
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading the image:', error);
    }
  };

  return (
    <div className='card' height={imageSize.width} width={imageSize.height}>
      <div className="card-header hover">
        <button className="save-button" onClick={downloadImage}>
          <img src={Download} alt="Save" />
        </button>
      </div>

      <img 
        src={img} 
        alt={text} 
        className="card-image"
        onLoad={handleImageLoaded}
      />
      {/* <span className="card-text hover">{text}</span> */}
    </div>
  );
}

export default Card;
