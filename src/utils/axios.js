import axios from "axios";
const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDM2N2VkODJlNjE1NDM3M2Q0ZjVlNzVmYzg0NmY5OCIsIm5iZiI6MTcyNDE0Nzc3My44OTU0NDcsInN1YiI6IjY2YzM5ZTZlNGRmMjk0NTZiYWQwZTVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7j_kE34lz3kAiazMfo-ZGvdffDobMcfNMnWQzAJNs8s'
      }
})
export default instance