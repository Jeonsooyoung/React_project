import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    const {
      match :{
        params :{id}
      },
      history: {push}
    } = this.props
    const parsedId = parseInt(id);
    if(isNaN(parsedId)){
      return push("/")// Number가 아니면 Home으로 이동
    }
  }

  render() {
    console.log(this.props)
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

// 1. URL 처리 :  우리가 detail에 있는지 show에 있는지 알아내야함
