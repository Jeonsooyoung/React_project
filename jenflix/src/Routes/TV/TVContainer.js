import React from "react";
import TVPresenter from "./TVPresenter";
import {tvApi} from "../../api";

export default class extends React.Component {
  state = {
    topRated:null,
    popular:null,
    airingToday:null,
    loading:true,
    error:null
  };

  async componentDidMount() { // 화살표 함수화 : componentDidMount = async() => 
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
    width:100vw;
    display:flex;
    justify-content: cetner;

`;

const Text = styled.span`
    color:#e74c3c;
    font-weight:600
` ;

const Error = ({text}) => <Container><Text>{text}</Text></Container>

Error.propTypes = {
    text:PropTypes.string.isRequired

}

export default Error;

      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      this.setState({ topRated, popular, airingToday });
    } catch {
      this.setState({
        error: "Can't find TV information."
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render () {
    const {topRated,popular, airingToday, loading,error} = this.state;
    
    return <TVPresenter 
      topRated = {topRated}
      popular= {popular}
      airingToday= {airingToday}
      loading= {loading}
      error= {error}
    />
  }
}
