import React from 'react';
import AppListing from '../components/app-listing';
import JumpToApps from '../components/jump-to-apps';
import Header from '../components/header';
import { Helmet } from 'react-helmet';

export default ({ data: { site, apps: { edges: appEdges }, appIcons: { edges: iconEdges }} }) => {
  const apps = appEdges.map(({ node: app }) => {
    const { identifier } = app.info;
    const iconEdge = iconEdges.find(({ node }) => {
      return node.id.indexOf(identifier) > 0;
    });

    const iconResolutions = iconEdge ? iconEdge.node.resolutions : '';

    return {
      app,
      iconResolutions
    }
  });


  const { siteMetadata: { title, description, url, tagLine }} = site;
  const fullTitle = `${title} - ${tagLine}`;

  return (
    <div>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name='description' content={description} />

        <meta property='og:title' content={fullTitle} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={`${url}/meta-image.jpg`} />
        <meta property='og:url' content={url} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@pietropizzi' />
      </Helmet>
      <Header metaData={site.siteMetadata} />
      <JumpToApps apps={apps} />
      {
        apps.map(({ app, iconResolutions }) =>
          <AppListing key={app.info.identifier} app={app} iconResolutions={iconResolutions} />
        )
      }
    </div>
  )
}
