import React, { Component } from 'react';
import { css } from 'emotion';

export default class News extends Component {
    render() {
        return (
            <div className={main}>
                <div className={newsTop}>
                    <p>Community News</p>
                </div>

                <div className={newsBottom}>
                    <p><b>--- 29 April 2020 ---</b></p>
                    <p style={{ marginTop: 0 }}>Burn it all down! Today was spent double checking code, final debugging, and cross t's and dotting i's on AWS. The final cherry on top for the project was to add SSL security certification to the site. After following the instructions provided, surprise surprise, it didn't work. It would come to my attention that the operating system on my AWS server had mysteriously updated to ver 20.2 instead of 18.04 that was originally installed. One would think this would not be a big deal, better in fact. Who doesn't want the latest version of something? THIS GUY! Some Google-ing taught me that a whoooooole bunch of other developers faced the same issue I was when their server's Ubuntu OS was updated to 20.X. What does that mean? Burn it all down and start again.</p>

                    <p>It actually wasn't that bad. During our time learning AWS, we've done numerous practice labs building basic Virtual Private Cloud networks from scratch. It was actually good training, which I'm always down for. After the server was rebuilt and the site reloaded onto it, the SSL security certs were installed and things were good to go. Mike D. was able to find out why the server was auto updating. Thanks to him and his research, the auto-update code was corrected and things are looking good!</p>

                    <p><b>--- 27 April 2020 ---</b></p>
                    <p style={{ marginTop: 0 }}>Happy Live Day! Today, the ver 1.0 build of the site was deployed on AWS and went live today. However, one thing I learned about web development is that a project is never truly done. With the site up and out in the world. a Profile section was created that allows a user to view their account details and edit them if they wish.</p>

                    <p><b>--- 26 April 2020 ---</b></p>
                    <p style={{ marginTop: 0 }}>Sunday funday… riiiiiight. All in all, I got a lot of work done on the site today. But for whatever reason, I was running into a major issue getting the user sign in functionality working. Everything was coming back from the server side without an issue. However, when I went to console.log the results of a successful login, my variable came back as undefined. After some digging around, I found the bug. After the dispatch middleware updated my state in Redux, I never returned any data to the function call. When my code went to see what came back, obviously there was nothing there.</p>

                    <p>It was like I gave you some ham, cheese, and bread and asked you to make me a sandwich, but never said to bring it to me when you were done. All the while, I’m sitting at the dining room table, wondering where my sandwich is, you’re upstairs taking a nap because your task has been completed, and the sandwich is sitting alone on the kitchen counter! Let this be a lesson that sometimes your bug can be as simple as a lonely sandwich ;)</p>
                    <br /><br />

                    <p><b>--- 25 April 2020 ---</b></p>
                    <p style={{ marginTop: 0 }}>Stylin’ and profilin’, WOOOOOOO!!! The immortal words of Mr. Ric Flair were the driving force behind today’s work. The biggest update I wanted to make on the site was a much, MUCH better design. I’ve never had quite the eye for design, but I knew I could make it better than what it used to be. The Home component was the main canvas I used to create something that looked better than a MySpace home page circa 2000-and-late.</p>

                    <p>One feature I am most proud of is parallax scrolling. When done correctly, it gives the illusion that content divs scroll over a background image and change it to a new background image as the user continues to scroll down the page. After doing a little bit of research, it turns out this effect can be achieved with about 5 CSS lines of code. I would urge you all to learn more about it as it brings a subtle dramatic effect to your page.</p>
                    <br /><br />

                    <p><b>--- 24 April 2020 ---</b></p>
                    <p style={{ marginTop: 0 }}>It has been almost a year at Code Immersives NYC. My tenure there comes to an end this Wednesday, the 29th of April. As per the school’s curriculum, a Term 3 final project needs to be completed by every student in order to graduate. A classmate of mine, Mike, had a brilliant concept for a website that teaches home owners to transform normal, everyday household objects into smart devices (I highly recommend checking it out at <a href="http://myhomejs.com" target="__blank">HomeJS</a>). I partnered with him to bring the site to life. After a few weeks, the initial version of the site was complete and I found myself with some extra time.</p>

                    <p>Rather than simply meander to the finish line, I decided to recreate my Term 2 project, Tales from Swiftfell. TFS is a browser-based, 16-bit Role Playing Game, harkening back to the tester-year of Super Nintendo gaming. As this type of entertainment was quite impactful in my childhood years, I figured this would be a great opportunity to rebuild the app from (almost) the ground up using React, Redux, and modern coding techniques and framework.</p>
                    <br /><br />
                </div>
            </div>
        )
    }
}

const main = css`
    width: 40vw;
    height: 70vh;
    background-color: rgba(225, 225, 225, 0.5);
    border: 6px double darkblue;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10% 90%;
    overflow-y: scroll;
`
const newsTop = css`
    grid-area: 1 / 1 / span 1 / span 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: fantasy;
    font-weight: bold;
    font-size: 1.5em;
    border-bottom: 2px dotted black;
`
const newsBottom = css`
    grid-area: 2 / 1 / span 1 / span 1;
    display: flex;
    flex-direction: column;
    padding: 5% 5% 0 5%;
`