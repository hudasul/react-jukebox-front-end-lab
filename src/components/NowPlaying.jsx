const NowPlaying = ({ selected }) => {
  return (
    <div>
      <h1>Now Playing </h1>
      <p>Title: {selected.title}</p>
      <p>Artist: {selected.artist}</p>
    </div>
  );
};

export default NowPlaying;
