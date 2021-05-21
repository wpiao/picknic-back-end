# Software Requirements -

1. What is the vision of this product?
   The vision of this product is to allow users to search for, and save restaurants to their profile to view later.

2. What pain point does this project solve?
   This project solves the user's issue of scrolling through endless lists of restaurants to decide what to eat. By allowing a user to save their selected restauratns, they can quickly decide where and what to eat.

3. Why should we care about your product?
   This product fights the paradox of choice and allows the user to focus and quickly decide where, and what to eat.

## Scope (In/Out)

IN - What will your product do

- This web app will allow users to save restaurants to their profile
- This web app will allow users to search for new restaurants to add to their profile
- This web app will allow users to rate restaurants for quick reference when searching for something to eat in the future
- This web app will allow users to save their preferred meals from the restaurant, for easy access to view later

OUT - What will your product **NOT** do

- This product will not order the food for the user
- This product will not make reservations for the user

## MVP functionality

- User will have acces to create profile with Auth0
- User will be able to search for restaurants using API call
- User will be able to save list of fave restaurants
- User will have the functionality to go to their list to delete and or update restaurant rating.

## Functional Requirements

1. The user will be able to create their own account with Auth0
2. The user will be able to search for restaurants in their local or specified area
3. The user will be able to save restaurants from their search to their personal list of restaurants
4. The user can delete saved restaurants from their personal list

### Data Flow

1. The user will first log in to the app with Auth0 and the app will retrieve their location and display local restaurants on the main page using the Yelp API.
2. The user will then be able to search for local restaurants utilizing the Yelp API which will retrieve the results and render them to the screen.
3. The user will then be able to select restaurants from the search results and save them to their user profile within the database.
4. The user will then be able to be able to view their saved restaurants and decide whether to view them or delete them from the user's profile.

### Non-Functional Requirements

The system shall allow users availability to search for restaurants whenever needed. This availability will give users the freedom to choose when to search for restaurants.
The web app will display accurate results. Displaying accurate results will allow the user to make informed choices on what restaurants to attend.
The system shall be lightweight to allow users reliable performance when using the app. Reliable performance will increase user retention and allow for a positive user experience.
