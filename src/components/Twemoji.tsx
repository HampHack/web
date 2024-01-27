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
        className,
        size: `${width ? width : 20}x${height ? height : 20}`,
        attributes: () => ({
          style: `width: ${width ? width : 20}px; height: ${
            height ? height : 20
          }px;`,
        }),
      }),
    }}
  />
);

export default memo(Twemoji);
