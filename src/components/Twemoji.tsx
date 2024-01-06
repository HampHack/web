import React, { memo } from "react";
import twemoji from "twemoji";

const Twemoji = ({
  emoji,
  className,
}: {
  emoji: string;
  className: string;
}) => (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: "svg",
        ext: ".svg",
      }),
    }}
    className={className}
  />
);

export default memo(Twemoji);
