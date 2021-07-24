import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const ImageSrcset = ({ state, id, className }) => {
  const media = state.source.attachment[id];

  // sk-dev: this will need the media ID passing not a URL
  // console.log("@get-srcset: media", media );

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map(item => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
      <StyledImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
      />
  );
};

export default connect(ImageSrcset);

const StyledImage = styled(Image)`

`;
