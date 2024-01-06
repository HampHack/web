import React, { memo } from "react";
import twemoji from "twemoji";

const Twemoji = ({
  emoji,
  className,
  width,
  height,
}: {
  emoji: string;
  className: string;
  width?: number;
  height?: number;
}) => (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: "svg",
        ext: ".svg",
      }),
    }}
    className={className}
    style={{
      width: width ? width : 20,
      height: height ? height : 20,
    }}
  />
);

export default memo(Twemoji);
