import React from 'react';

interface HelloProps {
  name: string;
  big: boolean;
}
const Hello = ({ name, big }: HelloProps) => {
  if (big) {
    return <h1>안녕하세요, {name}!</h1>;
  }
  return <p>안녕하세요, {name}!</p>;
};

export default Hello;
