##Ovo Energy Technical Test. Sarah Miller Tues 6th June.

### Installation instructions
Run `npm i` and `bower install` to install all the necessary dependencies.

The tests are written with Karma as test runner, Mocha as testing framework and Chai assertion library. Mocks are provided by Angular mocks.

To run tests enter `karma start` in the terminal.

To run the game open the index.html file in the browser.

### Main Challenges
Due to my inexperience with testing the game logic was written before the tests. This proved to be a flawed approach as it is very difficult to write tests for the game code due to the use of closures. The code needs refactoring to make it more modular before tests can be run properly.

The first test checks that the test have been set up correctly and passes, the second checks that global variables are empty at the start of the game. The third test is intended to check that the parameter passed from the DOM is saved in the correct variable, however, this test is not working, the most likely explanation for this is that it was not written correctly(!) but it is difficult to see why it fails due to the complexity of the function it is testing.
