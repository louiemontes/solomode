import React from 'react';
import { Link } from 'react-router';
import Layout from "./Layout.js";


function App () {
  return (
    <Layout>
      <ul>
        <li>
          <Link to="/fs">For Sale</Link>
        </li>
        <li>
          <Link to="/ttt">Tic Tac Toe</Link>
        </li>
        <li>
          <Link to="/lc">Lost Cities</Link>
        </li>
      </ul>
    </Layout>
  );
}

export default App;
