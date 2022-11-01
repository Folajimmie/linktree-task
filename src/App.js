import React from "react";
import {DefaultButton} from '../src/components/Button';
import SlackLogo from '../src/assets/slack.png';
import GithubLogo from '../src/assets/Icon.png';
import I4GLogo from '../src/assets/I4G.png';
import ZuriLogo from '../src/assets/Zuri.png';
import Jimmie from '../src/assets/jimmie.png';

function App() {
  return (
    <div className="flex justify-center items-center h-[100%] bg-background">
      <div className="w-[80%]">
        <header>
          <div className="w-36 h-36 mx-auto mt-10 pb-10 flex justify-center border rounded-full" id="profile__img">
            <img src={Jimmie} alt="jimmie logo" className="object-contain w-[100%] h-28" id="profile__img"/>
          </div>
          <p className="text-center text-headline-4 mt-5" id="twitter">Olufolajimmie</p>
          <p className="text-center text-headline-4 hidden" id="slack">Folajimi</p>
        </header>
        <div className="flex flex-col gap-3 mt-10">
          <a href="https://training.zuri.team/" id="btn__zuri">
            <DefaultButton id="btn__zuri">Zuri Team</DefaultButton>
          </a>
          <a href=" http://books.zuri.team" id="books">
            <DefaultButton id="books">Zuri Books <br/> <sub> This is where you find books about design and coding.</sub></DefaultButton>
          </a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=folajimi" id="book__python">
            <DefaultButton id="book__python">Python Books <br/> <sub>Learn python from the best hands.</sub></DefaultButton>
          </a>
          <a href="https://background.zuri.team/" id="pitch">
            <DefaultButton id="pitch">Background Check for Coders <br/> <sub>Check your fav's background</sub></DefaultButton>
          </a>
          <a href="https://books.zuri.team/design-rules" id="book__design">
            <DefaultButton id="book__design">Design Books<br/><sub>Get hand on rules for coding.</sub></DefaultButton>
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
