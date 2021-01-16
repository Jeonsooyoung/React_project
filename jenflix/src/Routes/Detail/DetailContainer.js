import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor (props){
    super(props);
    const {location : {pathname}} = props;    
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie : pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match :{
        params :{id}
      },
      history: {push}
    } = this.props
    const {isMovie} = this.state
    const parsedId = parseInt(id);
    if(isNaN(parsedId)){
      return push("/")// Number가 아니면 Home으로 이동
    }

    let result = null;
    if(isMovie){
      try{
        if(isMovie){
          ({data:result} = await moviesApi.movieDetail(parsedId))
        }else {
          ({data:result} = await tvApi.showDetail(parsedId))
        }
      } catch {
        this.setState({error:"Can't find anything."})
      } finally{
        this.setState({loading:false, result})
      }
    }

  }

  render() {
    const { result, error, loading } = this.state;
    console.log(result)
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

// 1. URL 처리 :  우리가 detail에 있는지 show에 있는지 알아내야함
