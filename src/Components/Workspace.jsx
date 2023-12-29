import { useEffect, useState } from "react";
import "./styles.css";
import Voices from "./Voices";
import { urls, requestBody } from "../CustomHooks/constants";
import useSyntheise from "../CustomHooks/useSysthesise";
import Playback from "./Playback";
import Pitch from "./Pitch";
import TextArea from "./TextArea";
import { useRequestContext } from "../ContextProvider";

const Workspace = () => {
  const { requestData } = useRequestContext();
  const { audioRef, audioUrl, _, __, handlePlay, handlePause, fetchData } =
    useSyntheise();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Reset the audio element when key changes
    }
  }, [audioUrl, audioRef]);

  useEffect(() => {
    let timeoutId;
    const delayedAPICall = () => {
      fetchData(urls.synthesise, "POST", requestData);
    };
    timeoutId = setTimeout(delayedAPICall, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [requestData.input, requestData.voice, requestData.audioConfig]);

  return (
    <div className="App">
      <header className="App-header">Speechify App</header>
      <div className="title">Welcome to Text to Speech demo</div>
      <TextArea />
      <div className="alter__container">
        <Voices />
        <Pitch />
        <Playback />
      </div>
      <div className="button__container">
        <button className="button" onClick={handlePlay}>
          Speak
        </button>
        <button className="button" onClick={handlePause}>
          Pause
        </button>

        {audioUrl && (
          <audio ref={audioRef}>
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
};

export default Workspace;
