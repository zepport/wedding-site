/* global it */

/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
/* eslint-disable-next-line no-unused-vars */
import App from '../../components/Header';
import SiteContext from '../../context';

describe('Header.', () => {
  const state = {
    pageContent: {},
    dates: {},
  };
  const dispatch = jest.fn();

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SiteContext.Provider value={{ state, dispatch }}>
        <App />
      </SiteContext.Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly without dates or content values.', () => {
    const tree = renderer
      .create(
        <SiteContext.Provider value={{ state, dispatch }}>
          <App />
        </SiteContext.Provider>,
      )
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
<h1>
  Loading...
</h1>
`);
  });
});
