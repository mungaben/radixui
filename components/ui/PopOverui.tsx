"use client";
import React from "react";
import * as Popover from "@radix-ui/react-popover";
const PopOverui = () => {
  return (
    <div className="">
      <Popover.Root>
        <Popover.Trigger className="text-black ">More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="text-black">
            <h5>
              hello
            </h5>
            <Popover.Arrow />
           
          </Popover.Content>
        </Popover.Portal>
       
      </Popover.Root>
    </div>
  );
};

export default PopOverui;
