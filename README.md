# TMBD/React technical test

This is a simple project with React, pulling from the renown The MOvie DB (TMDB) to display a list of popular shows and movies, as well as showing a detailed view of the selected show or moviw when clicking on it.

## Stack

Although it was not specified in the technical test document, in order to circumvent the CORS limitation whern accessing the API, I have set up a **small backend submodule** that uses Express, Axios & CORS to allow the front submodule to send the requests to the API through this small pseudoserver.

A lot of coffee was also involved in the making of this project, althought it was not installed from npm.

On the front-end I did not require

## Starting the app

- Open two terminals from the root project.
- On one terminal, navigate to cd back and run `npm run start`. The directory will start the server on localhost:8000.
- On the second terminal, navigate to cd front and again run `npm run start`. The `start`command has been modified with the `--open`flag so that, after compiling, the front app will open your preferred web browser automatically.