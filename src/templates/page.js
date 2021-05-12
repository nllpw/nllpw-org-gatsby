import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {htmlToReact, Link, withPrefix, classNames} from '../utils';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <section className="page">
                <header className="hero">
                    <div className="copy">
                            {   
                                (_.get(this.props, 'pageContext.url', null).startsWith('/workshop/')) && (
                                    <div className="submenu">
                                        {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null).find(el => el.url === "/workshop/").children, (item, item_idx) => {
                                            return (
                                                <React.Fragment key={item_idx}>
                                                    <Link to={(_.get(item, 'url', null).startsWith('#') ? (_.get(item, 'url', null)) : withPrefix(_.get(item, 'url', null)))}
                                                        {...(_.get(item, 'new_window', null) ? ({ target: '_blank' }) : null)}
                                                        {...((_.get(item, 'new_window', null) || _.get(item, 'no_follow', null)) ? ({ rel: (_.get(item, 'new_window', null) ? ('noopener ') : '') + (_.get(item, 'no_follow', null) ? ('nofollow') : '') }) : null)}
                                                        className={classNames({ 'sub-active': _.get(this.props, 'pageContext.url', null) === _.get(item, 'url', null) })}
                                                    >
                                                        {_.get(item, 'label', null)}
                                                    </Link>
                                                    <span> // </span>
                                                </React.Fragment>
                                            )
                                        })}
                                    </div>
                                )
                            }
                        
                        <h1>{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                        {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                        <h3>{htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle', null))}</h3>
                        )}
                    </div>
                </header>
                <div className="content">
                    {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                </div>
            </section>
            </Layout>
        );
    }
}
