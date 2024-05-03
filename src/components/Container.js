import React from "react";

const Container = ({ name, number }) => {
  return (
    <div className={`child ${name}`}>
      <h1>Window {number}</h1>
      <h2>Hello</h2>
      <p>
       I am a resizable box.
      </p>
    </div>
  );
};

export default Container;