import { useState, useEffect } from "react";
import { urls } from "../CustomHooks/constants";
import fetch from "../CustomHooks/useAPIcall";
import './styles.css'
import { useRequestContext } from "../ContextProvider";

const Voices = () => {
  const {requestData, setRequestData} = useRequestContext()
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setselectedVoice] = useState("");

  useEffect(() => {
    function getVoices(url) {
      fetch
        .get(url)
        .then((json) => {
          let filter = json.data.voices.filter((item)=>{
              return item.name.includes("Standard") || item.name.includes("Wavenet") || item.name.includes("News")
            })
          setVoices(filter)
          setselectedVoice(filter[0].name)
          setRequestData({
            ...requestData,
            voice: {
              ...requestData.voice,
              name: filter[0].name,
            }
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
    getVoices(urls.fetchVoices);
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value)
    setselectedVoice(e.target.value)
    setRequestData({
      ...requestData,
      voice: {
        ...requestData.voice,
        name: e.target.value,
      }
    })
  } 

  return (
    <div className="voices__container">
      <div>
      <label>Voices:</label>
        <select className="dropdown" name="voices" value={selectedVoice} onChange={handleChange}>
        {voices && voices.map(voice=> (
            <option value={voice.name} key={voice.name}>{voice.name}&nbsp;({voice.ssmlGender})</option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default Voices;
