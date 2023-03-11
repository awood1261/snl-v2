import React from "react";
import "./episodecard.css";
import Typography from "../Typography/Typography";

const EpisodeCard = ({ imageUrl, title, url, description }) => {
  const [showDescription, setShowDescription] = React.useState(false);

  const handleHover = () => {
    setShowDescription(true);
  };

  const handleLeave = () => {
    setShowDescription(false);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col items-center justify-center w-full p-4 m-4 overflow-hidden rounded-md shadow-md transition-all duration-300 bg-cover bg-center bg-no-repeat hover:bg-gray-100"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <Typography variant={"subheading"} element="h4">
        {title}
      </Typography>
      {showDescription && (
        <Typography variant="body" element="p">
          {description}
        </Typography>
      )}
    </a>
  );
};

const EpisodeList = () => {
  const episodes = [
    {
      imageUrl: "../../public/md-ten.png",
      title: "Middle Tennessee",
      url: "https://example.com/episode1",
      description: "Description of episode 1",
    },
    {
      imageUrl: "../../public/hokkaido-mountains.png",
      title: "Hokkaido",
      url: "https://example.com/episode2",
      description: "Description of episode 2",
    },
    {
      imageUrl: "../../public/windsor.png",
      title: "Windsor",
      url: "https://example.com/episode3",
      description: "Description of episode 3",
    },
  ];

  return (
    <div className="my-24">
      <Typography variant={"heading"} element="h4" className={'text-center'}>
        Other Episodes
      </Typography>
      <div className="flex flex-wrap gap-x-2 justify-center my-5">
        {episodes.map((episode, index) => (
          <div className="episodecard">
            <EpisodeCard key={index} {...episode} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
