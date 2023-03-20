import useFetch from "../hooks/useFetch.ts";
import {useNavigate} from "react-router-dom";

const CreateDay = () => {
  const days = useFetch(`http://localhost:3000/days`);
  const navigate = useNavigate();

  const addDay = () => {
    fetch(`http://localhost:3000/days/`, {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        day: days.length + 1
      })
    }).then(res => {
      if (res.ok) {
        alert('생성이 완료되었습니다.')
        navigate('/')
      }
    })
  }

  return (
    <div className="CreateDay">
      <h3>현재일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  )
}

export default CreateDay;