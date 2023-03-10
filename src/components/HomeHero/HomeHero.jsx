import React from "react";
import "./homehero.css";

import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import EpisodeCard from "../EpisodeCard/EpisodeCard";
import TextInput from "../TextInput/TextInput";

const HomeHero = ({
  headingText,
  subHeadingText,
  listenUrl,
  ctaText,
  publishDate,
}) => {
  return (
    <div className="bg-cover bg-no-repeat relative bg-[url('../public/vinyl-whiskey4.jpg')]">
      <img
        src="../public/snl-skeleton.png"
        className="absolute top-4 left-4 w-40 h-40"
        alt=""
      />
      <ul class="flex justify-center space-x-4 pt-8 mb-14">
        <li>
          <a href="#" class="text-amber-500 hover:text-amber-300">
            Episodes
          </a>
        </li>
        <li>
          <a href="#" class="text-amber-500 hover:text-amber-300">
            How To Listen
          </a>
        </li>
        <li>
          <a href="#" class="text-amber-500 hover:text-amber-300">
            About
          </a>
        </li>
        <li>
          <a href="#" class="text-amber-500 hover:text-amber-300">
            Sponsors
          </a>
        </li>
      </ul>

      <div className="homehero mt-52 ml-12 flex flex-col">
        <Typography variant={"heading"} element="h2" className="mb-2">
          {headingText}
        </Typography>
        <Typography variant={"subheading"} element="h3" className="mb-1">
          {subHeadingText}
        </Typography>
        <Typography variant={"caption"} element="span" className="mb-7">
          {publishDate}
        </Typography>
        <Button
          size={"medium"}
          style="primary"
          url={listenUrl}
          isDisabled={false}
          text={ctaText}
        ></Button>
      </div>
      <EpisodeCard />
      <div className="flex">
        <div className="bg-SecondaryInputSurface text-amber-100 w-1/2 p-20 bg-cover bg-no-repeat relative bg-[url('../public/ghostmail.png')]">
          <Typography variant={"subheading"} element="h4" className={'mb-3 bg-black/50 p-2'}>
            S & L Newsletter
          </Typography>
          <Typography variant={"body"} element="p" className={'mb-2 bg-black/50 p-2'}>
            Sign up for the Spirits & Lyrics Newsletter to stay up to date on
            episodes, news, events and more!
          </Typography>
          <TextInput label={'Email Address'} />
          <Button
            size={"small"}
            style="secondary"
            isDisabled={false}
            text={'Sign Up'}
          ></Button>
        </div>
        <div className="bg-SecondaryInputSurface text-amber-100 w-1/2 p-20 bg-cover bg-no-repeat relative bg-[url('../public/shopping-ghost.png')]">
          <Typography variant={"subheading"} element="h4" className={'mb-3 bg-black/50 p-2'}>
            Shop Spirits & Lyrics
          </Typography>
          <Typography variant={"body"} element="p" className={'mb-2 bg-black/50 p-2'}>
            Shop for official S & L gear!
          </Typography>
          <Button
            size={"small"}
            style="secondary"
            isDisabled={false}
            text={'Shop Now'}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
