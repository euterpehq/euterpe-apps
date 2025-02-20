import React from "react";

interface SpacerProps {
  horizontal?: boolean;
  size: number | string;
}

function Spacer({ horizontal = false, size }: SpacerProps) {
  const defaultValue = "auto";
  const style = {
    width: horizontal ? size : defaultValue,
    height: !horizontal ? size : defaultValue,
  };

  return <div style={style} />;
}

export default Spacer;
