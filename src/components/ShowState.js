import React from "react";
import GlobalState from "../GlobalState";

export default function ShowState() {
  const { globalState, setGlobalState } = GlobalState();

  return <div>{JSON.stringify(globalState)}</div>;
}
