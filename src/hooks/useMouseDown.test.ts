import { renderHook, act } from "@testing-library/react";

import { useMouseDown } from "./useMouseDown";

describe('useMouseDown hook test', () => {
  it('Should toggle state after onMouseDown/onMouseUp calls', () => {
    const { result } = renderHook(useMouseDown); 

    const [mouseDown, handleMouseDown, handleMouseUp] = result.current;

    expect(mouseDown).toBe(false);
    act(handleMouseDown);
    expect(result.current[0]).toBe(true);
    act(handleMouseUp);
    expect(result.current[0]).toBe(false);
  })
})