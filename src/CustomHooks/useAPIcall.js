import axios from "axios";

const instance = axios.create({
    baseURL : 'https://texttospeech.googleapis.com/v1beta1'
});

export default instance;