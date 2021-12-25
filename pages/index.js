import Card from '../components/Card.jsx'
import RandomPic from '../components/RandomPic.jsx'
import TimeLine from '../components/TimeLine.jsx'
import { PlusCircle, SearchCircle } from '@heroicons/react/outline'

export default function Home() {
  return (
    <div className="main font-sans scroll-smooth flex flex-col items-center bg-white"> {/* page container */}
    
      {/* intro section */}
      <div className="w-full h-[80vh] flex flex-col bg-gradient-to-br from-green-500 to-blue-500">
        <div className="flex flex-row justify-center items-center w-full h-[65vh]">
          <div className="max-w-2xl">
            <h1 className="w-full text-center pb-8 text-white text-8xl font-bold">YT questions</h1>
            <p className="text-white opacity-75 text-lg">
              Youtube is one of the best platforms for educational content but it was not made for this.
              This is why we have decided to make this browser extension to help you actually remember
              what you just saw, and not just forget about it five minutes later.
            </p>
          </div>
        </div>
        {/* https://getwaves.io/ */}
        <img className="translate-y-px absolute h-[15vh] top-[65vh] w-full" src="/wave.svg" /> {/* DO NOT TOUCH ANYTHING IN THIS LINE */}
      </div>
      
      {/* explaining section */}
      <h2 className="text-6xl w-full px-10 pt-6 pb-4">How does YT questions work?</h2>
      <TimeLine className="w-full p-16">
        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540">
          <div className="text-2xl">
            When you watch a youtube video, a "questions" button will appear below your video.
            Then, the video's subtitles will be sent to <a href="https://openai.com/">GPT3</a>,
            a newral network trained on <a href="https://en.wikipedia.org/wiki/GPT-3#Training_and_capabilities">the entire internet</a>.
            In response you will recieve 5 multiple-choice questions about the specific video you watched.
          </div>
        </div>

        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540/">
          <div className="text-2xl">
            After that, you will answer each question in order. After you answer each question you will find out
            if you answer was right. If you get a question wrong the extension will also tell you the correct
            answer.
          </div>
        </div>

        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540/">
          <div className="text-2xl">
            When the quiz is over you will get your score and a report of your answers.
          </div>
        </div>
      </TimeLine>
    </div>
  )
}
