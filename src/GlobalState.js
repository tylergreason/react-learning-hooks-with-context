import { useState } from "react";

export default function GlobalState() {
  const [globalState, setGlobalState] = useState({
    username: "username",
    password: "",
  });

  return { globalState, setGlobalState };
}
