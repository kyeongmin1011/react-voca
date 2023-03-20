import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Word from "./Word";

const Day = () => {
  // const day = useParams().day 아래코드와 동일
  const {day} = useParams();
  // const wordList = dummy.words.filter(word => word.day === Number(day))

  const [words, setWords] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/words?day=${day}`)
      .then(res => res.json())
      .then(data => setWords(data))
  }, [day])

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