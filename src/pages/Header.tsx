import * as React from 'react';
import MediaLinks from './MediaLinks';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const dataQuery = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 180, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Header = ({ name, role }: any) => {
  return (
    <StaticQuery
      query={dataQuery}
      render={data => (
        <div id="section-Header" className="container has-text-centered">
          <div className="column is-four-fifths">
            <div className="columns is-vcentered reverse-column-order">
              <div className="column">
                <h1 className="title is-size-1">{name}</h1>
                <h2 className="subtitle is-size-4 has-text-grey">{role}</h2>
                <MediaLinks />
              </div>
              <div className="column">
                <figure className="image is-180x180">
                  <Img style={{ borderRadius: '290486px' }} fixed={data.file.childImageSharp.fixed} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Header;
