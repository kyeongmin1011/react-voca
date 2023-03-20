import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h2>잘못된 접근입니다.</h2>
      <Link to="/"><button>돌아가기</button></Link>
    </div>
  )
}

export default NotFound;