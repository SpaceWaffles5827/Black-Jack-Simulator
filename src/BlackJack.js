import { useState, useEffect } from "react"
import Card from "./Card"
import Deck from "./Deck"
import Shoe from "./Shoe"
import Table from "./Table"
import HomePage from "./HomeContent"

var canHit = false
var canStand = false
var handOver = false


function BlackJack() {
  const NUMBER_OF_DECKS_IN_SHOE = 6
  const [shoe, setShoe] = useState([])
  const [dealersHand, setDealersHand] = useState([])
  const [playersHnad, setPlayersHand] = useState([])
  const [chipCount, setChipCount] = useState(1000)
  const [betAmount,setBetAmount] = useState()

  useEffect(() => {
    console.log("mounted");
    fiillTheShoe()
  }, []);


  function createDefaultDeck(){
    let defaultDeck = []
    const pointValue = [1,2,3,4,5,6,7,8,9,10,10,10,10]
    const ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",]
    const suits = ["C","D","H","S"]

    var counter = 1
    for(let i = 0; suits.length > i; i++){
      for(let x = 0; ranks.length > x; x++){
        defaultDeck = defaultDeck.concat({ranks: ranks[x], suits: suits[i], photoId: (counter) + ".png",
        pointValue: pointValue[x], cardVisable: true })
        counter++
      }
    }
    return defaultDeck
  }

  function shuffleDeck(arr){
    let randomNumber
    for(var i = 0;i < arr.length-1; i++){
      arr = swapCards(arr, i,Math.floor((Math.random() * arr.length-1) + 1))
    }
    return arr
  }

  function swapCards(arr, index1,index2){
    let tempVariable
    tempVariable = arr[index1]
    arr[index1] =  arr[index2]
    arr[index2] = tempVariable
    
    return arr
  }

  function generateShoe(){
    var theShoe = []
    for(var i = 0;i<NUMBER_OF_DECKS_IN_SHOE;i++){
      theShoe=theShoe.concat(shuffleDeck(createDefaultDeck()))
    }
    shuffleDeck(theShoe)
    return theShoe
  }

  function fiillTheShoe(){
    setShoe(generateShoe())
  }

  function dealerDraw(){
    setDealersHand(dealersHand.concat(shoe[shoe.length-1]))
    shoe.pop()
    setShoe(shoe)
  }
  function playerDraw(){
    setPlayersHand(playersHnad.concat(shoe[shoe.length-1]))
    shoe.pop()
    setShoe(shoe)
  }
  
  function dealGame(){
    handOver = false
    canStand = true
    canHit = true
    var newPlayersHand =[]
    var newDealersHand =[]
    newPlayersHand = newPlayersHand.concat(shoe[shoe.length-1])
    shoe.pop()
    newDealersHand = newDealersHand.concat(shoe[shoe.length-1])
    shoe.pop()
    newPlayersHand = newPlayersHand.concat(shoe[shoe.length-1])
    shoe.pop()
    shoe[shoe.length-1].cardVisable = false
    newDealersHand = newDealersHand.concat(shoe[shoe.length-1])
    shoe.pop()
    setPlayersHand(newPlayersHand)
    setDealersHand(newDealersHand)
  }

  function stand(){
    handOver = true
    canHit = false
    canStand = false
    var newDealersHand =[]
    newDealersHand = dealersHand.concat()
    newDealersHand[1].cardVisable=true
    while(getHandSum(newDealersHand)<17){
      newDealersHand = (newDealersHand.concat(shoe[shoe.length-1]))
      shoe.pop()
    }
    
    if(getHandSum(newDealersHand)>21){
      setChipCount(chipCount+100)
    }
    if(getHandSum(newDealersHand)<21){
      if(getHandSum(newDealersHand)>getHandSum(playersHnad)){
        setChipCount(chipCount-100)
      }
      if(getHandSum(newDealersHand)<getHandSum(playersHnad)){
        setChipCount(chipCount+100)
      }
    }
    
    setDealersHand(newDealersHand)
  }

  function hit(){
    setPlayersHand(playersHnad.concat(shoe[shoe.length-1]))
    shoe.pop()
    setShoe(shoe)
  }

  function getHandSum(obj){
    var sum = 0
    {obj.map((card) => (
      sum += card.pointValue
    ))}
    return sum
  }

  function didPlayerBust(){
    if(getHandSum(playersHnad)>21){
      if(!handOver){
      setChipCount(chipCount-100)
      }
      handOver = true
      return true
    }
    else{
      return false
    }
  }

  function whoWon(){
    if(getHandSum(playersHnad)==21 && !handOver){
      stand()
    }
    if(handOver){
      if(getHandSum(playersHnad)>21){
        return <h1>Player Bust</h1>
      }
      if(getHandSum(dealersHand)>21){
        return <h1>Dealer Bust, players wins</h1>
      }
      if(getHandSum(dealersHand)<=21){
        if(getHandSum(dealersHand)>getHandSum(playersHnad)){
          return <h1>Dealer wins</h1>
        }
        if(getHandSum(dealersHand)<getHandSum(playersHnad)){
          return <h1>Player wins</h1>
        }
        if(getHandSum(dealersHand)==getHandSum(playersHnad)){
          return <h1>Push</h1>
        }
      }
    }
    else{
      return <h1>-------------</h1>
    }
  }


  return (
    <div className="BlackJack">
      <h1>Black Jack</h1>
      <Table shoe={shoe} dealersHand={dealersHand} playersHnad={playersHnad}></Table>
      <button onClick={dealGame}>Deal Game</button>
      <button onClick={stand} disabled={didPlayerBust() || !canStand}>Stand</button>
      <button onClick={hit} disabled={didPlayerBust() || !canHit}>Hit</button>
      {whoWon()}
      <h1>{chipCount}</h1>
    </div>
  );
}

export default BlackJack;


