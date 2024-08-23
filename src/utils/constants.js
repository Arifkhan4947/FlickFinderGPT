
// here the TMDB API secret_key which we got from "TMDB" wesite. It's Open Source free Available. 
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDM2N2VkODJlNjE1NDM3M2Q0ZjVlNzVmYzg0NmY5OCIsIm5iZiI6MTcyNDE0Nzc3My44OTU0NDcsInN1YiI6IjY2YzM5ZTZlNGRmMjk0NTZiYWQwZTVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7j_kE34lz3kAiazMfo-ZGvdffDobMcfNMnWQzAJNs8s'
  },
};



export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";



export const SUPPORTED_LANGUAGES = [
  {identifire: "en", name: "English"}, 
  {identifire: "hindi", name: "Hindi"}, 
  {identifire: "spanish", name: "Spanish"},
];

// we provide it security using ".env" file for prevent from the Hackers. This is not show on my gihub code. because .gitignore file is not visible there. 
// here the openai secret_key which we got from the "openai.com" website. It's Not Open Source we have to pay for this.
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;



