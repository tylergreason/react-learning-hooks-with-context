import React, { useContext } from "react";
import { Context } from "../store/Store";

export default function ShowState() {
  const store = useContext(Context);
  return (
    <div>
      <p>
        We can see the store updates amongst all components throughout the app:
      </p>
      {JSON.stringify(store)}
    </div>
  );
}
