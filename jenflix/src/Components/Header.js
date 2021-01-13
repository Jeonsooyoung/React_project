import React from "react";
import {Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color:#fff;
    position:fixed;
    top:0; left:0; 
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    padding:0 10px; 
    background-color:rgba(20,20,20,0.8);
    box-shadow:0px 1px 5px 2px rgba(0,0,0,0.8)
`;
const List = styled.ul`
    display:flex;
    
`;
const Item = styled.li`
    width:80px; 
    height:50px;
    text-align:center; 
    border-bottom:3px solid ${props => props.current? '#3498db':'transparent'};
    transition:border-bottom .5s ease-in-out
`;
const SLink = styled(Link)`
    height:50px; 
    display:flex; 
    align-items:center;
    justify-content:center;
`;

const HeaderUI = ( {location:{pathname}}) => (
    <Header>
        <List>
            <Item current={pathname === "/"}><SLink to="/">Movies</SLink></Item>
            <Item current={pathname === "/tv"}><SLink to="/tv">TV</SLink></Item>
            <Item current={pathname === "/search"}><SLink to="/search">Search</SLink></Item>            
        </List>
    </Header>
)

export default withRouter(HeaderUI)

//styled Component에 props 전달가능. props에 따라서 스타일 적용 가능
//export 하는 건 다른 컴포넌트가 안에 있는 withRouter 임
//withRouter은 props라는 매개 변수를 가질 수 있음 
//withRouter 가 있으면 props 사용 가능. 
//일단withRouter 덕분에 어떤 컴포넌트와도 연결이 가능함.