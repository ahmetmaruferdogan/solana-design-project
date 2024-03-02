import './Block.css';
const BlockNumber = ({number}) => {

  return (
    <div className={"block-element"}>
      <div className={"area-name"}>Block</div>
      <div className={"area-block"}>
        <span className={"span-design"}>#</span>
        <text className={"text-design"}>{number}</text>
      </div>
    </div>
  );
}

export default BlockNumber;
