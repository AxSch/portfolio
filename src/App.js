import React from 'react';
import menuIcon from './assets/icons/menuIcon.svg'

function App() {
  return (
    <div className="flex container text-white mx-auto flex-wrap relative">
      <div className="flex flex-row items-start m-6 w-full sm:hidden">
        <img src={menuIcon} alt='mobile menu' />
      </div>
      <div className="flex flex-row text-8xl flex-wrap font-sans z-10 justify-center sm:text-landing-md lg:text-landing-lg">
        <h1 className="">
          *.ASTE
          </h1>
        <h1 className="ml-20 sm:ml-40">
          RISK
        </h1>
        <div className="hidden font-san sm:flex sm:flex-row sm:text-4xl lg:hidden">
          <span className="mr-6">PORTFOLIO</span>
          <span className="mr-6">ABOUT</span>
          <span>SOCIAL</span>
        </div>
      </div>
      <div>
        <div className="w-full h-0 left-0 absolute pb-53">
          <iframe
            title="mainpage"
            className="border-0 -top-70 right-1 w-full h-full absolute sm:-top-80"
            src="//cdn.iframe.ly/NfuhZxz?media=1"
            allow="encrypted-media *">
          </iframe>
        </div>
      </div>
      <div className="z-10 mt-16 sm:mt-12 lg:flex lg:flex-row lg:items-center">
        <div className="hidden font-san lg:flex lg:flex-col lg:text-4xl mx-6">
          <span>PORTFOLIO</span>
          <span>ABOUT</span>
          <span>SOCIAL</span>
        </div>
        <div className="flex flex-row justify-center font-san text-4xl lg:hidden">
          <h3>WELCOME</h3>
        </div>
        <div className="flex flex-row justify-center font-sans-serif px-6 py-2 text-center sm:text-center lg:flex-col lg:text-left">
          <h3 className="hidden font-san text-6xl justify-center lg:flex lg:flex-row">WELCOME</h3>
          <p className="lg:pt-4">
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
      <script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
    </div>
  );
}

export default App;
