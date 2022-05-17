import "./Card.css"
function Card({card}) {

    function invisableCard(){
      if(!card.cardVisable){
        return <img src={"./cards/0.png"} width={100}></img>
      }
      else{
        return <img src={"./cards/" + card.photoId} width={100}></img>
      }
    }
    return (
      <div className="Card">
        {invisableCard()}
      </div>
    );
  }
  
  export default Card;
  