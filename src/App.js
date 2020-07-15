import React from 'react';
import menuIcon from './assets/icons/menuIcon.svg'

function App() {
  return (
    <div className="flex container text-white mx-auto flex-wrap relative">
      <div className="flex flex-row items-start m-6 w-full sm:hidden">
        <img src={menuIcon} alt='mobile menu' />
      </div>
      <div className="flex flex-row text-9xl flex-wrap font-sans z-10 justify-center sm:text-landing-md">
        <h1 className="">
          *.ASTE
          </h1>
        <h1 className="ml-20 sm:ml-40">
          RISK
        </h1>
        <div className="hidden sm:flex sm:flex-row sm:text-4xl font-san">
          <span className="mr-6">PORTFOLIO</span>
          <span className="mr-6">ABOUT</span>
          <span>SOCIAL</span>
        </div>
      </div>
      <div>
        <div className="w-full h-0 left-0 absolute pb-53">
          <iframe
            title="mainpage"
            className="border-0 -top-30 -right-14 w-full h-full absolute sm:-top-80 sm:-right-32"
            src="//cdn.iframe.ly/NfuhZxz?media=1"
            allow="encrypted-media *">
          </iframe>
        </div>
      </div>
      <script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
      <div className="z-10 mt-16 sm:mt-12">
        <div className="flex flex-row justify-center font-san text-4xl">
          <h3 className="">WELCOME</h3>
        </div>
        <div className="flex flex-row justify-center font-sans-serif px-6 py-2">
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Donec luctus quam in ligula
            ullamcorper cursus molestie
            ut enim. Suspendisse non
            sagittis velit. Aliquam erat
            volutpat. Aliquam erat volutpat.
            Suspendisse congue nulla
            metus, et rhoncus nisi volutpat
            in. Sed facilisis diam ut ante
            vestibulum iaculis. Donec a
            convallis nisi.
            Quisque aliquet
            lacinia nunc,
            ac dapibus risus tincidunt ac.
            </p>
        </div>
      </div>
    </div>
  );
}

export default App;
