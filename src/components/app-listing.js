import React from 'react';
import AppAction from './app-action';
import AppIcon from './app-icon';
import './app-listing.module.css'

export default ({ app: { info, actions }, iconResolutions }) => {
  return (
    <div id={info.identifier}>
      <div styleName='titleContainer'>
        <div styleName='titleInner' className='g-module'>
          <div styleName='titleMain'>
            <AppIcon resolutions={iconResolutions} />
            <h2 styleName='title'>{info.name}</h2>
          </div>
          <div styleName='titleSide'>
            <a styleName='titleLink' href={info.appstoreUrl}>{'App Store'}</a>
            &nbsp;·&nbsp;
            <a styleName='titleLink' href={info.documentationUrl}>{'Documentation'}</a>
          </div>
        </div>
      </div>
      <div className='g-module'>
        {
          actions.map((action) =>
            <div key={action.url} styleName='appActionWrapper'>
              <AppAction action={action} />
            </div>
          )
        }
      </div>
    </div>
  );
};
