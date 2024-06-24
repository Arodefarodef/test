import React from "react";
import FormComp from "./static/form";
import DisplayScreen from "./static/display";

const page = () => {
  return (
    <div className="border m-6 p-4 rounded-md">
      <div>This is Home Screen</div>;
      <FormComp />
      <div className="my-10">
        <hr />
      </div>
      <DisplayScreen />
    </div>
  );
};

export default page;
