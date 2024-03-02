import './Block.css';

const Data = ({name, text}) =>  {
  return (
    <div className={"block-element"}>
      <div className={"area-name"}>{name}</div>
      <div className={"area-block"}>
        <text className={"text-design"}>{text}</text>
      </div>
    </div>
  );
}

export default Data;
