const API_KEY = "AIzaSyACuQMBrmELsg38EPEQ2aesGrxtSadERdI";

export const urls = {
  fetchVoices: `/voices?key=${API_KEY}&languageCode=en-US`,
  synthesise: `/text:synthesize?key=${API_KEY}`,
};

export const speakingRate = [
  "0.25",
  "0.50",
  "0.75",
  "1.00",
  "2.00",
  "3.00",
  "4.00",
];

export const requestBody = {
  audioConfig: {
    audioEncoding: "MP3",
    pitch: "0.00",
    speakingRate: "1.00",
  },
  input: {
    ssml: "Hi please enter the text you want to speak",
  },
  voice: {
    languageCode: "en-US",
    name: "en-US-Wavenet-E",
  },
};
