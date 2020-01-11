# Beginner Bootcamp Homework

Hello beginner bootcampers. Here is your first formal homework  assignment!


**I expect you to do this assignment individually. I will notice if you copy another students code.**  
To be 100% clear: If I notice you copying other students homework you will get an invoice for the course.  
Don't discuss the homework in slack

- Download the starter files
- Make a local git repo and use it to track your work
- When you're done add a remote and push to your github
- The link to your repo should look something like: git@github.com:YOURGITHUBUSERNAME/YOURREPONAME.git
- **Send the link to your repo to teachers@codaisseur.com before Saturday 22:00**

Expectations:
- I expect you give this homework assignment your best shot.
- You should be able to complete this homework without my help if there was no time limit.
- I expect you to spend 6-8 hours on this assignment. You can spend more but prioritize enough sleep, doing laundry etc.
- I expect people without experience to be able to implement most tests
- I expect some people with programming experience before this bootcamp to able to finish the whole assignment within the time-limit.

Tips:
- Use readest, stackoverflow and documentation, w3schools had easy to understand examples.
- Check the tests on the page for hints
- Write the code step by step and use console.log() to check yourself  
- If you can't get a certain test to pass try a different one. **Don't get stuck on a single thing for a whole day.**  
- You get no points for Extra CSS that is not in the assignment (except the fuzzy feeling in your own brain)
- If you feel you had a bad result write a reflection on your way of working in the readme of your project.

## What are we building?

We are building (the start) of a game

Minimal game:

- You play as a hero and you have some "stats" like health and inventory
- By clicking different pictures the stats of the hero get changed

Additional features:

- A player can choose their own name
- We want to display the stats to the player so she knows what happened
- When some stats change we want to show the updated stats
- Make it possible to fight enemies

## Section 1. Creating the hero object

**Press the 'Run the tests' button to run the automated tests** 
Follow the instructions in section to create the hero object.

## Section 2. Implementing the basic game logic and UI

**Press the 'Run the tests' button to run the automated tests**
Follow the instructions to implment `resting`, `picking up items` and `equipping a weapon` game logic. These are all functions that will manipulate your hero object. Each of these function will need some user interface.

**note:** You could implement this game logic in *many* other ways. But in order for the tests to guide you the instructions are very specific.

## Section 3. CSS

- Link an external stylesheet and make all the pictures the same size.

## Section 4 - Show me what you got

- Allow people to change the name of their hero, you can use window.prompt or use an input element. Be careful using a form because using a form might refresh the page.

- Write `displayStats` function that writes your hero's name, health, weapontype, weapon damage to the page. Call it at the end of your script

- Call `displayStats` when some data of the hero has changed to update the page.

- Implement fighting an enemy. (how you do it is up to you!)

- When an enemy or weapon gets clicked it gets deleted from the page
