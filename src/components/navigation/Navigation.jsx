import { useContext, useState } from "react";
import { LogingedContext, PlayerContext, PlaylistContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css"

const Navigtion = () => {


  let logingedCon = useContext(LogingedContext);
  const [click, setClick] = useState(false);

  const{setMusicList} = useContext(PlaylistContext);
  const{setSongInfo, audio} = useContext(PlayerContext);
  
  const myPageClick = () => {
    navigate('/user/mypage');
  }
  const onClick = ()=>{
    setClick(!click);
  }

  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };


  const handleButtonClick = () => {
    if (keyword) {
      navigate(`/search/${encodeURIComponent(keyword)}`);
    }

  };
  const logOutClick = () =>{
    localStorage.clear();
    setMusicList([]);
    setSongInfo([]);
    audio.src= '';
    navigate('/');
  }

    return (
      <div className="Navigtion">
        <Link className="text-1" to={"/"}>SURFER</Link>
        
        <input
        className="search-keyword-text"
        type="text"
        value={keyword}
        onChange={handleInputChange}
      />
        <button className="button" onClick={handleButtonClick}>
          <p className="text-2">🔎 검색</p>
        </button>

        <div>
          {
            logingedCon.isLoggedIn ? 
            <div className="memberBox">
              <p className="nickname">{localStorage.getItem("nickname")}님 로그인</p>
              <button className="setting" onClick={onClick}>⚙️</button>
            </div>
            :
            <button className="button2">
              <Link className="login" to={"/login"}>로그인</Link>
            </button>
          }
        </div>

        <div>
          {
            logingedCon.isLoggedIn ? (
              click ? 
            <div className="memberButton">
              <button className="myPage" onClick={myPageClick}>마이페이지</button>
              <button onClick={()=>{navigate("/myPlaylists")}}>플레이리스트</button>
              <button onClick={logOutClick}>로그아웃</button>
            </div>
            :
            null
            )
            :
            <button className="navButton1">
            <Link to={'/register'} className="text-4">회원가입</Link>
            </button>
          }
        </div>

        <button className="navButton1">
          <p className="text-5">차트</p>
        </button>

        <button className="navButton1">
          <Link to={'/latest'} className="text-5">최신 앨범</Link>
        </button>

        <button className="navButton1">
        <Link to={'/genre'} className="text-5">장르</Link>
        </button>

        <button className="navButton1">
          <p className="text-5">아티스트</p>
        </button> 

      </div>
    )
  }

  export default Navigtion;