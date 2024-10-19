import React from "react";
import Accordion from "./accordion";

const QnA = () => {
  const data = [
    {
      title: "What is SoundFusion?",
      desc: "SoundFusion is a web app that helps you organize your music with the help of TAGS. It allows you to create, modify your spotify playlist on the basis of TAGS.",
    },
    {
      title: "Why SoundFusion?",
      desc: "It allows you to organize your playlists, songs according to your Mood using TAGS. Use your Creativity and Create best playlists according to your Mood",
    },
    {
      title: "Filter songs",
      desc: "Filter out songs from large playlists according to your mood. Filter songs on the basis of TAGS",
    },
  ];
  return (
    <div className="md:w-1/2 w-8/12">
      {data.map((item) => (
        <Accordion key={item.title} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
};

export default QnA;
