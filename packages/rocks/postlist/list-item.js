import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import FeaturedMedia from "rocks/featured-media";
import CTA from "rocks/button-fancy";
import Heading from "primitivepebbles/heading";


const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <article className="col">

      <header className="text-center">
        <HeadLink link={item.link}>
          <Heading text={item.title.rendered} className="align-center" />
        </HeadLink>
      </header>

      <div className="text-center">
        <PostDate className="mb-0">
          {date.toDateString()}
        </PostDate>
        <AuthorName>
          <p><strong>{author.name}</strong> was 'ere...</p>
        </AuthorName>
      </div>

      {state.theme.featured.showOnList && (
        <MediaLink link={item.link}>
          <FeaturedMedia id={item.featured_media} />
        </MediaLink>
      )}

      <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} className="text-center" />

      <CTA
        text="Read More"
        link={item.link}
        colors={[state.theme.colors.coal, state.theme.colors.green, state.theme.colors.brightlime]}
      />

    </article>
  );
};

export default connect(Item);

const HeadLink = styled(Link)`
  display: inline-block;
  color: rgba(12, 17, 43, 0.6);

  &:hover {
    color: rgba(12, 17, 43, 0.8);
    text-shadow: 1px 1px 1px rgba(255,192,203,.6);
    text-decoration: underline;
  }
`;

const AuthorName = styled.p`
  display: inline-block;

  p {
    color: rgba(12, 17, 43, 0.9);
    font-family: "Amatic SC";
    font-size: 0.9em;
  }
`;

const MediaLink = styled(Link)`
  display: block;
  text-align: center;
`;

const PostDate = styled.p`
  color: rgba(12, 17, 43, 0.5);
  font-family: Courier;
`;

const Excerpt = styled.div`
  padding: 3.2rem 1.5rem 2rem;
  margin-bottom: 5rem;

  p {
    color: rgba(12,17,43,.7);
    font-family: Baskerville,Georgia,serif;
    font-size: 1.5rem;
    font-weight: 550;
    line-height: 2.5rem;
    text-shadow: 1px 1px 0 rgba(255,192,203,.4);
  }
`;