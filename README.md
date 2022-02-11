<div id="top"></div>

<br />
<div align="center">
  <h3 align="center">MelCoinBoard</h3>

  <p align="center">
    A WebApp that allows you to follow Cryptos' News and Stats.
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Screenshots</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

In order to transform the idea into a real functional product, the list bellow of technologies & tools were used:

* [RapidAPI](https://rapidapi.com/hub)
* [React.js](https://reactjs.org/)
* [Material-UI](https://mui.com/)
* [Redux toolkit](https://redux-toolkit.js.org/)
* [React-Redux](https://react-redux.js.org/)
* [React-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)
* [Chart.js](https://www.chartjs.org/)
* [React-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component)
* [React-sparklines](https://github.com/borisyankov/react-sparklines)
* [Rxjs](https://rxjs.dev/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and npm to be installed in your local machine. Verify that by executing 
* node
  ```sh
  node -v
  ```
* npm
  ```sh
  npm -v
  ```

### Installation

In order to interact with real data the project uses some API endpoints from [RapidAPI](https://rapidapi.com/hub) and [https://www.coingecko.com/en/api](https://www.coingecko.com/en/api)

1. Get API Keys at:
    * [https://rapidapi.com/Coinranking/api/coinranking1/](https://rapidapi.com/Coinranking/api/coinranking1/)
    * [https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/free-news/](https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/free-news/)
2. Clone the repo
   ```sh
   git clone https://github.com/Ghassen-Ben-Othmen/cryptowatch
   ```
3. Add `.env` file:
   ```sh
   REACT_APP_RAPID_API_COINRANKING_HOST=
   REACT_APP_RAPID_API_COINRANKING_KEY=
   REACT_APP_RAPID_API_FREENEWS_HOST=
   REACT_APP_RAPID_API_FREENEWS_KEY=
   GENERATE_SOURCEMAP=false
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the project
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


[home-screenshot]: screenshots/home.png
[coinDetail-screenshot]: screenshots/coinDetail.png
[coins-screenshot]: screenshots/coins.png
[exchanges-screenshot]: screenshots/exchanges.png
[news-screenshot]: screenshots/news.png
