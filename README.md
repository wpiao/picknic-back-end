# picknic-back-end

**Team member:** Alexander Williams, Daniel Dills, Garfield Grant, Wenhao Piao

## Project name: PICKNIC

The concept of this project is to have the user search and save a list of their fave restaurants and give that restaurant a rating.

## How to start the server

1. Clone the repo
2. Run command `npm i` to install the dependencies
3. Create .env file in the root folder
4. In .env file, set the following variables:
   - `PORT=5000`
   - `YELP_BUSINESS_ENDPOINT=https://api.yelp.com/v3/businesses`
   - `YELP_API_KEY=<YOUR_YELP_API_KEY>`
   - `MONGODB_URI=mongodb://localhost:27017/business`
5. Run command `npm run dev` or `npm start` to start the server

## User Stories

[Trello Link](https://trello.com/b/YCSNFquJ/picknic)

1. As a user, I want to search restaurant by keyword and location and see it.
2. As a user, I want to favor restaurants and see them on my profile page.
3. As a user, I want to rate the restaurants and see the ratings on my profile page.
4. As a user, I want to delete the saved restaurants when I don't like them anymore.
5. As a user, I want to sign into the app and see the user profile.
6. As a user, I want to be able to change the rating on saved restaurants.

## Wireframes

![Wireframes1](./assets/wireframe1.png)
![Wireframes2](./assets/wireframe2.png)
![Wireframes3](./assets/wireframe3.png)

## Domain Modeling

![domain modeling](./assets/domain_modeling.png)

## Software Requirements

[Software Requirements](./requirements.md)

## Team Agreement

[Team Agreement](./team-agreement.md)

## Resources

- [Frontend repo URL](https://github.com/wpiao/picknic-front-end)
- [Backend repo URL](https://github.com/wpiao/picknic-back-end)
- [Frontend Live URL](https://picknic.club)
- [Backend Live URL](https://picknic-back-end.herokuapp.com/)
