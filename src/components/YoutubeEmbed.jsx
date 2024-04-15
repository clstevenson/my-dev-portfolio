// local component to embed a YouTube video demo
// input is the "embed URL" copied from YT
// Adapted from https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2

export default function YoutubeEmbed({ embedURL }) {
  return (
    <div className="video-responsive">
      <iframe width="560" height="315"
        src={embedURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}
