# Project-1---city-landamarks

City landmark API to know where to go on your travels


### User Stories
1. A user will be able to see a front modal page where a dropdown modal will show up to select city
2. A user, once selected a city, will be able to see information on the main page related to the selected city and its main landmarks.
3. User will be able to add a new city or edit a city content in the collection.
4. A user will be able to create, edit and delete a landmark on the city selected.
5. Each city will have a picture to show up a skyline of it as well as the landmark.
CHALLENGES:
6. Adding transitions to the pictures of each city (different pictures of each city)
7. Users will be able to drop a comment of why they like a landmark so much
8. User will be able to see current weather form the selected city.
9. Map with pins of the landmarks.



### User Stories (broken down)

### 1. A user will be able to see a front modal page where a dropdown modal will show up to select city
  - Create a modal pop up with a bootstrap modal dropdown with a selection of hardcoded cities
  - Modal to fade away after selection of the city  


![wireframe](http://i.imgur.com/LA6pTMx.png)


### 2. A user selects a city and will be able to see information on the main page related to the selected city and its main landmarks.

  - Create HTML structure where city information will show up
  - HTML structure will load with a screen showing information about the selected city, including:
    .City Name
    .Short, fun description about the city
    .Location
    .Population
    .Size (sqm)
    .Image
    .Landmarks
          ..Landmark Name
          ..Address
          ..Why is it fun?


![wireframe](http://i.imgur.com/wD5u0oq.png)


### 3. User will be able to add a new city or edit a city content in the collection.
  - Create a bootstrap modal to show an input form with city information. The request is with same attributes as shown on Part 2 of the user stories.
  - A button to submit the information once completed:
      .If adding new city, information will show right after it is completed
      .If editing a city, information will be updated after submitting

![wireframe](http://i.imgur.com/9EI6JQZ.png)      

### 4. A user will be able to create, edit and delete a landmark on the city selected.
  - Create a modal box to show an input form asking for landmark information like the one displayed on PArt 2 of User Stories.
  - A button to submit the information once completed:
      .If adding new landmark, information will show right after it is completed
      .If editing a landmark, information will be updated after submitting
      .If deleting, the landmark with be removed from screen

![wireframe](http://i.imgur.com/6i9rFMA.png)

### 5. Each city will have a picture to show up a skyline of it as well as the landmark.
  - Pictures will be asked to be no less than 900 x 900 pixels for the city and 600 x 600 of a landmark

# CHALLENGES

### 6. Adding transitions to the pictures of each city (different pictures of each city)
  - Pictures will automatically make transition from one to another on the city section

### 7. Users will be able to drop a comment of why they like a landmark so much
 - Create a "comment" form at the bottom of the page so people can say why they like a city so much

### 8. User will be able to see current weather form the selected city.
  - create an API connection to display current weather on the city displayed on screen


### 9. Map with pins of the landmarks.
  - Create an API connection to show the submitted landmarks on the a map




# ERD and Database Models

![Database Model and ERD](http://i.imgur.com/m9279zE.png)
