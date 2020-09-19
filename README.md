### Exercise for Spark Digital - Ignacio Fernández

* The exercise was solved using WebDriverIO. I decided to use PageObject pattern to isolate the test itself from page's
 methods (created to interact with the elements needed to make the test work)
* To avoid duplicated code I decided to create a helper class, which contains methods used across all the page objects

To run properly this test you should install all the dependencies (running this line via terminal inside the project's folder)

- `npm install`

After all the dependencies were installed properly, copy and paste the following line and press enter (inside terminal)

- `npm test`
