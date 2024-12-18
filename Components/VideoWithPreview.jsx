/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { useState } from "react";
import styles from "../styles/VideoWithPreview.module.css";
const VideoWithPreview = ({ previewImage, videoSrc, name }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className={styles.container}>
      {!isVideoLoaded ? (
        <div style={{ position: "relative" }}>
          <img
            src={previewImage}
            alt={`${name} preview image`}
            onClick={handlePlayVideo}
            className={styles.image}
          />
          <div className={styles.play} onClick={handlePlayVideo}>
            ▶️
          </div>
        </div>
      ) : (
        <video src={videoSrc} controls autoPlay className={styles.video} />
      )}
    </div>
  );
};

export default VideoWithPreview;
