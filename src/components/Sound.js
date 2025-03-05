import Thumbnail from "./Thumbnail.js";
import LikeButton from "./LikeButton.js";

function Video({ video }) {
    return (
        <div>
            <Thumbnail video={video} />
            <a href={video.url}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
            </a>
            <LikeButton video={video} />
        </div>
    );
}

export default Video;