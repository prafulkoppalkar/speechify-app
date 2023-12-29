import { useRequestContext } from "../ContextProvider";
import { speakingRate } from "../CustomHooks/constants";
import { useState } from "react";
const Playback = () => {
  const { requestData, setRequestData } = useRequestContext()
  const [playback, setPlayback] = useState("1.00");
  const handlePlayback = (e) => {
    setPlayback(e.target.value);
    setRequestData({
      ...requestData,
      audioConfig: {
        ...requestData.audioConfig,
        speakingRate: e.target.value,
      },
    });
  };

  return (
    <div className="playback">
      <label>Playback:</label>
      <select className="dropdown" value={playback} onChange={handlePlayback}>
        {speakingRate.map((item) => (
          <option key={item} value={item}>
            {item}x
          </option>
        ))}
      </select>
    </div>
  );
};

export default Playback;
