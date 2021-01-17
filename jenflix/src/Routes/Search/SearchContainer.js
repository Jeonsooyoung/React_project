import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults:null,
    tvResults:null,
    searchTerm:'',
    loading:false,
    error:null
  };
  /* 
    첫번째 로직은 handleSubmit 에서 함 
    누군가 폼에서 text를 입력하고, 엔터를 누르면 그게 handle Submit
    handleSubmit은 searchTerm이 빈칸(공백)이 아닌 걸 체크하고 그 다음에 search 함수 실행
  */
 componentDidMount () {
  this.handleSubmit()  
 }

 handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if(searchTerm !== ""){//빈 문자열이 아니라면
      this.searchByTerm();//searchByTerm 실행
    }
  }
  updateTerm = (event) => {
    const {target: {value}} = event;
    this.setState({searchTerm : value})

  }

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({loading:true})

    try {// 타이핑하거나 누군가 검색하면 결과적으로 loading true
      const {data:{results : movieResults}} = await moviesApi.search(searchTerm);
      const {data:{results : tvResults}} = await tvApi.search(searchTerm)
      this.setState({movieResults,tvResults})
    } catch {
      this.setState({ error:"Can't find results" })
    } finally {
      this.setState({ loading:false })
    }
  }

  render () {
    const {movieResults,tvResults,searchTerm, loading,error} = this.state;
    return <SearchPresenter 
      movieResults = {movieResults}
      tvResults= {tvResults}
      searchTerm= {searchTerm}
      loading= {loading}
      error= {error}
      handleSubmit = {this.handleSubmit}
      updateTerm = {this.updateTerm}
    />

    // 누군가가 폼을 제출 할때 handleSubmit을 호출 함 
    
  }
}
