const team = {
_players:[
    {firstName: 'pete' , lastName: 'wheeler' , age: 54},
    {firstName: 'steve' , lastName: 'smith' , age: 54},
    {firstName: 'brian' , lastName: 'richards' , age: 54}],

_games:[
    {opponent: 'Stratford', teamPoints:60 , opponentPoints:0 },
    {opponent: 'Sondon', teamPoints: 30 , opponentPoints: 0 },
    {opponent: 'Somebody' , teamPoints: 100 , opponentPoints: 0 }],

get players(){return this._players 
;},
get games(){return this._games;}
,

addPlayer(newFirstName, newLastName, newAge){
  let player = {
    firstName: newFirstName,
    lastName: newLastName, 
    age: newAge};
    this._players.push(player);
  },

addGame(newOpponent, newTeamPoints, newOpponentPoints){
  let game = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
  };
  this._games.push(game);
  },
totalGames(){
  let numberOfGames = this._games.length;
    console.log(numberOfGames);
    },
    
  //average points
averagePoints(){
  let points = 0;
  const pointsLength = this._games.length;
  for (let i= 0 ; i< pointsLength; i++){
    points += this._games[i].teamPoints;
    }
  return points / pointsLength;
}
  }
//console.log(team.players);
//console.log(team.games);
team.addPlayer('Bugs', 'Bunny', 76 );
team.addGame('Titans', 100 , 98);


console.log(team._players);
console.log(team._games);
team.totalGames();
console.log(team.averagePoints());
