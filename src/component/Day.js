import dummy from '../db/data.json';
import {useParams} from "react-router-dom";
import Word from "./Word";

const Day = () => {
  // const day = useParams().day 아래코드와 동일
  const { day } = useParams();
  const wordList = dummy.words.filter(word => word.day === Number(day))

  return (
    <div>
      <h2>Day {day}</h2>
      <table>
        {wordList.map(word => (
         <Word word={word} key={word.id}/>
        ))}
      </table>
    </div>
  )
}

export default Day;