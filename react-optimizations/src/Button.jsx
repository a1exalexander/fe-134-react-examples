import { memo, Profiler } from "react";

export const Button = memo(({ children, onClick }) => {
  return (
    <>
      <Profiler id="Button" onRender={console.log} />
      <button onClick={onClick}>{children}</button>
    </>
  );
});

Button.displayName = 'Button';
