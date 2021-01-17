import axios from "axios"

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        api_key : "94bb6c497a171f67b275b300b87ed066",
        language : "en-US"
    }
})
// tv/{tv_id}?api_key=<<api_key>>&language=en-US
//append_to_response 로 관련 이미지 /비디오 불러올 수 있음

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming : () => api.get("movie/upcoming"),
    popular : () => api.get("movie/popular"),
    movieDetail : id => api.get(`movie/${id}`,{
        //라우터, 파라미터들을 개별적으로 설정하는 방식. API 전체를 위한 것은 아님
        params : {
            append_to_response:"videos"
        }
    }),
    search : (term) => api.get("search/movie",{
        params : {
            query : encodeURIComponent(term)
        }
    })

}

export const tvApi = {
    topRated : () => api.get("tv/top_rated"),
    popular : () => api.get("tv/popular"),
    airingToday : () => api.get("tv/airing_today"),
    showDetail : id => api.get(`tv/${id}`,{
        params : {
            append_to_response:"videos"
        }
    }),
    search : (term) => api.get("search/tv",{
        params : {
            query : encodeURIComponent(term)
        }
    })

}

