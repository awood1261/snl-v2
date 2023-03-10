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
      className="relative flex flex-col items-center justify-center w-full max-w-xs p-4 m-4 overflow-hidden rounded-md shadow-md transition-all duration-300 bg-cover bg-center bg-no-repeat hover:bg-gray-100"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {/* <h2 className="text-lg font-bold text-white mb-2">{title}</h2> */}
      <Typography variant={"subheading"} element="h4">
        {title}
      </Typography>
      {showDescription && (
        <Typography variant="body" element="p">{description}</Typography>
        // <p className="absolute bottom-0 left-0 w-full p-4 bg-gray-900 bg-opacity-75 text-white">
        //   {description}
        // </p>
      )}
    </a>
  );
};

const EpisodeList = () => {
  const phimg =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADICAYAAACZBDirAAATxklEQVR4Xu2dhZLkOLNGPcvMzMy87/8Gy8zMzLw7/z0VUXPd2WlbrtKAWkcRHbsxZWdJJ6VPqZTsOvbMM88cHywSkIAEOiRwTAHs0Os2WQIS2BBQAO0IEpBAtwQUwG5db8MlIAEF0D4gAQl0S0AB7Nb1NlwCElAA7QMSkEC3BBTAbl1vwyUgAQXQPiABCXRLQAHs1vU2XAISUADtAxKQQLcEFMBuXW/DJSABBdA+IAEJdEtAAezW9TZcAhJQAO0DEpBAtwQUwG5db8MlIAEF0D4gAQl0S0AB7Nb1NlwCElAA7QMSkEC3BBTAbl1vwyUgAQXQPiABCXRLQAHs1vU2XAISUADtAxKQQLcEFMBuXW/DJSABBdA+IAEJdEtAAezW9TZcAhJQAO0DEpBAtwQUwG5db8MlIAEF0D4gAQl0S0AB7Nb1NlwCElAA7QMSkEC3BBTAbl1vwyUgAQXQPiABCXRLQAHs1vU2XAISUADtAxKQQLcEFMBuXW/DJSABBdA+IAEJdEtAAezW9TZcAhJQAO0DEpBAtwQUwG5db8MlIAEF0D4gAQl0S0AB7Nb1NlwCElAA7QMSkEC3BBTAbl1vwyUgAQXQPiABCXRLQAHs1vU2XAISUADtAxKQQLcEFMBuXW/DJSABBdA+IAEJdEtAAezW9TZcAhJQAO0DEpBAtwQUwG5db8MlIAEF0D4gAQl0S0AB7Nb1NlwCElAA7QMSkEC3BBTAbl1vwyUgAQXQPiABCXRLQAHs1vU2XAISUADtAxKQQLcEFMBuXW/DJSABBdA+IAEJdEtAAezW9TZcAhJQAO0DEpBAtwQUwG5db8MlIAEF0D4gAQl0S0AB7Nb1NlwCElAA7QMSkEC3BBTAbl1vwyUgAQXQPiABCXRLQAHs1vU2XAISUADtAxKQQLcEFMBuXW/DJSABBdA+IAEJdEtAAezW9TZcAhJQAO0DEpBAtwQUwG5db8MlIAEF0D4gAQl0S0AB7Nb1NlwCElAA7QMSkEC3BBTAbl1vwyUgAQXQPiABCXRLQAHcw/WXXHLJcPHFFw/nnnvucM455wz//fff8Ndffw1//vnn8Mcffwy///77ztavuOKK4aKLLjpgG5v8/fbbb5vv2KWcf/75G7sXXHDBcPbZZw/Hjx/f1Bm7P//88y4mm7rnvPPOG2DLf/HbWWeddaL9+Au2+HGXctlllw3wxTZ2//77743tn376afjnn392Mbm5hz524YUXbmwfO3bsRD/75ZdfNn6z7E5AAdyB3XXXXTdcf/31m44+VxhQn3322fDDDz8Uf8utt946XH311RtxmisI4AcffDAwCEoKgnfzzTdvBv9UYbB+/fXXwxdffFFisqlrmKxgi/gvFRh89NFHS5ed+Jz+cMMNN2wENStMMojgJ598skqwLr/88o3PEL+p8uuvv278taaPFTesgwsVwJVOvueeewY65ppCZPXWW2/N3oKY3nvvvZvIbE356quvho8//nj2FkTvrrvu2kQPJYXB+u677+4cCZV8x6m85sYbbxz4K20/dWOCef/99wcEZq488MADmwitpBBZMml9//33i5cj1ghrafnyyy83AmtZR0ABXMHrtttuG6699toVd/z/pUtRxUMPPTQ708996VznZ1mGaK8Z/HxXiWjvBOIU33TVVVcNd955507f+u+//w6vvPLK5PKVCQu+awuT4Vy6AbG+6aab1podPv/8882Kw1JOQAEsZMUsz2wfCzkYlqHkjhgwRHCIJDnBWN55553hxx9/PPTvU7M90Qe2+S8CxlII23F5zBLr1VdfTfOCjz/++KG6kI9iAGKbejKIWRpGkfz000+bXg7TtkcffXSTjxuXcftZ9hN9E9VnYvbdd99tIsFYWPKyPI0FX8EWuyy7L7300kNLY3KDCGuWa8QPDz744CG7RKRE5qRV6AfYjasF+sGbb765GLUWdvkuLlMAC91MFEE0MS4sZd57773UAkvOK6+88sBnU1FgJlLM5MzosTCosc0AGBcGx9tvv33g38hT3nLLLQf+jYH02muvHRp8LJPvvvvuQ0Lx4osvFhI68y7LRAphev3119OoDv/ecccdhyaCN95445CoPPbYY4eEjSUo0XgsCFrMPU5NLlmKhfweKYlYsomTCZaJ1lJGQAEs4zQ8+eSTByKJOfHbmozLWiIuZuhxQSQRtHEhqc0AmSpENEQ24yiT2f+55547cEscpESoDP6pHeRsiT8VtRZiO62XRf5EXogZIjhVWHqyBB2XuLTMJpZvvvlm+PDDD1OzbI48/PDDByJ3Vgz4Ylyy6C+7bnxPFFf6wQsvvHBk8rcnuwMpgAWEWXIwmMaFKGrpmEscTAgQ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";
  const episodes = [
    {
      imageUrl: '../../public/md-ten.png',
      title: "Middle Tennessee",
      url: "https://example.com/episode1",
      description: "Description of episode 1",
    },
    {
      imageUrl: '../../public/hokkaido-mountains.png',
      title: "Hokkaido",
      url: "https://example.com/episode2",
      description: "Description of episode 2",
    },
    {
      imageUrl: '../../public/windsor.png',
      title: "Windsor",
      url: "https://example.com/episode3",
      description: "Description of episode 3",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center my-20">
      {episodes.map((episode, index) => (
        <div className="episodecard">
          <EpisodeCard key={index} {...episode} />
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;
