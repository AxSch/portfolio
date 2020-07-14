import React from 'react';
import menuIcon from './assets/icons/menuIcon.svg'

function App() {
  return (
    <div className="flex container text-white mx-auto flex-wrap relative">
      <div className="flex flex-row items-start m-6 w-full md:hidden">
        <img src={menuIcon} alt='mobile menu' />
      </div>
      <div className="flex flex-row text-8xl flex-wrap font-sans z-10 justify-center">
        <h1 className="">
          _.ASTE
          </h1>
        <h1 className="ml-20">
          RISK
        </h1>
        <div className="hidden">
          <span className="">Portfolio</span>
          <span className="">About</span>
          <span>Social</span>
        </div>
      </div>
      <div>
        <div className="w-full h-0 left-0 absolute pb-53">
          <iframe
            title="mainpage"
            className="border-0 -top-30 -right-14 w-full h-full absolute"
            src="//cdn.iframe.ly/NfuhZxz?media=1"
            allow="encrypted-media *">
          </iframe>
        </div>
      </div>
      <script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
      <div className="z-10 mt-16">
        <div className="flex flex-row justify-center font-sans text-4xl">
          <h3 className="">Welcome</h3>
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
