import './Block.css';

const DataLarge = ({name, text, img}) =>  {

  return (
    <div className={"block-element"}>
      <div className={"area-name"}>{name}</div>
      <div className={"area-block-1"}>
        <p className={"text-design"}>{text}</p>
        <img src={img} alt="Chain"/>
      </div>
    </div>
  );
}

export default DataLarge;
