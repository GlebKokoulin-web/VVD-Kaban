import * as React from "react";

interface LocalVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
}

const LocalVideo: React.FC<LocalVideoProps> = ({
  src,
  poster,
  className = "",
  autoPlay = false,
  muted = false,
  controls = true,
}) => {
  return (
    <div className={`video-wrapper ${className}`}>
      <video
        className="rounded-xl"
        width="100%"
        height="100%"
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        poster={poster}
        preload="metadata"
        playsInline
      >
        <source src={src} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
};

export default LocalVideo;
