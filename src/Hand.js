import Card from "./Card";
import "./Hand.css"

function Hand({hand}) {

function getHandSum(){
  var sum = 0
  {hand.map((card) => (
    sum += card.pointValue
  ))}
  return sum
}

    return (
      <div className="Hand">
        {hand.map((card) => (
          <Card card={card}></Card>
        ))}
      </div>
    );
  }
  
  export default Hand;
  