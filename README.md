# 05 Third-Party APIs: Work Day Scheduler

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Description

A simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This application runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

## Deployed Application


## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Mock-Up

The following animation demonstrates the application functionality:

![day planner demo](./images/05-third-party-apis-homework-demo.gif)


## Folder Structure

To follow industry best practices within the Secure Password Generator repository the folder structure has been updated.

**index.html** Stands on it own, outside of any folder. This code was given to me but contains updated relative pathways to the JavaScript document, as well as well as the CSS document. 

**README.md** Stands on it own, outside of any folder.

**images** This folder contains the mock-up provided of the Work Day Scheduler

**scripts** This folder contains script.js. This JavaScript file was created by me and contains my jQuery Code. 

**styles** This folder contains the style.css document. This CSS file was given to me. 

## HTML 

I have four main elements on my HTML page, all while utilizing the Bootstrap grid system and code. I chose to use Bootstrap because it is clean and polished and provides an intuitive nature and responsive design for the user. 

**Jumbotron** This contains the heading ‘Work Day Scheduler’ and a description. I added jQuery code to give the current date (Day of week, Month day, year)based on local computer time.  

**container id=timeblock** This is a blank div. This is where my jQuery rows for the form get added into the html document. 


## CSS 

This document contains code to provide basic styling to my HTML page. This code was all given to me. I modified the classes to match what I used in my jQuery code. I changed the classes from what was given to words that made more sense to actions I decided to take to make my page function properly.  


## jQuery

This application is very is very jQuery dependant. The Work Day Scheduler is almost completely blank in HTML, and everything is populated from jQuery through various functions and variables. 

### Functions

**createForm** this allows me to create what is on the page

### Variables 
There are many variables that are needed to make this work.

**currentDate** Tells me computer current time using moment

**currentTime** Tells me computer current hour using moment

**past** COME BACK
**future** COME BACK

**pos** gives me an array start pos

**row** gives me my rows for my html

**textArea** COME BACK NOT USING

**getStroage** grabs my local storage 

**finalTimes and my Plans** gives positions of myDay Array for my row to loop through 

**myClass** gives id of my button that is selected

**dailyPlans** gives value of the input from the button is selected with class 

**currentInput** gives the current inputs id

### Arrays 

**myDay** gives me times and ids to put in my row

**input** blank, so local storage can be pushed inside

### Event Listeners / Buttons 
My saveBtn is located inside my for loop because each button is created dynamically in my loop in my jQuery. I have to call out each class and that classes value using myClass and Daily plans, then set those to local storage.

### Conditions

Time block Condition - not working yet 

### for Loops

**Local storage loop**  this gets my local storage values and pushes it into an array.

**myDay array loop** this loops through the positions of my array and creates my rows for my Work Day Scheduler. This also assigns actions to my buttons and my rows. This loop provides the majority of my page. 

## Pseudo Code

Finally you will find my Pseudo code at the bottom of the screen.  I used this to help me plan my various needs fo this project. With so many things going on in one application it helped to keep me organised and on track. 







### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses the Moment.js library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the homework instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application


## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
