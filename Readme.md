# Brew Bro

## Pages
+ Main: Browse by state, browse by tags, search
  + **Browse by state** click on a state to see breweries
  + **Brows by tags** click on a tag to see breweries
  + **Enter a search term** show locations based on search term
  + **Favorites** add a brewery to your favorites

## Routes
+ `/` display list of states, dropdown for sellecting a user
+ `/users` display information for all users
+ `/users/:id` information for a single user
+ `POST: /users/` make a new user and redirect to `/`
+ `POST: /users/:id/favorites` add to a users favorites
+ `GET: /users/:id/favorites` show all a users favorites