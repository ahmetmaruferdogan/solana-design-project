import './Block.css';
import BlockNumber from "./BlockNumber";
import DataLarge from "./DataLarge";
import Data from "./Data";

const Block = ({block, nonce, data, img, prev, hash}) =>  {

  return (
    <div className={"blockchain"}>
      <div className="block">
        <BlockNumber number={block} />
        <Data name={"Nonce"} text={nonce} />
        <DataLarge name={"Data"} text={data} img={img}/>
        <Data name={"Prev"} text={prev}/>
        <Data name={"Hash"} text={hash}/>
      </div>
    </div>
  );
}

export default Block;
