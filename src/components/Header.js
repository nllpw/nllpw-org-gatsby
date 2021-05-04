import React from 'react';
import _ from 'lodash';

import { Link, withPrefix, classNames } from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header" className="header container">
                <Link to={withPrefix('/')} className="logo">{_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)}</Link>
                {(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null) && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav', null)) && (
                    <nav>
                        {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null), (item, item_idx) => {
                            let pageUrl = _.trim(_.get(this.props, 'pageContext.url', null), '/').split('/')[0];
                            let itemUrl = _.trim(_.get(item, 'url', null), '/');
                            console.log(pageUrl, itemUrl)
                            return (
                                <Link key={item_idx} to={(_.get(item, 'url', null).startsWith('#') ? (_.get(item, 'url', null)) : withPrefix(_.get(item, 'url', null)))}
                                    {...(_.get(item, 'new_window', null) ? ({ target: '_blank' }) : null)}
                                    {...((_.get(item, 'new_window', null) || _.get(item, 'no_follow', null)) ? ({ rel: (_.get(item, 'new_window', null) ? ('noopener ') : '') + (_.get(item, 'no_follow', null) ? ('nofollow') : '') }) : null)}
                                    className={classNames('nav-link', { 'dropdown': _.get(item, 'children', null) }, { 'active': pageUrl === (itemUrl) })}
                                >

                                    {_.get(item, 'label', null)}

                                    <div className="dropdown-content">
                                        {_.map(_.get(item, 'children', null), (child, child_idx) => {
                                            return(
                                                <Link key={child_idx} to={(_.get(child, 'url', null).startsWith('#') ? (_.get(child, 'url', null)) : withPrefix(_.get(child, 'url', null)))}
                                                    {...(_.get(child, 'new_window', null) ? ({ target: '_blank' }) : null)}
                                                    {...((_.get(child, 'new_window', null) || _.get(child, 'no_follow', null)) ? ({ rel: (_.get(child, 'new_window', null) ? ('noopener ') : '') + (_.get(child, 'no_follow', null) ? ('nofollow') : '') }) : null)}
                                                    className={classNames('nav-link')}>{_.get(child, 'label', null)}
                                                </Link>
                                            )
                                        })}
                                    </div>

                                </Link>
                            )
                        })}
                    </nav>
                )}
            </header>
        );
    }
}
