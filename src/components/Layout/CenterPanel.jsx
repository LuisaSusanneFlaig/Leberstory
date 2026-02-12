import React, { forwardRef } from "react";

const CenterPanel = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-0 flex flex-col items-center justify-center lg:p-50 p-20"
    >
      {children}
    </div>
  );
});

export default CenterPanel;
