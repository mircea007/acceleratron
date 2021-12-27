// https://getwaves.io/
export default function WaveSplit( props ){
  return (
    <svg className={props.className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill={props.fill || "#000"} fill-opacity="1" d="M0,64L60,106.7C120,149,240,235,360,250.7C480,267,600,213,720,176C840,139,960,117,1080,138.7C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
    </svg>
  );
}