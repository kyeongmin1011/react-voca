import Header from "./component/Header";
import DiaryList from "./component/DiaryList";
import Day from "./component/Day";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  // https://github.com/coding-angma/voca
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<DiaryList/>}></Route>
          <Route path="/day/:day" element={<Day/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
