import React from "react";

function SketchNav() {
  return (
    <>
      <img
        src="../public/snl-skeleton.png"
        className="absolute top-4 left-4 w-40 h-40"
        alt=""
      />
      <ul class="flex space-x-4 pt-8 mb-14 ml-52">
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
    </>
  );
}

export default SketchNav;
