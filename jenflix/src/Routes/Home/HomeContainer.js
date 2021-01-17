import React from "react";
import HomePresenter from './HomePresenter.js';
import {moviesApi} from 'api';

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming : null,
        popular : null,
        error: null, 
        loading: true
    }

    /* 
        <react LifeCycle>
        - componentDidMount 
        1. 사용 방법 : 
        1) 전체 API 요청을 여기서 할 수 있음.
        2) 각각의 요청을 분리된 함수({}밖에 함수로)로 만들어서 따로 요청할 수 있음

        2. 생성 시점 : 
        컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
        이 안에서 다른 자바스크립트 프레임워크를 연동하거나 
        setTimeout, setInterval 및 AJAX 처리 등을 넣음.

        3. 관련 작업
         1) 외부 라이브러리 연동: D3, masonry, etc
         2) 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
         3) DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
        
        - async, await 
        자바스크립트에게 대기 요청
        await 아래의 명령이 끝날때까지 기다려줌. 
        끝났다는 것은 성공/실패와 다름. 작업이 완료될때까지 대기한다는 의미

        - Object deconstruction

    */
    async componentDidMount() {
        try {          
            //NowPlaying 무비를 가져옴 하지만 try문이 API가 리턴될 떄까지 기다리지 않음
            //실행하고 데이터를 기다리지 않음. 그래서 async await 사용

            const {
                data: { results: nowPlaying }
            } = await moviesApi.nowPlaying();
            //console.log(nowPlaying)//promise가 finished 될때까지 기다림  
            const {
                data: { results: upcoming }
              } = await moviesApi.upcoming();
            //console.log(upcoming)
            const {
                data: { results: popular }
              } = await moviesApi.popular();
            //console.log(popular)

            this.setState({
                nowPlaying,
                upcoming,
                popular
              });
    
        } catch {
            this.setState({
                error:"Can't find movies information."
            })

        } finally {
            //try 하거나 catch하거나 무엇이 실행되어도 마지막 loading 값은 false 실행
            this.setState({
                loading : false
            })
        }
    }

    render () {//state를 결정 여기에 모든 로직 추가 할 것. 
        const {nowPlaying, upcoming, popular, error, loading} = this.state
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        )
    }
}