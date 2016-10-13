const React = require('react');
const shows = require('../public/data');

const Search = () => (
  <pre>
    <code>
      { JSON.strigify(shows, null, 4) }
    </code>
  </pre>
)

module.exports = Search;
