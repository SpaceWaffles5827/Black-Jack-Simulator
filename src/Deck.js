import Card from "./Card";
import "./Deck.css"

function Deck({deck}) {
    return (
      <div className="Deck">
        {deck.map((card) => (
          <Card card={card}></Card>
        ))}
      </div>
    );
  }
  
  export default Deck;
