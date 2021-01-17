import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    padding:0 20px`;

const TVPresenter = ({topRated, popular, airingToday, loading, error}) =>  loading? (<Loader/>) : (
    <Container>
        {topRated && topRated.length > 0 &&(
        <Section title="TopRated Shows" >
            {topRated.map(movie => movie.title)}
        </Section>
        )}
        {popular && popular.length > 0 &&(
        <Section title="Popular Shows" >
            {popular.map(movie => movie.title)}
        </Section>
        )}
        {airingToday && airingToday.length > 0 &&(
        <Section title="AiringToday" >
            {airingToday.map(movie => movie.title)}
        </Section>
        )}
    </Container>
)

TVPresenter.PropTypes = {
    topRated:PropTypes.array,
    popular:PropTypes.array,
    airingToday:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
}

export default TVPresenter;