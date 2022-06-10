# TheHood


## Premise:
TheHood is a robinhood inspired Full-Stack web application but way less functionalities than robinhood. It is a stocks investment tracker application that will allow a user to keep track all his/her buy and sell transaction of stocks. Users can also create a watchlists of their favorite stocks.


## User Story

##### As a user I want to:

- Be able to Signup and login to an account.
- Be able to create/update/delete a record of stock buy/sell transaction.
- Be able to view all the transaction records that have been created.
- Be able to create/update/delete a watchlist.
- Be able to view all the watchlist that has been created by the user.
- Be able to add/remove stocks from any watchlist created by the user.
- Cannot view/update/delete other records of a different users.
- Be able to look up a specific stock that user is interested to learn more about the company. (Using stocks API)


## Wireframes:

### Login Page:
![Login page](https://user-images.githubusercontent.com/42398487/173120701-8999b8cd-8b5a-49af-96df-4c3833b6d921.png)



### Dashboard Page:
![Dashboard page](https://user-images.githubusercontent.com/42398487/173123139-6cfa67d1-2b89-4bff-9fc8-0f4a712a6717.png)





<br/>
<br/>
<br/>

## Entity Relationship Diagram (ERD):
![ERD](https://user-images.githubusercontent.com/42398487/173135653-cc47cf7e-573b-4092-bf2e-69499375b333.png)





<br/>
<br/>
<br/>

## Routes Table:
|Name  |Path   |HTTP Verb |Purpose|
|:----|:-----|:--------|:-----|
|INDEX |/transactions|GET       |Show all transactions|
|INDEX |/watchlists|GET       |Show all users' watchlist|
|SHOW |/transactions/:id|GET       |Show the stock transaction details|
|SHOW |/watchlists/:id|GET       |Show the watchlist details and all the stocks in the watchlist|
|EDIT |/transactions/edit/:id|GET    |Shows the form for the user to edit the transaction|
|EDIT |/watchlists/edit/:id|GET    |Shows the form for the user to edit the watchlist|
|NEW |/transactions/new|POST    |Create new transactions|
|NEW |/watchlists/new|POST    |Create new watchlist|
|UPDATE |/transactions/:id|PUT    |Updates the transaction with the given ID|
|UPDATE |/watchlists/:id|PUT    |Updates the watchlist with the given ID|
|DESTROY |/transactions/:id|DELETE    |Deletes the transaction with the given ID|
|DESTROY |/watchlists/:id|DELETE    |Deletes the watchlist with the given ID|


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
- Stocks API

## How to use:



## MVP Requirements:

- [ ] CRUD functionality for Stocks transactions.



## Stretch goals / ICE BOX:

- [ ] Add a userProfile Schema and page so other users can view the watchlists of other users.
- [ ] Integrate a news api, so the users can also have information about latest news of the stocks on their watchlists.
- [ ] Implement OAuth authentication to be able to login using their google account.
- [ ] Update the front-end codebase to React.js, to make it a Full-Stack MERN application.
