import "./MovieSelectedheader.scss";

export default function MovieSelectedheader() {
  return (
    <div className="featured">
        <img src="https://i.ytimg.com/vi/QP3sxps6k0s/maxresdefault.jpg" alt="" />
        <div className="info">
        <h1 className="movieTitle">Movie Title</h1>
        <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className="featured--buttons">
            <a className="featured--watchButton" href="/">▶ Play</a>
            <a className="featured--myListButton" href="/">+ My List</a>
        </div>
        </div>
    </div>
  );
}