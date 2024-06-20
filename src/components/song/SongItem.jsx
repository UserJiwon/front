import { Link } from "react-router-dom";

const SongItem = (props)=>{

    return(
        <div className="songItem">
            <p className="songNumber">{props.song.songNumber}</p>
            <Link className="songTitle" to={"/song/detail/"+props.song.songSeq}>{props.song.songTitle}</Link>
            <p className="songLike">🤍 10</p>
            <p className="listen">듣기</p>
            <p className="playlist">담기</p>
            <p className="download">다운로드</p>
        </div>
    )

}

export default SongItem;

