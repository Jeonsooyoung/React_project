https://velopert.com/3631 


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
