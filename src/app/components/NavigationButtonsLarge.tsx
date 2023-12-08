import React from "react";

export default function NavigationButtonsLarge(props: {
  target: string;
  updateFunction: Function;
}): React.ReactNode {
  const imgSrc = `location/${props.target}.svc`; // example
  const onClick = () => {
    updateFunction(props.target);
  }; // example

  return <button></button>;
}
