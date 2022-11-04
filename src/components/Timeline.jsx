import React from "react";
import { Link } from 'react-router-dom';
import {DefaultButton} from '../components/Button';
import SlackLogo from '../assets/slack.png';
import GithubLogo from '../assets/Icon.png';
import Jimmie from '../assets/jimmie.png';
import { Footer } from "./Footer";

const Timeline = () => {
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
          <a href=" http://books.zuri.team" title="This is where you find books about design and coding" id="books">
            <DefaultButton id="books">Zuri Books</DefaultButton>
          </a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=folajimi" title="Learn python from the best hands" id="book__python">
            <DefaultButton id="book__python">Python Books</DefaultButton>
          </a>
          <a href="https://background.zuri.team/" title="Check your fav's background" id="pitch">
            <DefaultButton id="pitch">Background Check for Coders</DefaultButton>
          </a>
          <a href="https://books.zuri.team/design-rules" title="Get hand on rules for coding" id="book__design">
            <DefaultButton id="book__design">Design Books</DefaultButton>
          </a>
          <Link to="/contact">
            <DefaultButton id="contact">Contact</DefaultButton>          
          </Link>
        </div>
        <div className="flex justify-center gap-20 mt-10 mb-20">
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
        <Footer />
      </div>
    </div>
     );
}
 
export default Timeline;