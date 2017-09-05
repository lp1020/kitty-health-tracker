# kitty-health-tracker

## Project Description
I made a kitty health tracker app, which tracks daily health stats and displays averages of the stats so that you can continually track your progress. I wnated to create this because I know health is very important to most people right now, so I thought it would be very useful to be able to see your progress if you are trying to lose weight, count calories, or monitor your heart rate or blood pressure readings. I made it kitty themed because I have four cats, and who doesn't love funny cat GIFs?! 

## Wireframes
![img](https://github.com/lp1020/kitty-health-tracker/blob/master/assets/project2wireframe.jpg) 

## App Components
The app is a CRUD-based web application with create, read, update, and delete functions. There is an area that displays all the daily health stats that have been added to the tracker, as well as an area that displays all the averages of each stat. It uses a GIPHY API to display cat GIFs in the homepage, as well as using GIPHY's embed feature within the other pages. It employs an inner joins of two tables within the database.

## Libraries
 * EJS/HTML
 * CSS
 * JavaScript/jQuery
 * SQL/Postgres
 * Node/Express
 
 ## Welcome Page
 ![img](https://github.com/lp1020/kitty-health-tracker/blob/master/assets/Screen%20Shot%202017-09-05%20at%203.02.17%20AM.png)
 
 ## Favorite piece of code
 This is the piece of code in my model that displays the rounded averages of the columns in my main table. I'm most proud of it because it was a new function that I figured out mostly on my own.
``` 
 average() {
    return db.one(`
      SELECT ROUND (AVG(weight)) AS weight, ROUND (AVG(bmi)) AS bmi, ROUND (AVG(heart_rate)) AS heart_rate,
      ROUND (AVG(calorie_intake)) AS calorie_intake,
      ROUND (AVG(hours_of_sleep)) AS hours_of_sleep FROM healthStats;
      `)
  }, 
  ```
  
  ## Issues and Resolutions
  My biggest issue was definitely trying to employ the API from the back-end. Luckily, I had a lot of help to get it to work, but I'd still like to employ the use of the API throughout the other pages, as well as being able to hide my API key in my env. file.
