import {useNavigate, useParams} from "react-router-dom";
// @ts-ignore
import useFetch from "../hooks/useFetch.ts";
// @ts-ignore
import Word, {IWord} from "./Word.tsx";

const Day = () => {
  const {day} = useParams<{day: string}>();
  const words: IWord[] = useFetch(`http://localhost:3000/words?day=${day}`);
  const navigate = useNavigate();

  const dayDelete = () => {
    fetch(`http://localhost:3000/days/${day}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          alert('삭제되었습니다.')
          navigate('/')
        }
      })
  }

  return (
    <div>
      <h2>Day {day} <button onClick={dayDelete} className="btn_del">day 삭제</button></h2>

      {words.length === 0 && <span>Loading..</span>}
      <table>
        {words.map(word => (
          <Word word={word} key={word.id}/>
        ))}
      </table>
    </div>
  )
}

export default Day;