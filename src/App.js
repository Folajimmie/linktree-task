import React from "react";
import {DefaultButton} from '../src/components/Button';
import SlackLogo from '../src/assets/slack.png';
import GithubLogo from '../src/assets/Icon.png';
import I4GLogo from '../src/assets/I4G.png';
import ZuriLogo from '../src/assets/Zuri.png';
import Jimmie from '../src/assets/jimmie.png';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="w-[80%]">
        <header>
          <div className="w-36 h-36 mx-auto pb-10 flex justify-center border rounded-full">
            <img src={Jimmie} alt="jimmie logo" className="object-contain w-[100%] h-28"/>
          </div>
          <p className="text-center text-headline-4 mt-5">Olufolajimmie</p>
          <p className="text-center text-headline-4 hidden">Folajimi</p>
        </header>
        <div className="flex flex-col gap-3 mt-10">
          <a href="https://training.zuri.team/">
            <DefaultButton>Zuri Team</DefaultButton>
          </a>
          <a href=" http://books.zuri.team">
            <DefaultButton>Zuri Books</DefaultButton>
          </a>
          <a href="https://books.zuri.team/">
            <DefaultButton>Python Books</DefaultButton>
          </a>
          <a href="https://background.zuri.team/">
            <DefaultButton>Background Check for Coders</DefaultButton>
          </a>
          <a href="https://books.zuri.team/design-rules">
            <DefaultButton>Design Books</DefaultButton>
          </a>
        </div>
        <div className="flex justify-center gap-20 mt-10">
          <div>
            <a href="https://app.slack">
              <img src={SlackLogo} alt="slack logo"/>
            </a>
          </div>
          <div>
          <a href="https://github.com/Folajimmie">
              <img src={GithubLogo} alt="github logo"/>
            </a>
          </div>
        </div>
        <footer className="mt-10 flex justify-between">
          <div>
          <img src={ZuriLogo} alt="zuri logo"/>
          </div>
          <div>
            <p className="text-center text-gray-500">HNG Internship 9 Frontend Task</p>
          </div>
          <div>
          <img src={I4GLogo} alt="ngressive logo"/>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
