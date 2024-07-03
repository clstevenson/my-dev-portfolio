// local component to embed a YouTube video demo
// input is the "embed URL" copied from YT
// Adapted from https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
import styled from "styled-components";

export default function YoutubeEmbed({ embedURL }) {
  return (
    <VideoWrapper>
      <iframe
        width="560"
        height="315"
        src={embedURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </VideoWrapper>
  );
}

const VideoWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  & iframe {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;
