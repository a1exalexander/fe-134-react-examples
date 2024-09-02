import { useEffect, useState } from "react";

const fetchSongs = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();
  return data;
};

export const Music = () => {
  const [songs, setSongs] = useState([]);

  const getData = async () => {
    const data = await fetchSongs();
    setSongs(data);
  }

  useEffect(() => {
    if (!songs.length) {
      getData();
    }
  }, []);

  return (
    <div>
      Music
      <ul>
        {songs.map((song) => (
          <li key={song.key}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};
