import Deck from "./Deck";
import Hand from "./Hand";
import "./Table.css"

function Table({shoe,dealersHand,playersHnad}) {
    return (
      <div className="Table">
            <div className="shoe">
                <Deck deck={shoe}></Deck>
            </div>
            <h1>Dealer:</h1>
            <div className="dealersHand">
                <Hand hand={dealersHand}></Hand>
            </div>
            <h1>Player:</h1>
            <div className="playersHand">
                <Hand hand={playersHnad}></Hand>
            </div>
        
        
      </div>
    );
  }
  
  export default Table;
  