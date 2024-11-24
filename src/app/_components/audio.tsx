"use client";

import React, { useEffect, useRef } from "react";

const AudioPlayer = ({ isMute }: { isMute: boolean }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isMute) {
        audioRef.current.pause();
        console.log("Audio paused due to mute.");
      } else {
        audioRef.current.muted = false;
        audioRef.current.play().catch((e) => {
          console.error("Failed to play audio:", e);
        });
        console.log("Audio Play");
      }
    }
  }, [isMute]);

  return (
    <audio ref={audioRef} loop muted autoPlay>
      <source src="/audio/Violet Snow (Original Ver.).mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
