import React from "react";

const InteractiveComponent = () => {
  function mul(x: number) {
    for (let y = 0; y <= 10; y++) {
      return y + x;
    }
  }
  const avg = (x: number, y: number, z: number): number => {
    return (x + y + z) / 3;
  };
  const isEven = (x: number): boolean => {
    return x % 2 === 0;
  };
  const isOdd = (x: number): boolean => {
    return !isEven(x);
  };
  const cube = (x: number) => {
    return Math.pow(x, 3);
  };
  const square = (x: number) => Math.pow(x, 2);

  const is_vowel = (chr: string): boolean => {
    const vowel_list = ["a", "e", "o", "u", "i"];
    const ch = chr.toLowerCase();
    return vowel_list.includes(ch);
  };
  const is_consonant = (ch: string): boolean => {
    return !is_vowel(ch);
  };
  const isUpper = (chr: string): boolean => {
    return chr === chr.toUpperCase();
  };
  const table = (x: number) => {
    for (let i = 1; i <= 10; i++) {
      console.log(i * x);
    }
  };
  return (
    <div>
      {mul(2)}
      <h1>Average is: {avg(2, 4, 6)}</h1>
      <h2> {isEven(5) ? "yes Even" : "Not a Even"}</h2>
      <h3>{isOdd(4) ? "odd yes" : "no"}</h3>
      <h4>Cube is: {cube(5)}</h4>
      <h4>Square is: {square(5)}</h4>
      <h5> {is_vowel("b") ? "Vowel" : "Consonant"}</h5>
      <h2>{is_consonant("a") ? "yes a consotant" : "not a consonant"}</h2>
      <h2>{isUpper("F") ? "upper case" : "not upper case"}</h2>
      <button onClick={() => table(7)}>print table</button>
    </div>
  );
};

export default InteractiveComponent;
