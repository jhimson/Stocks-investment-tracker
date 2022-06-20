# TheHood - Stocks Investment Tracker


## Premise:
TheHood is a robinhood inspired Full-Stack web application but way less functionalities than robinhood. It is a stocks investment tracker application that will allow users to keep track all their buy and sell transactions of stocks. Users can also create a watchlist and can add as many stocks as they want in the watchlist. Users can also check news headlines.

[Live Preview](https://thehoodapp.herokuapp.com/)

## User Story

##### As a user I want to:

- Be able to Signup and login to an account.
- Be able to create/update/delete a record of stock buy/sell transaction.
- Be able to view all the transaction records that have been created.
- Be able to create/update/delete a watchlist.
- Be able to view all the watchlist that has been created by the user.
- Be able to add/remove stocks from any watchlist created by the user.
- Cannot view/update/delete other records of a different users.
- Be able to look up a specific stock that user is interested to learn more about the company. (Using stocks API).
- Be able to search a watchlist by name.


## Wireframes:

### Login Page:

#### DESKTOP VIEW
![image](https://user-images.githubusercontent.com/42398487/174591138-c1f46f41-f3cc-456d-afa9-c2f92ab11c61.png)

### MOBILE VIEW
![image](https://user-images.githubusercontent.com/42398487/174591332-d85cc79f-712f-49e9-a9b1-85bcad44fb87.png)





### Dashboard Page:
![Dashboard-Dekstop](https://user-images.githubusercontent.com/42398487/174591964-4daafbf8-42f6-4fa3-8694-91ecdd333711.jpg)



### Watchlists Page:
![WatchlistPage](https://user-images.githubusercontent.com/42398487/174592283-1bc3fe6a-87c0-4e80-bf0b-cf44edcb1aaf.png)




### Transactions Page:
![TransactionsPage](https://user-images.githubusercontent.com/42398487/174592498-2a67850b-b918-4daf-a08a-e4a7b1bfb8f9.png)




### News Page:
![NewsPage](https://user-images.githubusercontent.com/42398487/174593074-60e73e04-2212-4493-a999-06cc081b91f3.png)










<br/>
<br/>
<br/>

## Entity Relationship Diagram (ERD):
![ERD V2](https://user-images.githubusercontent.com/42398487/174279849-be1fb973-4b65-4c4c-b027-d38be4780b50.png)







<br/>
<br/>
<br/>

## Routes Table:

### Users Routes:
|Name  |Path   |HTTP Verb |Purpose|
|:----|:-----|:--------|:-----|
|REGISTER |/signup|GET       |Shows signup page|
|LOGIN |/login|GET       |Shows login page|
|LOGOUT |/logout|GET       |Logs the user out and destroys the session|
|CREATE |/signup|POST       |Create/Signup a new user|
|LOGIN |/login|POST       |Logs the user in|


### Transaction Routes:
|Name  |Path   |HTTP Verb |Purpose|
|:----|:-----|:--------|:-----|
|INDEX |/transactions|GET       |Shows all transactions|
|EDIT |/transactions/edit/:id|GET    |Shows the form for the user to edit the transaction|
|CREATE |/transactions|POST    |Creates a new transaction|
|DESTROY |/transactions/:id|DELETE    |Deletes the transaction with the given ID|
|UPDATE |/transactions/:id|PUT    |Updates the transaction with the given ID|

### Watchlists Routes:
|Name  |Path   |HTTP Verb |Purpose|
|:----|:-----|:--------|:-----|
|INDEX |/watchlists|GET       |Shows all the watchlist of the user loggedIn|
|NEW |/watchlists/new|POST    |Renders the new watchlist form|
|SHOW |/watchlists/search|POST    |Shows one watchlist with the given ID|
|EDIT |/watchlists/edit/:id|GET    |Shows the form for the user to edit the watchlist|
|CREATE |/watchlists/|POST    |Creates a new watchlist|
|UPDATE |/watchlists/edit/:id|PUT    |Updates the wathclist with the given ID|
|DESTROY |/watchlists/:id|DELETE    |Deletes the watchlist with the given ID|

### Stocks Routes:
|Name  |Path   |HTTP Verb |Purpose|
|:----|:-----|:--------|:-----|
|CREATE |/stocks/search|POST       |Creates a new stock|
|SHOW |/stocks/search/:symbol|POST       |Shows the stock with the given ID|

<br/>
<br/>
<br/>

## Technologies Used

- HTML
- CSS
- Javascript
- EJS (Template Engine)
- Tailwindcss
- Node.js
- Express
- MongoDB/Mongoose Database (Atlas)
- Stocks API (https://www.alphavantage.co/)
- Stocks API (https://twelvedata.com)
- News API (https://newsapi.org/)
- Heroku

<br/>
<br/>

## MVP Requirements:

- [X] CRUD functionality for Stocks transactions.
- [X] CRUD functionality for Stocks watchlists.
- [X] CRUD functionality for Stocks in the watchlists.


## Stretch goals / ICE BOX:

- [x] Integrate a news api, so the users can also have information about latest news of the stocks on their watchlists.
- [x] Responsive design
- [ ] Add a userProfile Schema and page so other users can view the watchlists of other users.
- [ ] Implement OAuth authentication to be able to login using their google account.
- [ ] Refactor front-end using ReactJS
