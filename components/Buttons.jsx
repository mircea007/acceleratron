import { ArrowCircleRightIcon, CodeIcon } from '@heroicons/react/solid'

export function DownloadButton( props ){
  return (
    <div target="_blank" href="https://chrome.google.com/webstore/category/extensions" className={"max-w-max max-h-max relative group " + props.className} >
      <div className="absolute transition-all duration-1000 group-hover:duration-200 opacity-75 group-hover:opacity-100 inset-0 blur-md brightness-105 group-hover:brightness-125 animate-tilt bg-gradient-to-br from-green-500 to-blue-500" />
      <button className="relative overflow-hidden z-10 text-white rounded-xl flex flex-row items-center">
        <a href={props.download} className="p-4 transition bg-blue-600 hover:bg-blue-500 hover:scale-105">Download for {props.browser}</a>
        <a href={props.github}   className="p-4 transition flex flex-row gap-4 bg-gray-800 hover:bg-black hover:scale-105 font-mono">v{props.version}<img className="h-6" src="/github.svg" alt=""/></a>
        <a href={props.download} className="p-4 transition bg-lime-600 hover:bg-lime-500 hover:scale-105"><ArrowCircleRightIcon className="h-6"/></a>
      </button>
    </div>
  );
}

export function SimpleButton( props ){
  return (
    <a className={"bg-gray-500 transition hover:bg-gray-600 p-4 rounded-xl overflow-hidden text-white flex flex-row gap-4 " + props.className} href={props.link}>
      {props.children}
      <ArrowCircleRightIcon className="h-6"/>
    </a>
  )
}
