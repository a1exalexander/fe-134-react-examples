import { memo, Profiler } from "react";

export const Logo = memo(() => {
  return (
    <>
      <Profiler id="Logo" onRender={console.log} />
      <span>LOGO</span>
    </>
  );
});

Logo.displayName = 'Logo';
