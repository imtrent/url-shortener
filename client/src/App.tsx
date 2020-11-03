import React from 'react';
import { Url } from './components/url';

function App() {
  return (
    <div>
      <h1>URL Shortener</h1>
      {Array.from(Array(10), (el, i) => {
        return <Url redirect="efg" shortId="abc" />;
      })}
    </div>
  );
}

export default App;
