import {useState} from "react";
interface IProps {
    word: IWord;
}

export interface IWord {
    id: number;
    day: string;
    eng: string;
    kor: string;
    isDone: boolean;

}

const Word = ( {word: w}: IProps ) => {
    const [word, setWord] = useState(w)
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    const toggleShow = () => setIsShow(!isShow);
    const toggleDone = () => {
        fetch(`http://localhost:3000/words/${word.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type" : "application/json"
            },
            // PUT 은 수정을 위한 데이터라서 body에 담아주기
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            })
        })
            .then(res => {
                if (res.ok) {
                    setIsDone(!isDone);
                }
            });
    }

    const remove = () => {
        if (window.confirm('삭제하시겠습니까?')) {
            fetch(`http://localhost:3000/words/${word.id}`, {
                method: 'DELETE'
            })
                .then(res => {
                    if (res.ok) {
                        setWord({...word, id: 0})
                    }
                })
        }
    }

    if (word.id === 0) {
        return null;
    }


    return (
        <tbody className="Word">
        <tr className={isDone ? 'off' : ''}>
            <td><input type="checkbox" defaultChecked={isDone} onChange={toggleDone}/></td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>{isShow ? '숨기기' : '뜻 보기'}</button>
                <button onClick={remove} className="btn_del">삭제</button>
            </td>
        </tr>
        </tbody>
    )
}

export default Word