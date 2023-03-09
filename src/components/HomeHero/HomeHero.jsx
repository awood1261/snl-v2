import React from "react";
import "./homehero.css";

import Typography from "../Typography/Typography";
import Button from "../Button/Button";

const HomeHero = ({
  headingText,
  subHeadingText,
  listenUrl,
  ctaText,
  publishDate,
}) => {
  return (
    <div className="bg-bottom-right bg-no-repeat bg-[url('../public/vinyl-whiskey.png')]">
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

      <div className="homehero max-w-5xl flex flex-col">
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
    </div>
  );
};

export default HomeHero;