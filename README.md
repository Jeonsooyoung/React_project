# React_project 
리액트 실습 

## Jenflix
Learning React and ES6 by building a Movie Discovery App.

## 1.설치 
1. npm i npx -g (npx 이용하여 설치)    
2. npx create-react-app <Project Name>     
* ‘npx’는 npm 5.2+ 버전의 <strong>패키지 실행 도구</strong><br>
  사용하지 않는 버전의 패키지를 컴퓨터에 저장하지 않고 사용할 수 있게 해주는 도구    
** Create React App은 Babel이나 webpack같은 build 도구를 사용하나, 설정 없이도 동작 가능
3. npm install react-router-dom
4. npm install axios
- https://github.com/axios/axios
- (장점) Axios의 인스턴스를 configure(설정) 해줄 수 있음.

## Screens 
- [] Home
- [] TV shows 
- [] Search
- [] Detail

## API Verbs ( (api page)[https://developers.themoviedb.org/3/getting-started/introduction])
- [x] Now playing (Movie)
- [x] Upcoming (Movie)
- [x] Top Rated (TV)
- [x] Popular (TV, X)
- [x] Aring Today 
- [x] TV show Deatil 
- [x] Movies Deatil 
- [] Search (TV, Movies)

## 00. 패키지 내 컴포넌트 설명
1. react-router-dom
- Router(BrowserRouter/)
- Route
- Redirect
- Switch 
- withRouter 은 다른 컴포넌트를 감싸는 컴포넌트
- Link : 
2. Axios : 서버 통신 할때 사용

## 00. Error 
1. import App from "Components/App";
 - NODE_PATH를 설정 에러 : Node_path를 설정해도 그 자체가 deprecated 됨     
https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md#removed-typescript-flag-and-node_path-support
해결방법은 package.json과 같은 경로에 jsconfig.json 파일을 만들고 거기에서 강제 관리
=> jsconfig.json 파일 만들고 아래 코드 삽입
  {
    "compilerOptions": {
    "baseUrl": "src"
    }
  }

<<<<<<< HEAD
2. Assign arrow
 Assign arrow function to a variable before exporting as module default  import/no-anonymous-default-export
 
=======

>>>>>>> a967c72a7a609a5d7c1a59922fed25dccbf247b3
api page