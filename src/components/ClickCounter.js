import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalState from "../GlobalState";

export default function ClickCounter() {
  const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    background: lightpink;
  `;

  const [count, setCount] = useState(0);
  const [exampleObject, setExampleObject] = useState({ a: 1, b: 2, c: 3 });
  let { globalState, setGlobalState } = GlobalState();

  useEffect(() => {
    console.log(exampleObject);
    console.log(globalState);
  });

  function randomizeObject(object) {
    Object.keys(object).forEach((key) => {
      object[key] = Math.ceil(Math.random() * 100);
    });
    setExampleObject({ ...object });
  }

  function updateKey(object, key, value) {
    return { ...object, [key]: value };
  }

  function handleChangeUsername(event) {
    setGlobalState({ ...globalState, username: event.target.value });
  }

  return (
    <div>
      <p>Count is {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>

      <p>{globalState.username}</p>
      <form>
        <label>
          Username
          <input
            type="text"
            value={globalState.username}
            onChange={handleChangeUsername}
          ></input>
        </label>
      </form>
      <ul>
        {Object.keys(exampleObject).map((key) => {
          return (
            <li key={key}>
              {key}: {exampleObject[key]}{" "}
              <button
                onClick={() => {
                  setExampleObject(
                    updateKey(exampleObject, key, exampleObject[key] + 1)
                  );
                }}
              >
                Increase
              </button>
            </li>
          );
        })}
        <li>{JSON.stringify(exampleObject)}</li>
        <li>{exampleObject.a}</li>
        <li>{exampleObject.b}</li>
        <li>{exampleObject.c}</li>
      </ul>

      <button
        onClick={() => {
          return randomizeObject(exampleObject);
        }}
      >
        Randomize exampleObject
      </button>

      <Wrapper>
        <h3>
          Hooks are JavaScript functions, but they impose two additional rules:
        </h3>
        <ul>
          <li>
            Only call Hooks at the top level. Don’t call Hooks inside loops,
            conditions, or nested functions.
          </li>
          <li>
            Only call Hooks from React function components. Don’t call Hooks
            from regular JavaScript functions. (There is just one other valid
            place to call Hooks — your own custom Hooks. We’ll learn about them
            in a moment.)
          </li>
        </ul>
      </Wrapper>
    </div>
  );
}
