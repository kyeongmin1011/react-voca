import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

const Day = () => {
  const {day} = useParams();
  const words = useFetch(`http://localhost:3000/words?day=${day}`);

  return (
    <div>
      <h2>Day {day}</h2>
      <table>
        {words.map(word => (
          <Word word={word} key={word.id}/>
        ))}
      </table>
    </div>
  )
}

export default Day;