import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function AudioPlay({ src }) {

  return (
    <div className="w-full flex justify-center items-center">
      <AudioPlayer
        className="border-0"
        volume={1}
        src={src}
        layout="horizontal"
        showJumpControls={false}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        customProgressBarSection={[]}
      />
    </div>
  );
}

export default AudioPlay;
