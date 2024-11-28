import React from "react";
import OurGallery from "../OurGALLERY/GalleryDta";

const UniGallery = () => {
  return (
    <div className="gallery">
      {OurGallery.map((item, index) => (
        <div key={index} className="gallery-item">
          {item.videoUrl ? (
            <div className="video-container">
              {/* Only display YouTube Shorts or convert to regular YouTube embed */}
              {item.videoUrl.includes("youtube.com/shorts") ? (
                <iframe
                  width="350px"
                  height="350px"
                  src={item.videoUrl.replace("https://www.youtube.com/shorts/", "https://www.youtube.com/embed/")}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Gallery video ${index + 1}`}
                />
              ) : (
                <p>Not a valid YouTube Short video</p>
              )}
            </div>
          ) : (
            <img
              src={require(`../Gallery/${item.image}`)}
              alt={`Gallery item ${index + 1}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default UniGallery;
