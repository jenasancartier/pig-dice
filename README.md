# [For Sale](https://jenasancartier.github.io/pig-dice/)
![project screenshot](/img/screenshot.png)
![project screenshot](/img/screenshot2.png)

__Version 1: August 2016__
## by [J'ena SanCartier](https://github.com/jenasancartier) and Ethan Law.

### Description
A game of pig dice created with JavaScript. Includes a computer player option.

# Behavior Driven Development
* Program will generate random numbers between 1 and 6.
  * Input: click
  * Output: 4
* It will add subsequent "rolls" together.
  * Input: 4, 6
  * Output: 10
* It will recognize when a 1 is rolled and set turn total to 0.
  * Input: 1
  * Output: turnTotal = 1
* It will add the turn total to the game total when user ends their turn or rolls a 1
  * Input: Hold button
  * Output: game total += turn total

A.I.
* A.I. will activate the roll button when human player has clicked hold.
* It will roll when human player rolls a 1.
* It will roll three times and then hold.
* If it is behind, it will roll until the turn total + its game total is greater than the opponent's game total.
* If it is within 15 points of winning, it will roll until it can win.

### Setup/Installation
1. _Clone this repository at:_
  * https://github.com/jenasancartier/pig-dice.git
2. _Move into the project folder_
3. _Open index.html in the browser of your choice (preferably Chrome) OR_
4. _You can simply open the website in your browser with this link:_
  * https://jenasancartier.github.io/pig-dice/

### Support & Contact
For questions or comments, please email me at [jenasancartier@gmail.com](mailto:jenasancartier@gmail.com)

### Known Issues
* No known bugs as of 8.2016

### Technologies Used
HTML, JavaScript, CSS

### Legal
*Licensed under the GNU General Public License v3.0*

Copyright (c) 2016 **Jena SanCartier**
