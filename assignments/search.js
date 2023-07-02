const searchData = {
  
  "aquarium" : `
    Aquarium Learn about arrays of objects by creating an aquarium. Arrays in Java are data structures that hold multiple objects in one memory location. They can hold a fixed number of one type of object or variable, but that object can be almost anything. In this project, we will practice manipulating arrays and accessing elements using methods from the Array class. You are the owner of an aquarium with a fixed number of tanks, you also happen to be a little indecisive and like to change which fish go in what tanks. Think of the aquarium as an array, each tank represents an index, and the fish are the objects.
     java 
    
    
     Arrays  Classes  Loops  Booleans and conditionals  NonBlockingGame class 
     NonBlockingGame  NamedColor  NamedSymbol 
  `,
  
  "emoji-builder" : `
    Emoji Builder Create a custom emoji using the NonBlockingGame class. Students use their undertanding of 2D arrays to create an emoji using the BRIDGES NonBlockingGame class. This project is indended to build student comfort with BRIDGES, so it is ungraded and there is no rubric.
     java 
     python 
     2d grid 
     2D arrays  Row-major order  Using API documentation 
     NamedColor  NonBlockingGame 
  `,
  
  "shape-collection" : `
    Shape Collection Draw circles, rectangles, polygons, and text. Draw circles, rectangles, polygons, and text with the Bridges SymbolCollection class.
     java 
     python 
     vector graphics 
     Reading source code  API usage  Creating objects 
     Bridges  SymbolCollection  Symbol  Circle  Rectangle  Polygon  Polyline  Text 
  `,
  
  "pattern-builder" : `
    Pattern Builder Create colorful patterns with the ColorGrid Class. Using the BRIDGES ColorGrid class, students solve seven pattern-creation challenges by applying knowledge of conditionals, nested loops, and 2D array traversal.
     java 
    
     2d grid 
     Nested loops  2D arrays  Conditionals 
     Bridges  ColorGrid  Grid 
  `,
  
  "square-fill" : `
    Square Fill Create random layered squares using the ColorGrid class. The BRIDGES library has a class called ColorGrid that allows you to represent an image as a grid of colored cells. The programmer defines the number of rows, number of columns, and default color. In this project, you will use iteration to create layers of squares until the entire grid is filled.
     java 
    
     2d grid 
     Nested loops  2D arrays  Conditionals 
     Bridges  ColorGrid  Color 
  `,
  
  "gamebasics-1" : `
    GameBasics I Display a custom message and alter it with keyboard input. The BRIDGES library has a class called NonBlockingGame that allows you to create simple games based on board grids. In this project, students will use the NonBlockingGame class to create a grid that displays a message, one letter per cell. This is not a game yet, but develops prerequisite understanding.
     java 
     python 
     game  2d grid 
     2D arrays  API usage (NonBlockingGame class, NamedSymbol enum, NamedColor enum)  Inheritance  Abstract classes 
     NonBlockingGame  GameBase  NamedColor  NamedSymbol 
  `,
  
  "gamebasics-2" : `
    GameBasics II Create a player that can be moved around the game board with keyboard input. In this second game basics project, students use the NonBlockingGame class to create a player that can be moved around the screen with the arrow keys.
     java 
     python 
     game  2d grid 
     2D arrays  API usage (NonBlockingGame class, NamedSymbol enum, NamedColor enum)  Event-driven programming 
     NonBlockingGame  GameBase  NamedColor  NamedSymbol 
  `,
  
  "bugstomp" : `
    BugStomp Make a whack-a-mole style game where the player stomps bugs to increase their score. BugStomp is a whack-a-mole style game where you use the arrow keys to move your player and attempt to touch or "stomp" the bug. The bug flashes to a random location on the board after a set number of frames. For each bug stomped, the score increases until the player eventually wins. In this project, you will implement the BugStomp game with BRIDGES.
     java 
    
     game  2d grid 
     Random class  API usage  Arrays  Nested loops  Conditionals 
     NonBlockingGame  GameBase  NamedColor  NamedSymbol 
  `,
  
  "rainbow-snake" : `
    Rainbow Snake Create a colorful Snake game. Use the arrow keys to move a snake around the board to eat apples. Try to eat as many apples as possible. It will get more difficult the longer you play, with the snake growing in size for each apple eaten.
     java 
     python 
     game  2d grid 
     API usage  Arrays  Loops  Conditionals  ArrayLists  Mod 
     NonBlockingGame  GameBase  NamedColor  NamedSymbol 
  `,
  
  "tron" : `
    Tron Create a two-player game that resembles the movie Tron. In this project, you will use the NonBlockingGame class to make a two-player video game. Each player controls a snake that gets longer and longer, and when one player crashes into something, the other person wins.
     java 
    
     game  2d grid 
     ArrayLists  Classes  Loops  Booleans and conditionals  NonBlockingGame class 
     NonBlockingGame  GameBase  NamedColor 
  `,
  
  "monster-adventure" : `
    Monster Adventure Player collects fruit while avoiding the monster. Monster Adventure is a type of collecting and avoiding game, where the player will be collecting fruits from the map and avoiding the monster, which will follow the player. The player will use the arrow keys to control the character‘s moves around the map. The score will increase until the player eventually wins.
     java 
    
     game  2d grid 
     Methods  Classes  Loops  Booleans and conditionals  NonBlockingGame class  2d arrays 
     NonBlockingGame  GameBase  NamedColor  NamedSymbol 
  `,
  
  "chaos-game" : `
    Chaos Game Create fractal designs using a chaos game algorithm. In this project, students will create fractal designs using a chaos game algorithm. They will learn about Java record classes and will use the BRIDGES GraphAdjList class for creating visualisations.
     java 
    
    
     Record classes  Iteration  API usage 
     Bridges  GraphAdjList  Element 
  `,
  
  "game-of-life" : `
    Game of Life Create an interactive cellular automaton. The Game of Life is a two-dimensional cellular automaton invented by John Conway in 1970. The state of each individual cell is determined by simple rules, but patterns of hundreds of cells working together can exhibit complex behavior. In this project, students will create an interactive Game of Life animation using the BRIDGES Java API.
     java 
    
     2d grid 
     Cellular automata  Nested loops  2D arrays  Conditionals  Methods  API usage 
     GameBase  NonBlockingGame  NamedColor 
  `,
  
  "sudoku" : `
    Sudoku Create a program for solving sudoku puzzles. Sudoku is a puzzle game played on a 9 by 9 grid. The objective is to fill the grid with numbers such that each row, column, and 3 by 3 subgrid contains every number from 1 to 9. The game starts with the grid partially completed so that there is only a single solution. In this project, you will create your own sudoku game using the BRIDGES Java API.
     java 
    
     game  2d grid 
     Nested loops  2D arrays  Booleans and conditionals  Reading source code  API usage 
     NamedColor  NamedSymbol 
  `,
  
  "patterns-in-song-lyrics" : `
    Patterns in Song Lyrics Detect repetition in song lyrics and generate a graphical representation of the pattern. In this project, students access song lyrics using BRIDGES and check for repetition. They display the repetition with the ColorGrid class, creating patterns like the following:
     java 
     python 
     real-world data  parsing 
     API usage  String processing  ColorGrid (BRIDGES class for pixel-based graphics)  Loops  Conditionals 
     Bridges  DataSource  Color  ColorGrid  Song 
  `,
  
  "mountain-paths" : `
    Mountain Paths Given elevation data, find the path of least elevation change using a greedy algorithm. In this project, students read elevation data into a 2D array, compute the path of least elevation change using a greedy algorithm, and visualise the path with the ColorGrid class.
     java 
    
     real-world data  path finding 
     Command line arguments  Traversing 2D arrays  Reading files  Greedy algorithm  ColorGrid (BRIDGES class for pixel-based graphics) 
     Bridges  ColorGrid  Color 
  `,
  
  "earthquake-linked-list" : `
    Earthquake Linked List Generate a singly linked list containing real-time earthquake data. Students create a linked list using real-time earthquake data from the US Geological Survey. This project involves reading source code and arranging code segments in the correct order.
     java 
     python 
     real-world data  linked list 
     Linked lists  Reading source code  API usage  Element class  EarthquakeUSGS class 
     Bridges  Element  EarthquakeUSGS  SLelement 
  `,
  
  "us-cities-map" : `
    US Cities Map Create a Map of Cities in the US Use information stored in the bridges library to create a map of the cities in the United States. You will learn the basics of how hashmaps work as well as creating graphs in bridges. 
     java 
    
     real-world data 
     City Class  Hashmap  Element Class  GraphAdjList 
     Bridges  Element  GraphAdjList  City 
  `,
  
  "maze-generator" : `
    Maze Generator Build solvable mazes with a random-branching algorithm. In this project, students use an algorithm to randomly generate mazes, and display them with the BRIDGES ColorGrid class. The maze is stored as a two-dimensional array of cells. It starts with a single cell in the center, and then branches randomly until the entire grid is filled.
     java 
    
     2d grid 
     Enumerations  Arraylists  2D arrays  Nested loops  API usage  Methods  Conditionals 
     Bridges  ColorGrid  Color 
  `,
  
  "interpreter" : `
    Interpreter Create your own programming language. In this project, students will create an interpreter for a simple programming language. The interpreter will parse a file into a list of commands, and then execute the commands, using BRIDGES to create circles, polygons, and lines.
     java 
    
     vector graphics  parsing 
     Command line arguments  Try and catch blocks  Reading files  StringBuilder class  String parsing  Arraylists  BRIDGES SymbolCollection API 
     Bridges  SymbolCollection  Symbol  Circle  Rectangle  Polygon  Polyline  Text 
  `,
  
  "street-map" : `
    Street Map Use Dijkstra's algorithm to find the shortest path across a city. A graph is a mathematical object consisting of connections (edges) between points (vertices). Graphs are used fairly often in computer science, because they can model many of the networks that arise from real-world data. In this project, we will use a technique called Dijkstra's algorithm to find the shortest path across a city.
     java 
    
     real-world data  path finding 
     Graphs  Dijkstra's algorithm  Records  Nested classes  Hash-maps and hash-sets  API usage 
     Bridges  Color  Element  GraphAdjList  Edge  DataSource  OsmVertex  OsmEdge 
  `,
  
}

function normalise(str) {
  return str.trim().replace(/\s+/g, " ").toLowerCase()
}

for(const key in searchData) {
  searchData[key] = normalise(searchData[key])
}

document.getElementById("search").oninput = function() {
  const terms = normalise(this.value)
  for(const key in searchData) {
    document.getElementById(key).style.display =
      searchData[key].includes(terms)
      ? '' : 'none'
  }
}
