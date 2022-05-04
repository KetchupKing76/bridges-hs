/*
  name                       -- name of assignment
  description                -- description on assignment page
  summary                    -- short description on course page

  imageCaption (optional)    -- caption of example output image
  descriptionHtml (optional) -- additional html after description
  studentHtml (optional)     -- additional html before student worksheets

  topics                     -- topics covered by assignment
  outcomes (optional)        -- intended learning outcomes of assignment

  studentFiles               -- student file names and urls
  scaffoldFiles              -- scaffold file names and urls

  teacherFiles (optional)    -- teacher file names
  solutionFiles (optional)   -- soltion file names
  otherResources (optional)  -- additional resource names and urls

  documentation              -- names of BRIDGES classes
                                (must be bridgesClass object keys)
*/

const assignment =
  { 'emoji-builder' :
      { name : 'Emoji Builder'
      , description : 'Students use their undertanding of 2D arrays to create an emoji using the BRIDGES NonBlockingGame class. This project is indended to build student comfort with BRIDGES, so it is ungraded and there is no rubric.'
      , summary : 'Create a custom emoji using the NonBlockingGame class.'
      , topics : [ '2D arrays', 'Row-major order', 'Using API documentation' ]
      , outcomes :
          [ { verb : 'Apply', outcome : 'Use understanding of rows and columns in order to create simple 2D pixel designs. (AP CS A Unit 8, VAR-2.F)' }
          , { verb : 'Apply', outcome : 'Use API documentation to figure out how to use Java library classes.' }
          ]
      , studentFiles :
          [ { name : 'Emoji Builder Student Worksheet', link : 'https://docs.google.com/document/d/17uc1W7pxf6pxbS_xacMSOayZuCbCsvwekh_pyVOwQrc/view' } ]
      , scaffoldFiles :
          [ { name : 'Emoji Builder Scaffold', link : 'https://docs.google.com/document/d/1wH1QiaUZTEQSi9EmTZg31bIqoMMKea8Ci1CVyq24Mrs/view' }
          , { name : 'EmojiBuilder.java', link : 'https://drive.google.com/file/d/16uNsdHGgIkgEFsYjcNOxyRBL9ma0xU6B/view' }
          ]
      , solutionFiles : [ 'EmojiBuilder.java' ]
      , documentation : [ 'NamedColor', 'NonBlockingGame' ]
      }

  , 'shape-collection' :
      { name : 'Shape Collection'
      , description : 'Create circles, rectangles, and polygons with the Bridges SymbolCollection class.'
      , summary : 'Draw circles, rectangles, polygons, and text.'
      , imageCaption : 'This image was created by using a for loop to generate 200 random circles.'
      , topics : [ 'Reading source code', 'API usage', 'Creating objects' ]
      , studentFiles :
          [ { name : 'Shape Collection Student Worksheet', link : 'https://docs.google.com/document/d/13HFtOq54klYDPdpFiMNSxq8r1ct2eW27ii68tzgKzik/view' } ]
      , scaffoldFiles :
          [ { name : 'Shapes.java', link : 'https://drive.google.com/file/d/1-Cxx-7ADuvfBi7NKBn4mrE2bLitVFaGj/view' } ]
      , teacherFiles : [ 'Shape Collection Worksheet Answer Key' ]
      , documentation : [ 'Bridges', 'SymbolCollection', 'Symbol', 'Circle', 'Rectangle', 'Polygon', 'Polyline', 'Text' ]
      }

  , 'pattern-builder' :
      { name : 'Pattern Builder'
      , description : 'Using the BRIDGES ColorGrid class, students solve seven pattern-creation challenges by applying knowledge of conditionals, nested loops, and 2D array traversal.'
      , summary : 'Create colorful rectangular patterns with the ColorGrid Class.'
      , topics : [ 'Nested loops', '2D arrays', 'Conditionals' ]
      , outcomes :
          [ { verb : 'Apply', outcome : 'Represent branching logical processes with conditional statements. (AP CS A Unit 3, CON-2.C)' }
          , { verb : 'Apply', outcome : 'Use understanding of rows and columns while creating algorithms for nested iteration. (AP CS A Unit 4, CON-2.C, CON-2.E, CON-2.G)' }
          , { verb : 'Apply', outcome : 'Use understanding of "out of bounds" errors when debugging code. (AP CS A Unit 8, CON-2.N)' }
          , { verb : 'Apply', outcome : 'Use API documentation to figure out how to use Java library classes.' }
          ]
      , studentFiles :
          [ { name : 'Pattern Builder Student Worksheet', link : 'https://docs.google.com/document/d/1EKY93W9TfvwBYRF4bqusL2TgwUD6n3pGcTAjPKy_Lbs/view' } ]
      , scaffoldFiles :
          [ { name : 'Pattern.java', link : 'https://drive.google.com/file/d/1xqZFChdormnMRtZz-jKskJAYtVWw-TAY/view' }
          , { name : 'PatternRunner.java', link : 'https://drive.google.com/file/d/1CMkBZ3cZ8dfCvCX_jO7-aV8c7LwZ0uVI/view' }
          ]
      , solutionFiles : [ 'Pattern.java', 'PatternRunner.java' ]
      , documentation : [ 'Bridges', 'ColorGrid', 'Grid' ]
      }

  , 'square-fill' :
      { name : 'Square Fill'
      , description : 'The BRIDGES library has a class called ColorGrid that allows you to represent an image as a grid of colored cells. The programmer defines the number of rows, number of columns, and default color. In this assignment, you will use iteration to create layers of squares until the entire grid is filled.'
      , summary : 'Create random layered squares using the ColorGrid class.'
      , imageCaption : 'Example output on a 10 by 10 grid'
      , topics : [ 'Nested loops', '2D arrays', 'Conditionals' ]
      , outcomes :
          [ { verb : 'Apply', outcome : 'Represent branching logical processes with conditional statements. (AP CS A Unit 3, CON-2.C)' }
          , { verb : 'Apply', outcome : 'Use understanding of rows and columns while creating algorithms for nested iteration. (AP CS A Unit 4, CON-2.C, CON-2.E, CON-2.G)' }
          , { verb : 'Apply', outcome : 'Use understanding of "out of bounds" errors when debugging code. (AP CS A Unit 8, CON-2.N)' }
          , { verb : 'Apply', outcome : 'Use API documentation to figure out how to use Java library classes.' }
          , { verb : 'Apply', outcome : 'Use documentation and class headers to determine inheritance relationships. (AP CS A Unit 9, MOD-3.B)' }
          , { verb : 'Create', outcome : 'Apply programming skills to avoid out-of-bounds errors and test for requirements when generating intricate repeating patterns within a 2D grid.' }
          ]
      , studentFiles :
          [ { name : 'Square Fill Student Worksheet', link : 'https://docs.google.com/document/d/1YPPPuxtveP1tTLcaGWY0l0HhSuePjwzdcX4oWTZti5w/view' } ]
      , scaffoldFiles :
          [ { name : 'Square Fill Scaffold', link : 'https://docs.google.com/document/d/1CSgrKCvm8gS2T0ETlvUIcUi2wfCUQsHVohjxf1v2Mww/view' }
          , { name : 'SquareFill.java', link : 'https://drive.google.com/file/d/1Yz2-rPIJfOhWyF2FI-axsA9UuIEOeuk0/view' }
          ]
      , teacherFiles : [ 'Square Fill Teacher Walkthrough' ]
      , solutionFiles : [ 'Square Fill Solution', 'SquareFill.java' ]
      , documentation : [ 'Bridges', 'ColorGrid', 'Color' ]
      }

  , 'gamebasics-1' :
      { name : 'GameBasics I'
      , description : 'The BRIDGES library has a class called NonBlockingGame that allows you to create simple games based on board grids. In this assignment, students will use the NonBlockingGame class to create a grid that displays a message, one letter per cell. This is not a game yet, but develops prerequisite understanding.'
      , summary : 'Display a custom message and alter it with keyboard input.'
      , topics : [ '2D arrays', 'API usage (NonBlockingGame class, NamedSymbol enum, NamedColor enum)', 'Inheritance', 'Abstract classes' ]
      , outcomes :
        [ { verb : 'Apply', outcome : 'Create objects by calling constructors with parameters. (AP CS A Unit 2, MOD-1.D)' }
        , { verb : 'Apply', outcome : 'Use typed variables to represent and refer to data. (AP CS A Unit 2, VAR-1.D)' }
        , { verb : 'Apply', outcome : 'Represent branching logical processes with conditional statements. (AP CS A Unit 3, CON-2.C)' }
        , { verb : 'Apply', outcome : 'Use understanding of rows and columns while creating algorithms for nested iteration. (AP CS A Unit 4, CON-2.C, CON-2.E, CON-2.G)' }
        , { verb : 'Apply', outcome : 'Use understanding of "out of bounds" errors when debugging code. (AP CS A Unit 8, CON-2.N)' }
        , { verb : 'Apply', outcome : 'Use API documentation to figure out how to use Java library classes.' }
        , { verb : 'Apply', outcome : 'Use documentation and class headers to determine inheritance relationships. (AP CS A Unit 9, MOD-3.B)' }
        , { verb : 'Analyze', outcome : 'Analyze library class code, applying understanding of abstract/concrete classes, abstract/concrete methods, constructors, and instance variables. (AP CS A Units 2, 5, and 9)' }
        ]
      , studentFiles :
          [ { name : 'GameBasics I Student Worksheet', link : 'https://docs.google.com/document/d/1ucgjKJX76ZKL0TqcmcRe6A2BsiCHMwV02BlmpfVs3m8/view' } ]
      , scaffoldFiles :
          [ { name : 'GameBasics I Scaffold', link : 'https://docs.google.com/document/d/12IwOhLCPeh-HKLuBa5_YOdQOIx3ynKHFocXl0JwyRsQ/view' }
          , { name : 'GameBasics1.java', link : 'https://drive.google.com/file/d/1ehoM_yAnQWs_X1GOq3OIgeHzvzA8gou6/view' }
          ]
      , teacherFiles : [ 'GameBasics I Teacher Walkthrough' ]
      , solutionFiles : [ 'GameBasics1.java' ]
      , documentation : [ 'NonBlockingGame', 'GameBase', 'NamedColor', 'NamedSymbol' ]
      }

  , 'gamebasics-2' :
      { name : 'GameBasics II'
      , description : 'In this second game basics project, students use the NonBlockingGame class to create a player that can be moved around the screen with the arrow keys.'
      , summary : 'Create a player that can be moved around the game board with keyboard input.'
      , topics : [ '2D arrays', 'API usage (NonBlockingGame class, NamedSymbol enum, NamedColor enum)', 'Event-driven programming' ]
      , outcomes :
        [ { verb : 'Apply', outcome : 'Create objects by calling constructors with parameters. (AP CS A Unit 2, MOD-1.D)' }
        , { verb : 'Apply', outcome : 'Use typed variables to represent and refer to data. (AP CS A Unit 2, VAR-1.D)' }
        , { verb : 'Apply', outcome : 'Represent branching logical processes with conditional statements. (AP CS A Unit 3, CON-2.C)' }
        , { verb : 'Apply', outcome : 'Use understanding of rows and columns while creating algorithms for nested iteration. (AP CS A Unit 4, CON-2.C, CON-2.E, CON-2.G)' }
        , { verb : 'Apply', outcome : 'Use understanding of "out of bounds" errors when debugging code. (AP CS A Unit 8, CON-2.N)' }
        , { verb : 'Apply', outcome : 'Use API documentation to figure out how to use Java library classes.' }
        , { verb : 'Apply', outcome : 'Use documentation and class headers to determine inheritance relationships. (AP CS A Unit 9, MOD-3.B)' }
        , { verb : 'Analyze', outcome : 'Analyze library class code, applying understanding of abstract/concrete classes, abstract/concrete methods, constructors, and instance variables. (AP CS A Units 2, 5, and 9)' }
        ]
      , studentFiles :
          [ { name : 'GameBasics II Student Worksheet', link : 'https://docs.google.com/document/d/1liUUBin6QVxC7EpL5wcU-WyqfXMynSyZryfUUeyUlsQ/view' } ]
      , scaffoldFiles :
          [ { name : 'GameBasics II Scaffold', link : 'https://docs.google.com/document/d/1Y2QvUvjDJBdMJGDoghOkoUF2p4U1s6717-L9Z_Vu56g/view' }
          , { name : 'GameBasics2.java', link : 'https://drive.google.com/file/d/1lQoGbIb_OVW-4sRZ_CGM7rli_Bs0Tc9l/view' }
          ]
      , teacherFiles : [ 'GameBasics II Teacher Walkthrough' ]
      , solutionFiles : [ 'GameBasics2.java' ]
      , documentation : [ 'NonBlockingGame', 'GameBase', 'NamedColor', 'NamedSymbol' ]
      }

  , 'bugstomp' :
      { name : 'BugStomp'
      , description : 'BugStomp is a whack-a-mole style game where you use the arrow keys to move your player and attempt to touch or "stomp" the bug. The bug flashes to a random location on the board after a set number of frames. For each bug stomped, the score increases until the player eventually wins. In this assignment, you will implement the BugStomp game with BRIDGES.'
      , summary : 'Create a whack-a-mole style game where the player stomps bugs to increase their score.'
      , topics : [ 'Random class', 'API usage', 'Arrays', 'Nested loops', 'Conditionals' ]
      , studentFiles :
          [ { name : 'BugStomp Student Worksheet', link : 'https://docs.google.com/document/d/1oDybdZV9qj9erwPtJn9idqjvsHwtk7Yk4sm6bnobIr8/view' } ]
      , scaffoldFiles :
          [ { name : 'BugStomp Scaffold', link : 'https://docs.google.com/document/d/1hbb2x9Tst9RXOOZbgnvkhSm9Rx6uRIUWB3rVT8C97Zo/view' }
          , { name : 'BugStomp.java', link : 'https://https://drive.google.com/file/d/1FgZofdRKoJ-L1tfXbue-ZVvRhE7Ynj12/view' }
          ]
      , solutionFiles : [ 'BugStomp Solution', 'BugStomp.java' ]
      , documentation : [ 'NonBlockingGame', 'GameBase', 'NamedColor', 'NamedSymbol' ]
      }

  , 'tron' :
      { name : 'Tron'
      , description : 'In this assignment, you will use the NonBlockingGame class to make a two-player video game. Each player controls a snake that gets longer and longer, and when one player crashes into something, the other person wins.'
      , summary : 'Create a two-player game that resembles the movie Tron.'
      , topics : [ 'ArrayLists', 'Classes', 'Loops', 'Booleans and conditionals', 'NonBlockingGame class' ]
      , studentFiles :
          [ { name : 'Tron Student Worksheet', link : 'https://docs.google.com/document/d/1pHgukZrm3rRvjK92xGxC8IdgJ5iX1qoRDGNi54v5eDg/view' } ]
      , scaffoldFiles :
          [ { name : 'Tron.java', link : 'https://drive.google.com/file/d/1JtXJetGJiv5366gSfzKyx9yLDUAhqRGy/view' }
          , { name : 'Snake.java', link : 'https://drive.google.com/file/d/1Bl1LRJZmYXJ9WhxAcVreyLI2rxozMI5-/view' }
          ]
      , teacherFiles : [ 'Tron Teacher Walkthrough' ]
      , solutionFiles : [ 'Tron.java', 'Snake.java' ]
      , documentation : [ 'NonBlockingGame', 'GameBase', 'NamedColor' ]
      }

  , 'chaos-game' :
      { name : 'Chaos Game'
      , description : 'In this project, students will create fractal designs using a chaos game algorithm. They will learn about Java record classes and will use the BRIDGES GraphAdjList class for creating visualisations.'
      , summary : 'Create fractal designs using a chaos game algorithm.'
      , topics : [ 'Record classes', 'Iteration', 'API usage' ]
      , studentFiles :
          [ { name : 'Chaos Game Student Worksheet', link : 'https://docs.google.com/document/d/19lsZeRmkIqmtxp31eaJ-R_Tk0ceiv1r-LQQsDxDpDms/view' } ]
      , scaffoldFiles :
          [ { name : 'ChaosGame.java', link : 'https://drive.google.com/file/d/1sn2DNypVWZjjSPLUcMCvdW-cTGoded31/view' } ]
      , teacherFiles : [ 'Chaos Game Teacher Walkthrough', 'Chaos Game Worksheet Answer Key' ]
      , solutionFiles : [ 'ChaosGame.java' ]
      , documentation : [ 'Bridges', 'GraphAdjList', 'Element' ]
      }

  , 'game-of-life' :
      { name : 'Game of Life'
      , description : 'The Game of Life is a two-dimensional cellular automaton invented by John Conway in 1970. The state of each individual cell is determined by simple rules, but patterns of hundreds of cells working together can exhibit complex behavior. In this project, students will create an interactive Game of Life animation using the BRIDGES Java API.'
      , summary : 'Create an interactive cellular automaton animation.'
      , topics : [ 'Cellular automata', 'Nested loops', '2D arrays', 'Conditionals', 'Methods', 'API usage' ]
      , studentFiles :
          [ { name : 'Game of Life Student Worksheet', link : 'https://docs.google.com/document/d/1Q8-LXiLvK5ovG9hyxgY6O3-7ZKEciVqU6cYk9NZUTcY/view' } ]
      , scaffoldFiles :
          [ { name : 'GameOfLife.java', link : 'https://drive.google.com/file/d/1R474BUVZuQ2Gbs6vi5XfUwqNHzwN9Me6/view' } ]
      , teacherFiles : [ 'Game of Life Teacher Walkthrough' ]
      , solutionFiles : [ 'GameOfLife.java' ]
      , documentation : [ 'GameBase', 'NonBlockingGame', 'NamedColor' ]
      }

  , 'patterns-in-song-lyrics' :
      { name : 'Patterns in Song Lyrics'
      , description : 'In this project, students access song lyrics using BRIDGES and check for repetition. They display the repetition with the ColorGrid class, creating patterns like the following:'
      , summary : 'Detect repetition in song lyrics and generate a graphical representation of the pattern.'
      , imageCaption : 'Example output for the song "Harder Faster Stronger" by Daft Punk.'
      , topics : [ 'API usage', 'String processing', 'ColorGrid (BRIDGES class for pixel-based graphics)', 'Loops', 'Conditionals' ]
      , studentFiles :
          [ { name : 'Patterns in Song Lyrics Student Worksheet', link : 'https://docs.google.com/document/d/1qEoQG77AXxfklH6h-eszEI7K-XlJXhn65qO_ElxzsnQ/view' } ]
      , scaffoldFiles :
          [ { name : 'GridLyrics.java', link : 'https://drive.google.com/file/d/1GApUO0YU1Uh5QEXjxmEUMlAvEBjC6DlR/view' } ]
      , teacherFiles : [ 'Patterns in Song Lyrics Worksheet Answer Key' ]
      , solutionFiles : [ 'GridLyrics.java' ]
      , otherResources :
          [ { name : 'splitLyrics Activity', link : 'https://docs.google.com/document/d/1IUiJWprytdAeOBqLBeNfPPnhL3V8z3_7A7SIJhP1Ltk/view' }
          , { name : 'ColorGrid Activity', link : 'https://docs.google.com/document/d/1tb2bnOajRPxTc6rSGZ7RulbujJi_836oWj8jD9bs4fE/view' }
          ]
      , documentation : [ 'Bridges', 'DataSource', 'Color', 'ColorGrid', 'Song' ]
      }

  , 'mountain-paths' :
      { name : 'Mountain Paths'
      , description : 'In this project, students read elevation data into a 2D array, compute the path of least elevation change using a greedy algorithm, and visualise the path with the ColorGrid class.'
      , summary : 'Given elevation data, find the path of least elevation change using a greedy algorithm.'
      , imageCaption : 'In the map above, lighter shades mean higher elevation. The red line shows a "lowest elevation change" path traveling west to east.'
      , descriptionHtml : mountainPathsDescription()
      , studentHtml : mountainPathsStudent()
      , topics : [ 'Command line arguments', 'Traversing 2D arrays', 'Reading files', 'Greedy algorithm', 'ColorGrid (BRIDGES class for pixel-based graphics)' ]
      , outcomes :
          [ { verb : 'Apply', outcome : 'Use file path operations to access data files.' }
          , { verb : 'Understand', outcome : 'Identify the purpose of String[] args in the context of the main method.' }
          , { verb : 'Understand', outcome : 'Analyse and explain code that reads data files.' }
          , { verb : 'Understand', outcome : 'Analyse and explain code that converts elevation data into a 2D array and creates a grayscale image.' }
          , { verb : 'Remember', outcome : 'Define the greedy algorithm.' }
          , { verb : 'Apply', outcome : 'Develop a greedy algorithm as a heuristic for finding a "least elevation change" path given elevation data.' }
          , { verb : 'Create', outcome : 'Create a visual representation of the path using the BRIDGES ColorGrid class.' }
          , { verb : 'Evaluate', outcome : 'Critique the greedy algorithm as a means of achieving the optimal path.' }
          ]
      , studentFiles :
          [ { name : 'Mountain Paths Student Worksheet (Less Comfortable)', link : 'https://docs.google.com/document/d/1LOf7cN5H1GBVPTGKx0vSZA2UFRBYzEpAzokl_T8wVrw/view' }
          , { name : 'Mountain Paths Student Worksheet (More Comfortable)', link : 'https://docs.google.com/document/d/17wSzZrs-L0wtSROvea-DKRgBovp95SoBiFXDNj4qYXY/view' }
          ]
      , scaffoldFiles :
          [ { name : 'Mountain Paths Scaffold', link : 'https://docs.google.com/document/d/1jFD-z7txjIWHJgWZ7NHPCji3C17x46m0v-UiDa5zC6c/view' }
          , { name : 'MountainPath.java', link : 'https://drive.google.com/file/d/15EmUSQYQ5Ot-LLwKClTMnoVs9rE8t5Eb/view' }
          ]
      , teacherFiles : [ 'Mountain Paths Teacher Walkthrough', 'Mountain Paths Worksheet Answer Key', 'getImage Comment Example', 'readData Comment Example', 'Mountain Paths Rubric' ]
      , solutionFiles : [ 'Mountain Paths Solution', 'MountainPath.java' ]
      , otherResources :
          [ { name : 'Command Line Arguments (BlueJ)', link : 'https://docs.google.com/document/d/1i3ZBrgEIYLR2PIJ2ISSBj1Vn2EHWZxXsDEIFCjBexXA/view' }
          , { name : 'Command Line Arguments (CS50 Cloud9)', link : 'https://docs.google.com/document/d/1PuM6Fc6QfWhW1hMy2Sxe5tXhC7gO2KRGeaZVKjH2JFo/view' }
          , { name : 'Command Line Arguments (Eclipse)', link : 'https://docs.google.com/document/d/1YYmIRZGqXZ4lOX6QJekgIjlt7pTbGD_BiFjwifKGHfQ/view' }
          , { name : 'Command Line Arguments (IntelliJ)', link : 'https://docs.google.com/document/d/1zCqli0DCV_dTys6NYDe6vdbRUKxLGfc8UwSXLuJolXI/view' }
          , { name : 'BHBLarea.dat', link : 'https://drive.google.com/file/d/1nxiFbBywilP2c4XWkFxOpbvakC1IAtxm/view' }
          , { name : 'Colorado_480x480.dat', link : 'https://drive.google.com/file/d/1c4kuCc-w0aQVoZJ7GKZSL-qqumGwUTHE/view' }
          , { name : 'Colorado_844x480.dat', link : 'https://drive.google.com/file/d/19iR7wqAW4HgDQE9PC_A9mOgRbsJcMvCy/view' }
          , { name : 'Mountain Paths Test Cases', link : 'https://docs.google.com/document/d/1lFfD6bNpzcDzT9_yZqBnMeey_NtGNNTyFjXbRGyogNY/view' }
          , { name : 'Float variables description', link : 'https://docs.google.com/document/d/1TJmC317v0jx_m3KvlyQck62VonvDSdeGf4F1iPgDczQ/view' }
          ]
      , documentation : [ 'Bridges', 'ColorGrid', 'Color' ]
      }

  , 'earthquake-linked-list' :
      { name : 'Earthquake Linked List'
      , description : 'Students create a linked list using real-time earthquake data from the US Geological Survey. This project involves reading source code and arranging code segments in the correct order.'
      , summary : 'Generate a singly linked list containing real-time earthquake data.'
      , imageCaption : 'Each node represents an earthquake. The node\'s color, size, and shape vary depending on the earthquake\'s magnitude and location.'
      , topics : [ 'Linked lists', 'Reading source code', 'API usage', 'Element class', 'EarthquakeUSGS class' ]
      , studentFiles :
          [ { name : 'Earthquake Linked List Student Worksheet', link : 'https://docs.google.com/document/d/1oisYJbWIy8T-rqHunXDbAe6XMY1uhh3UHyk6y5HLZCo/view' } ]
      , scaffoldFiles :
          [ { name : 'EarthquakeList.java', link : 'https://drive.google.com/file/d/1aREWCQ2E-K745UYz5dowP2wY74RakH_L/view' } ]
      , teacherFiles : [ 'Earthquake Linked List Worksheet Answer Key' ]
      , solutionFiles : [ 'EarthquakeList.java' ]
      , documentation : [ 'Bridges', 'Element', 'EarthquakeUSGS' ]
      }

  , 'maze-generator' :
      { name : 'Maze Generator'
      , description : 'In this assignment, students use an algorithm to randomly generate mazes, and display them with the BRIDGES ColorGrid class. The maze is stored as a two-dimensional array of cells. It starts with a single cell in the center, and then branches randomly until the entire grid is filled.'
      , summary : 'Build solvable mazes with a random-branching algorithm.'
      , topics : [ 'Enumerations', 'Arraylists', '2D arrays', 'Nested loops', 'API usage', 'Methods', 'Conditionals' ]
      , studentFiles :
          [ { name : 'Maze Generator Student Worksheet', link : 'https://docs.google.com/document/d/1q6raFmAw6fJCe5JaurXIaqf3YxzNmLYspSGryAorB68/view' } ]
      , scaffoldFiles :
          [ { name : 'MazeGenerator.java', link : 'https://drive.google.com/file/d/1oxG0e-Azo3d3ff8Ceju_pmsklJoS5XbE/view' }
          , { name : 'Cell.java', link : 'https://drive.google.com/file/u/1/d/13qoFQcXWocoCvYJA4h1hSkpzrZbsjC9k/view' }
          , { name : 'Direction.java', link : 'https://drive.google.com/file/d/1JMz8A7kOU7HJpavIjhbBIBtlz6t6QL7k/view' }
          ]
      , teacherFiles : [ 'Maze Generator Teacher Walkthrough', 'Maze Generator Worksheet Answer Key' ]
      , solutionFiles : [ 'MazeGenerator.java', 'Cell.java', 'Direction.java' ]
      , otherResources :
          [ { name : 'Maze Algorithm', link : 'https://docs.google.com/document/d/1w0uf78Ghi1vQqtwp12-AROTa0I4LcM6-pkMew9wGi-Q/view' } ]
      , documentation : [ 'Bridges', 'ColorGrid', 'Color' ]
      }

  , 'interpreter' :
      { name : 'Interpreter'
      , description : 'In this assignment, students will create an interpreter for a simple programming language. The interpreter will parse a file into a list of commands, and then execute the commands, using BRIDGES to create circles, polygons, and lines.'
      , summary : 'Create your own programming language.'
      , imageCaption : 'Example program and output'
      , topics : [ 'Command line arguments', 'Try and catch blocks', 'Reading files', 'StringBuilder class', 'String parsing', 'Arraylists', 'BRIDGES SymbolCollection API' ]
      , studentFiles :
          [ { name : 'Interpreter Student Worksheet', link : 'https://docs.google.com/document/d/1mGX9JIlsIQwPM5QjFf4BXCSUdaFntUbxLUedsCjPD0E/view' } ]
      , scaffoldFiles :
          [ { name : 'Interpreter.java', link : 'https://drive.google.com/file/d/13jVQs9voHRcaWjYo9Qa88gLxGJjlDCJU/view' } ]
      , teacherFiles : [ 'Interpreter Teacher Walkthrough', 'Interpreter Worksheet Answer Key' ]
      , solutionFiles : [ 'Interpreter.java' ]
      , otherResources :
          [ { name : 'example-output.png', link : 'https://drive.google.com/file/d/1ehWqQIj5Yqhfw4jfOkA0LojidbM87B2O/view' } ]
      , documentation : [ 'Bridges', 'SymbolCollection', 'Symbol', 'Circle', 'Rectangle', 'Polygon', 'Polyline', 'Text' ]
      }

  , 'street-map' :
      { name : 'Street Map'
      , description : 'A graph is a mathematical object consisting of connections (edges) between points (vertices). Graphs are used fairly often in computer science, because they can model many of the networks that arise from real-world data. In this assignment, we will use a technique called Dijkstra\'s algorithm to find the shortest path across a city.'
      , summary : 'Use Dijkstra\'s algorithm to find the shortest path across a city.'
      , imageCaption : 'Example output for New York City; the shortest path from the northwest to the southeast in marked in red.'
      , topics : [ 'Graphs', 'Dijkstra\'s algorithm', 'Records', 'Nested classes', 'Hash-maps and hash-sets', 'API usage' ]
      , studentFiles :
          [ { name : 'Street Map Student Worksheet', link : 'https://docs.google.com/document/d/1v_35mixjUBAOym_KqmJKEcSgFSByhkHhZF-pYWjg52w/view' } ]
      , scaffoldFiles :
          [ { name : 'Main.java', link : 'https://drive.google.com/file/d/1ecuC6u9K682KEvRnCd0rqF2ws_PqEWJL/view' }
          , { name : 'StreetMap.java', link : 'https://drive.google.com/file/d/16wtzboVzDxKv5cDpccyA_J5GRhEuBhJv/view' }
          ]
      , teacherFiles : [ 'Street Map Teacher Walkthrough', 'Street Map Worksheet Answer Key' ]
      , solutionFiles : [ 'Main.java', 'StreetMap.java' ]
      , documentation : [ 'Bridges', 'Color', 'Element', 'GraphAdjList', 'Edge', 'DataSource', 'OsmVertex', 'OsmEdge' ]
      }

  , 'sudoku' :
      { name : 'Sudoku'
      , description : 'Sudoku is a puzzle game played on a 9 by 9 grid. The objective is to fill the grid with numbers such that each row, column, and 3 by 3 subgrid contains every number from 1 to 9. The game starts with the grid partially completed so that there is only a single solution. In this project, you will create your own sudoku game using the BRIDGES Java API.'
      , summary : 'Create a program for solving sudoku puzzles.'
      , topics : [ 'Nested loops', '2D arrays', 'Booleans and conditionals', 'Reading source code', 'API usage' ]
      , outcomes :
          [ { verb : 'Apply', outcome : 'Use an API reference in order to learn how to use Java classes.' }
          , { verb : 'Apply', outcome : 'Use understanding of 2D arrays, rows, and columns while creating algorithms for nested iteration. (AP CS A Unit 4, CON-2.C, CON-2.E, CON-2.G)' }
          , { verb : 'Apply', outcome : 'Represent branching logical processes through development of complex conditionals. (AP CS A Unit 3, CON-2.C)' }
          , { verb : 'Apply', outcome : 'Demonstrate perseverance while using APIs and other resources when independently developing programming skills.' }
          , { verb : 'Understand', outcome : 'Describe how parallel arrays can be used to keep track of changing properties.' }
          , { verb : 'Create', outcome : 'Apply the above cognitive skills with 2D data structures when developing original solutions and conducting requirements testing.' }
          ]
      , studentFiles :
          [ { name : 'Sudoku Student Worksheet', link : 'https://docs.google.com/document/d/1C3r20XU2EYtZYHL_yCqFebuMVGoPs9XjKGDTcYVsG0w/view' } ]
      , scaffoldFiles :
          [ { name : 'Sudoku.java', link : 'https://drive.google.com/file/d/1-FR6cNZdUok_qG5xcvgCdckM_LsgkSz_/view' }
          , { name : 'GridGenerator.java', link : 'https://drive.google.com/file/d/1jpxIsDvyEqUlTTDAemLvKrxA0LZCl6Uy/view' }
          ]
      , teacherFiles : [ 'Sudoku Teacher Walkthrough', 'Sudoku Worksheet Answer Key' ]
      , solutionFiles : [ 'Sudoku.java', 'GridGenerator.java' ]
      , otherResources :
          [ { name : 'Game.java', link : 'https://drive.google.com/file/d/1ZduvXJgicqj-0t1N-0121971nNE3ziTA/view' }
          , { name : 'Keyboard.java', link : 'https://drive.google.com/file/d/1aE48jraDCgoV-ArYbGXyMv6D0Y8r9vRv/view' }
          ]
      , documentation : [ 'NamedColor', 'NamedSymbol' ]
      }
  };

const bridgesClass =
  { Bridges : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1connect_1_1_bridges.html'
  , GameBase : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1games_1_1_game_base.html'
  , NonBlockingGame : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1games_1_1_non_blocking_game.html'
  , NamedColor : 'https://bridgesuncc.github.io/doc/java-api/current/html/enumbridges_1_1base_1_1_named_color.html'
  , NamedSymbol : 'https://bridgesuncc.github.io/doc/java-api/current/html/enumbridges_1_1base_1_1_named_symbol.html'
  , Grid : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1base_1_1_grid.html'
  , ColorGrid : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1base_1_1_color_grid.html'
  , Color : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1base_1_1_color.html'
  , Element : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1base_1_1_element.html'
  , GraphAdjList : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1base_1_1_graph_adj_list.html'
  , Edge : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1base_1_1_edge.html'
  , DataSource : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1connect_1_1_data_source.html'
  , EarthquakeUSGS : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1data__src__dependent_1_1_earthquake_u_s_g_s.html'
  , OsmVertex : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1data__src__dependent_1_1_osm_vertex.html'
  , OsmEdge : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1data__src__dependent_1_1_osm_edge.html'
  , Song : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1data__src__dependent_1_1_song.html'
  , SymbolCollection : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1base_1_1_symbol_collection.html'
  , Symbol : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1base_1_1_symbol.html'
  , Circle : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1base_1_1_circle.html'
  , Rectangle : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1base_1_1_rectangle.html'
  , Polygon : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1base_1_1_polygon.html'
  , Polyline : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1base_1_1_polyline.html'
  , Text : 'https://bridgesuncc.github.io/doc/java-api/current/html/classbridges_1_1base_1_1_text.html'
  };

function mountainPathsDescription() {
  const { div, p, h2, img, figure, figcaption, ul, li, a } = HTML;

  const source = p(
    'This project is adapted from a ',
    a({ href : 'http://nifty.stanford.edu/2016/franke-mountain-paths/' }, 'Nifty assignment'),
    ' created by Baker Franke in 2016.'
  );

  const greedy1 = p(
    `A greedy algorithm is an algorithm that makes locally optimal decisions to generate an approximate global optimum.
    In this project, the optimal solution is a path with the lowest change in elevation.
    Consider the following figure:`
  );

  const diagram = (num, direction) => figure(
    img({ src : '/bridges-hs/images/mountain-paths/greedy-case-' + num + '.png', alt : 'Case ' + num }),
    figcaption('Case ' + num + ': ' + direction)
  );

  const diagrams = div({ class : 'greedy-diagram' },
    diagram(1, 'Go down'),
    diagram(2, 'Go forward'),
    diagram(3, 'Forward preferred'),
    diagram(4, 'Go up or down')
  );

  const greedy2 = div(
    p(
      `In each case, the green box indicates the optimal decision based on the elevation change.
      Notice the last two cases:`
    ),
    ul(
      li('Case 3: When the forward elevation change is equivalent to the up or down elevation changes, the forward choice is preferred.'),
      li('Case 4: When the up and down elevation changes are equivalent, flip a coin to determine which way to go.')
    ),
    p(
      'The central premise of the Mountain Paths project is to use this algorithm repeatedly, generating a globally optimal path.'
    )
  );

  return div(
    source,
    h2('Greedy Algorithm'),
    greedy1,
    diagrams,
    greedy2
  );
}

function mountainPathsStudent() {
  const { p, strong } = HTML;

  return p(
    `There are two student worksheets: the "Less Comfortable" worksheet and the "More Comfortable" worksheet.
    These worksheets differ on the amount of help given to the student.`,
    strong('"Less comfortable"'),
    ` is best for students who are not as confident with programming,
    and would appreciate additional tips and guidance for completing the assignment. `,
    strong('"More comfortable"'),
    ` is best for students who are confident, experienced programmers and would enjoy an additional challenge.
    Both worksheets are graded the same way and result in the same finished product.`
  );
}
