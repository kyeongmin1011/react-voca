import {Link} from "react-router-dom";
// @ts-ignore
import useFetch from "../hooks/useFetch.ts";

export interface IDay {
  id: number;
  day: number;
}

const DiaryList = () => {
  const days : IDay[] = useFetch('http://localhost:3000/days');
  if (days.length === 0) {
    return <span>Loading..</span>
  }

  return (
    <ul className="list_day">
      {days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  )
}

export default DiaryList;