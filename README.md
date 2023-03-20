# React-voca

## #10 라우터 구현
- `react-router-dom` 설치
- `Link`를 이용해 링크 이동
- `import { BrowserRouter, Route, Routes } from "react-router-dom"`
- 여러 라우팅을 매칭하고 싶은 경우 URL 뒤에 `*` 을 사용
- `<Route path="/page1/*" element={<Page1 />} />`


## #11 json-server, REST API
- `npm install -g json-server`
- `json-server --watch ./src/db/data.json --port3001`


## #12 useEffect, fetch()
- `http://localhost:3000/words?day=1` day가 1인 데이터만 출력됨

## #13 Custom Hooks
- ` 'Custom Hook를 만든다 = 재사용 가능한 함수를 만든다'`
- 하지만, 일반 컴포넌트에서는 리액트에게 전달해줄 UI 즉, JSX를 return하는 반면에 Custom Hooks은 외부 컴포넌트들과 공유하고 싶은 데이터를 return하면 된다.

## #14 PUT(수정), DELETE(삭제)
- 체크박스 true, false 값 수정해서 저장하기
- PUT 수정할 때, `body`값은 `JSON.stringify` 문자열로 바꿔주기!
- DELETE 삭제할 땐, `body`값 없어도 된다.

## #15 POST(생성), useNavigate(페이지이동)




### 참고
route : [https://velog.io/@soryeongk/ReactRouterDomV6](https://velog.io/@soryeongk/ReactRouterDomV6)
코딩악마 : [https://www.youtube.com/c/%EC%BD%94%EB%94%A9%EC%95%99%EB%A7%88/playlists](https://www.youtube.com/c/%EC%BD%94%EB%94%A9%EC%95%99%EB%A7%88/playlists)
