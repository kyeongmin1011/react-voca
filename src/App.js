import Header from "./component/Header";
import DiaryList from "./component/DiaryList.tsx";
import Day from "./component/Day.tsx";
import NotFound from "./component/NotFound";
import CreateWord from "./component/CreateWord.tsx";
import CreateDay from "./component/CreateDay";

import {BrowserRouter, Route, Routes} from 'react-router-dom';

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
          <Route path="/create_word" element={<CreateWord/>}></Route>
          <Route path="/create_day" element={<CreateDay/>}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
