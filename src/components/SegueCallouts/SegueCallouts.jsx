import React from "react";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function SegueCallouts() {
  return (
    <>
      <div className="flex">
        <div className="bg-SecondaryInputSurface text-amber-100 w-1/2 p-28 bg-cover bg-no-repeat relative bg-[url('../public/ghostmail2.png')]">
          <Typography
            variant={"subheading"}
            element="h4"
            className={"mb-3 bg-black/50 p-2 self-start"}
          >
            S & L Newsletter
          </Typography>
          <Typography
            variant={"body"}
            element="p"
            className={"mb-2 bg-black/50 p-2"}
          >
            Sign up for the Spirits & Lyrics Newsletter to stay up to date on
            episodes, news, events and more!
          </Typography>
          <TextInput label={"Email Address"} />
          <Button
            size={"small"}
            style="secondary"
            isDisabled={false}
            text={"Sign Up"}
          ></Button>
        </div>
        <div className="bg-SecondaryInputSurface text-amber-100 w-1/2 p-28 bg-cover bg-no-repeat relative bg-[url('../public/shopping-ghost.png')]">
          <Typography
            variant={"subheading"}
            element="h4"
            className={"mb-3 bg-black/50 p-2"}
          >
            Shop Spirits & Lyrics
          </Typography>
          <Typography
            variant={"body"}
            element="p"
            className={"mb-2 bg-black/50 p-2"}
          >
            Shop for official S & L gear!
          </Typography>
          <Button
            size={"small"}
            style="secondary"
            isDisabled={false}
            text={"Shop Now"}
          ></Button>
        </div>
      </div>
    </>
  );
}

export default SegueCallouts;
