import Card from "./Card";

function Shoe({shoe}) {

    return (
      <div className="Shoe">
        {shoe.map((card) => (
              <Card card={card}></Card>
            ))}
      </div>
    );
  }
  
  export default Shoe;
  
  