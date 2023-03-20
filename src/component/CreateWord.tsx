// @ts-ignore
import useFetch from '../hooks/useFetch.ts';
import {FormEvent ,useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {IDay} from "./DiaryList";

const CreateWord = () => {
  const [isLoading, setIsLoading] = useState(false);

  const days : IDay[] = useFetch("http://localhost:3000/days");
  const navigate = useNavigate();

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault(); // 새로고침 막기위함

    if (!isLoading && engRef.current && korRef.current && dayRef.current) {
      setIsLoading(true) // 저장 통신중에는 버튼이 작동하지 않도록 하기위함

        const eng = dayRef.current.value;
        const kor = dayRef.current.value;
        const day = dayRef.current.value;

      fetch(`http://localhost:3000/words/`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          eng,
          kor,
          day,
          isDone: false
        })
      })
        .then(res => {
          if (engRef.current.value.length < 2) {
            engRef.current.focus()
            return
          }
          if (korRef.current.value.length < 1) {
            korRef.current.focus()
            return
          }
          if (res.ok) {
            alert('생성이 완료되었습니다.')
            navigate(`/day/${day}`);
            setIsLoading(false)
          }
        });
    }
    }

  return (
    <form className="CreateWord">
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef}/>
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef}/>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>{day.day}</option>
          ))}
        </select>
      </div>

      <button onClick={onSubmit} style={{opacity: isLoading ? 0.3 : 1}}>
        {isLoading ? 'Saving..' : '저장'}
      </button>
    </form>
  )
}

export default CreateWord;