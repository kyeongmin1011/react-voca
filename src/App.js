import Header from "./component/Header";
import DiaryList from "./component/DiaryList";
import Day from "./component/Day";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from "./component/NotFound";

function App() {
  // https://github.com/coding-angma/voca
  // https://devbirdfeet.tistory.com/129

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<DiaryList/>}></Route>
          <Route path="/day/:day" element={<Day/>}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
