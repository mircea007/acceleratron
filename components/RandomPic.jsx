export default function RandomPic( props ) {
  return (
    <img src={"https://picsum.photos/" + props.width + "/" + props.height + "/"} alt="randompic" className={props.className}/>
  );
}