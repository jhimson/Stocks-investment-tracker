# TheHood - Stocks Investment Tracker


# Premise


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






## Entity Relationship Diagram (ERD):

![ERD](https://user-images.githubusercontent.com/42398487/173120149-16b60d49-4697-4aa9-a17b-93f2babc60df.png)



## Routes Table:
|Name  |Path   |HTTP Verb |Purpose|
|:----|:-----|:--------|:-----|
|INDEX |/stocks|GET       |Show all transactions|
|SHOW |/stocks/:id|GET       |Show the stock transaction details|
|EDIT |/stocks/edit/:id|GET    |Shows the form for the user to edit the transaction|
|NEW |/stocks/new|POST    |Create new transactions|
|UPDATE |/stocks/:id|PUT    |Updates the transaction with the given ID|
|DESTROY |/stocks/:id|DELETE    |Deletes the transaction with the given ID|



## Technologies Used

- HTML
- CSS
- Javascript
- Node.js
- Express
- EJS
- Tailwindcss

## How to use:



## MVP Requirements:

- [ ] Signup and Login Functionality.
- [ ] CRUD functionality for Stocks transactions.
- [ ] CRUD functionality for Stocks watchlists.
- [ ] Search functionality for a stock details using Stocks API.
- [ ] Update the front-end codebase to React.js, to make it a Full-Stack MERN application.


## Stretch goals / ICE BOX:

- [ ] Add a userProfile Schema and page so other users can view the watchlists of other users.
- [ ] Integrate a news api, so the users can also have information about latest news of the stocks on their watchlists.
- [ ] Implement OAuth authentication to be able to login using their google account.
- [ ] Update the front-end codebase to React.js, to make it a Full-Stack MERN application.
