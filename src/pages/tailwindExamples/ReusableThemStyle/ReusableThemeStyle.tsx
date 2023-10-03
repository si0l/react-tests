import React from "react";
import OutletWrapper from "../../../components/common/OutletWrapper/OutletWrapper";

const ReusableThemeStyle = () => {
  return (
    <OutletWrapper>
      <p>
        Shadow style defined in a theme (tailwind.config.js -&gt; boxShadow):
      </p>
      <div className="h-20 w-20 bg-yellow-400 rounded-lg shadow-neonen" />
      <p>
        Shadow style plugin for all colors (tailwind.config.js -&gt; plugins):
      </p>
      <div className="h-20 w-20 bg-yellow-400 rounded-lg neon-green" />
      <p>Custom theme color (primary) (tailwind.config.js -&gt; colors):</p>
      <div className="h-20 w-20 bg-primary-400 rounded-lg" />
      <p>Custom theme color DEFAULT value allows to use it without number:</p>
      <div className="h-20 w-20 bg-primary rounded-lg" />
    </OutletWrapper>
  );
};

export default ReusableThemeStyle;
