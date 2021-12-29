import { PlusCircleIcon, CheckCircleIcon } from '@heroicons/react/outline'

export function OrizTimeLine( props ){
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

export function VertTimeLine( props ){
  return (
    <div className={"flex flex-col " + props.className}>
      {
        props.children.map((child, i, arr) => (
          <div className="flex flex-row gap-8">
            <div className="flex flex-col items-center w-0">
              {(i + 1 != arr.length) ? <PlusCircleIcon className="flex-shrink-0 h-6 stroke-current text-blue-600 scale-110" /> : <CheckCircleIcon className="flex-shrink-0 h-6 stroke-current text-blue-600 scale-110" />}
              <div className="w-0.5 h-full bg-blue-600"/>
            </div>
            <div className="pb-4"> {/* padding because the blue line has to touch the next section */}
              {child}
            </div>
          </div>
        ))
      }
    </div>
  )
}

/*
SVG stolen from https://github.com/home/
<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 110 142" class="d-none d-md-block position-relative home-branch offset-n1"><path d="m1-8c0 75 108 75 108 150" stroke-width="2" vector-effect="non-scaling-stroke"></path></svg>
*/

export function MergeLineSVG( props ){
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 110 142">
      <path d="m1-8c0 75 108 75 108 150" stroke-width="2" vector-effect="non-scaling-stroke" />
    </svg>
  )
}

export function TreeTimeLine( props ){
  const pairs = props.tree.map((elem) => {
    var isSubTree, mapped
    
    if( Array.isArray(elem) )
      mapped = (<TreeTimeLine tree={elem}/>)
    else
      mapped = elem
    
    isSubTree = (mapped.type == TreeTimeLine)
    
    return [mapped, isSubTree]
  })
  
  return (
    <div className={"flex flex-col " + props.className}>
      {
        pairs.map((pair) => (
          <div className="flex flex-row gap-16">
            <div className="flex flex-col w-0 items-center">
              {pair[1] ? null : <PlusCircleIcon className="flex-shrink-0 h-6 stroke-current text-blue-600 scale-110" />}
              <div className="w-0.5 h-full bg-blue-600"/>
            </div>
            {
              pair[1] ? (
                <div className="">
                  <MergeLineSVG className="w-16 h-24 text-blue-600 stroke-current -translate-x-16"/>
                  {pair[0]}
                  <MergeLineSVG className="w-16 h-24 text-blue-600 stroke-current -translate-x-16 -scale-y-100"/>
                </div>
              ) : (
                <div className="pb-4"> {/* padding because the blue line has to touch the next section */}
                  {pair[0]}
                </div>
              )
            }
          </div>
        ))
      }
      <div className="flex flex-col w-0 items-center">
        <CheckCircleIcon className="flex-shrink-0 h-6 stroke-current text-blue-600 scale-110" />
      </div>
    </div>
  )
}

