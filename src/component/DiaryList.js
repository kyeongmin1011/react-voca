import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

const DiaryList = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/days')
      .then(res => res.json())
      .then(data => setDays(data))
  }, [])

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