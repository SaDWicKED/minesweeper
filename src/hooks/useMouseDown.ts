import { useState } from "react";

export type SetMouseDownStatus = () => void;
export type SetMouseUpStatus = () => void;

export const useMouseDown = ():[
  boolean,
  SetMouseDownStatus,
  SetMouseUpStatus
] => {
  const [mouseDown, setMouseDown] = useState(false);

  const handleMouseDown = () => {
    setMouseDown(true);
  }
  
  const handleMouseUp = () => {
    setMouseDown(false);
  }

  return [mouseDown, handleMouseDown, handleMouseUp]
}
