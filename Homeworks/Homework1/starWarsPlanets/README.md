Task 1
Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

Planet Name
Population
Climate
Gravity
There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1

Task 2
After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

**API URL: ** https://swapi.dev/api/planets/?page=2


Aneta's comments: 
APPOLOGIES IN ADVANCE FOR CHANGING SOME OF THE INITIAL REQUIREMENTS :)

**Steps for creating the app:

1. Get all the necessary html elements 

2. Declare the global variables that will be used later in the code

3. Create a function to get the Star Wars planets:
- The function shoud make an ajax call to get the first page 
- Then it should fill in the html table element container with the requested data
- Then it should handle the previous and the next page buttons depending on the current page

4. Add event handlers for all three buttons 
- The show results button should make the first api call for the page 1
- The "NEXT 10" button appears immidiately and once clicked, the currentPage variable increments by 1 and the getPlanets function is called with the new value of the currentPage parameter to show the next page and so on until the last page where the "NEXT 10" button disappears because we are currently on the last page.
- Once THE "NEXT 10" button is clicked, the "PREVIOUS 10" button appears as now we have previous page. Once the "PREVIOUS 10" is clicked, the currentPage variable decrements by one and the function getPlanets is called with the new value of the currentPage parameter to show the previous page and so on until we return to the first page where the "PREVIOUS 10" button disappears because we are currently on the first page.

5. Add a code logic to display the current page



