class Form{
constructor(){

}
display(){
var title = createElement('h2')
title.html("Car Racing Game")
title.position(width/2,10)


var input = createInput("Enter Your Name")
input.position(width/2,height/2 -100)


var button = createButton("PLAY")
button.position(width/2 +50,height/2)

var greeting = createElement('h2')

button.mousePressed(()=>{
  input.hide()
  button.hide()

  var name = input.value()



player = new Player();
playerCount+= 1
player.update(name)

player.updateplayercount(playerCount)
    greeting.position(width/2,height/2)
    greeting.html("Welcome")
    
})






}






}