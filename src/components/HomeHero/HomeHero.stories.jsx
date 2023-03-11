import React from "react";
import HomeHero from "./HomeHero";

export default {
  title: "Discover/HomeHero",
  component: HomeHero,
  argTypes: {
    headingText: {
      control: { type: "text" },
    },
    subheadingText: {
      control: { type: "text" },
    },
    listenUrl: {
      control: { type: "text" },
    },
    publishDate: {
      control: { type: "text" },
    },
    ctaText: {
      control: { type: "text" },
    },
  },
};

const args = {
  headingText: "Default Heading",
  subheadingText: "Default Subheading for an episode goes here",
  listenUrl: "https://www.spiritsandlyrics.com/",
  publishDate: "12/15/2021",
  ctaText: "Listen Now"
};

export const HomeHeroDefault = () => (
  <HomeHero {...args} variant="heading" element="h1" headingText="Sippin' On Infinity" subHeadingText={'Infinity Bottle, Psyche 16, Ouroboros, Big K.R.I.T.'} />
);
HomeHeroDefault.storyName = "Home Page Hero";
