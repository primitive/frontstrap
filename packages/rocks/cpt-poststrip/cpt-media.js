import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const ACFImage = ({ state, id, className }) => {
  const media = state.source.works[id];
  
  //console.log("@cpt-media: media", media);

  if (!media) return null;

  //const imgSrc = (media.acf.image ? media.acf.image : item.acf.cdn_image_link);

  const acfimage = media.acf.image;
  const acfsizes = media.acf.image.sizes;
  //const imageSizes = ["thumbnail", "medium", "medium_large", "large", "full"]

  const convertSizes = () => {

    const oThumbnail = {
      file: acfimage.filename + acfsizes['thumbnail-width'] + 'x' + acfsizes['thumbnail-height'],
      width: acfsizes['thumbnail-width'],
      height: acfsizes['thumbnail-height'],
      mime_type: acfimage.mime_type,
      source_url: acfsizes.thumbnail
    }

    const oMedium = {
      file: acfimage.filename + acfsizes['medium-width'] + 'x' + acfsizes['medium-height'],
      width: acfsizes['medium-width'],
      height: acfsizes['medium-height'],
      mime_type: acfimage.mime_type,
      source_url: acfsizes.medium
    }

    const oMediumLarge = {
      file: acfimage.filename + acfsizes['medium_large-width'] + 'x' + acfsizes['medium_large-height'],
      width: acfsizes['medium_large-width'],
      height: acfsizes['medium_large-height'],
      mime_type: acfimage.mime_type,
      source_url: acfsizes['medium_large']
    }

    const oLarge = {
      file: acfimage.filename + acfsizes['large-width'] + 'x' + acfsizes['large-height'],
      width: acfsizes['large-width'],
      height: acfsizes['large-height'],
      mime_type: acfimage.mime_type,
      source_url: acfsizes.large
    }

    if (acfsizes['bedrock-custom']) {

      // custom size: needs plugin or adding to functions.php
      const oCustom = {
        file: acfimage.filename + acfsizes['bedrock-custom-width'] + 'x' + acfsizes['bedrock-custom-height'],
        width: acfsizes['bedrock-custom-width'],
        height: acfsizes['bedrock-custom-height'],
        mime_type: acfimage.mime_type,
        source_url: acfsizes['bedrock-custom']
      }

      return {
        thumbnail: oThumbnail,
        medium: oMedium,
        medium_large: oMediumLarge,
        large: oLarge,
        custom: oCustom
      }
    }
    else {
      return {
        thumbnail: oThumbnail,
        medium: oMedium,
        medium_large: oMediumLarge,
        large: oLarge
      }
    }

  }

  const sizes = convertSizes();

  const srcset =
    Object.values(sizes)
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
    <Container className={className}>
      <StyledImage
        alt={media.title.rendered}
        src={acfimage.url}
        srcSet={srcset}
      />
    </Container>
  );
};

export default connect(ACFImage);

const Container = styled.div`
  display: block;
  border: none;
`;

const StyledImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
`;
