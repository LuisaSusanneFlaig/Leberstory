import React, { forwardRef } from "react";

const SplitPanel = forwardRef(({ left, right }, ref) => {
  const leftCount = React.Children.count(left);
  const rightCount = React.Children.count(right);

  return (
    <div ref={ref} className="absolute inset-0  flex lg:p-50 p-20">
      {/* Left Column */}
      <div
        className={`w-1/2 h-full flex  lg:m-20 m-5 gap-4 ${
          leftCount > 1 ? "flex-row" : "flex-col"
        }`}
      >
        {left}
      </div>

      {/* Right Column */}
      <div
        className={`w-1/2 h-full flex lg:m-20 m-5 gap-4 ${
          rightCount > 1 ? "flex-row" : "flex-col"
        }`}
      >
        {right}
      </div>
    </div>
  );
});

export default SplitPanel;
