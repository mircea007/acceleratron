import { PlusCircleIcon, CheckCircleIcon } from '@heroicons/react/outline'

export default function TimeLine( props ){
  return (
    <div className={"grid grid-cols-3 gap-4 " + props.className}>
      {[
        props.children.map((child, i, arr) => (
          <div className="flex flex-row h-6 gap-2 items-center">
            {(i + 1 != arr.length) ? <PlusCircleIcon className="h-6 stroke-current text-blue-600" /> : <CheckCircleIcon className="h-6 stroke-current text-blue-600" />}
            <div className="h-0.5 w-full bg-blue-600"/>
          </div>
        )),
        props.children,
        props.children.map((child, i) => (
          <img className="rounded-md shadow-md" src={child.props.imgUrl} alt="screenshot"/>
        )),
      ].reduce((arrpart, newarr) => arrpart.concat(newarr), [])}
    </div>
  );
}
