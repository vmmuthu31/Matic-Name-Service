import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useState, useEffect } from "react";
import Main from './Main'
import { css } from "@emotion/react";
import {  RingLoader } from "react-spinners";

const override = css``;
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="animation-box bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
          <RingLoader
            loading={loading}
            size={120}
            color="#7b3fe4"
          />
        </div>
      ) : (
        <div className="App">
              <Main />
        </div>
      )}
    </>
  );
}

export default App;