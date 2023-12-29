import { useState } from "react";
import { useRequestContext } from "../ContextProvider";

const Pitch = () => {
  const {requestData,setRequestData} = useRequestContext()
    const [pitch, setPitch] = useState(0);
    const handlePitchChange = (e) => {
        setPitch(e.target.value);
        setRequestData({
          ...requestData,
          audioConfig: {
            ...requestData.audioConfig,
            pitch: e.target.value,
          },
        });
      }
    return (
        <div className="pitch">
          <label>Pitch:</label>
          <input
            type="range"
            className="pitch__range"
            min="-20"
            max="20"
            value={pitch}
            onChange={handlePitchChange}
          />
        </div>
    )
}

export default Pitch;