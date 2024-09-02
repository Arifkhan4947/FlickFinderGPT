
import { loadmovie } from "../Reducers/movieReducer";
import axios from "../../utils/axios"

export const asynchmovieload=(id)=> async(dispatch,getState)=>{
    try {
        const details= await axios.get(`/movie/${id}`)
        const externalid= await axios.get(`/movie/${id}/external_ids`)
        const recommendations= await axios.get(`/movie/${id}/recommendations`)
        const similar= await axios.get(`/movie/${id}/similar`)
        const videos= await axios.get(`/movie/${id}/videos`)
        const watchproviders= await axios.get(`/movie/${id}/watch/providers`)
        let thedetails={
            details:details.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            videos:videos.data.results.find(m=>m.type==="Trailer"),
            watchproviders:watchproviders.data.results.IN,
        }
        dispatch(loadmovie(thedetails))
        console.log("ultimate detail is here ",thedetails)
    } catch (error) {
        console.log("error:",error)
    }
}
export {removemovie} from "../Reducers/movieReducer"
