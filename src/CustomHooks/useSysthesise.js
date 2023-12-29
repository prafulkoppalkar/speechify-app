import axios from "axios";
import { useMemo, useState, useEffect, useCallback, useRef } from "react";

const useSyntheise = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const baseURL = "https://texttospeech.googleapis.com/v1beta1";
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current = new Audio();
    return () => {
      if (audioRef.current) {
        audioRef.current.remove();
      }
    };
  }, []);

  const handlePause = useCallback(() =>{
    if (audioRef.current) {
      audioRef.current.pause();
    }
  },[]);

  const handlePlay = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  },[]);

  const fetchData = useCallback(async (url, method, requestBody) => {
    setLoading(true);
    try {
      const response = await axios({
        method: method,
        url: `${baseURL}${url}`,
        data: requestBody, // Pass the request body here
        // Other configurations like headers can also be added if needed
      });
      const newAudioUrl = `data:audio/mp3;base64,${response.data.audioContent.toString(
        "base64"
      )}`;
      setAudioUrl(newAudioUrl);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  },[]);

  return useMemo(
    () => ({ audioRef, audioUrl, error, loading,handlePlay, handlePause, fetchData }),
    [audioRef, audioUrl, error, loading,handlePlay, handlePause, fetchData]
  );
};

export default useSyntheise;
