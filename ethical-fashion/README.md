<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br/>
<div align="center">
  <img src="https://user-images.githubusercontent.com/60201466/208038415-8ea9e060-5680-43a9-a806-6dcd0831a5df.png" alt="Logo" width="150">  
  <h3 align="center">Ethical Fashion</h3>
  <p align="center">
    Wear With Care
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
        <li><a href="#website">Website</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">User Manual</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#directory">Directory</a></li>
        <li><a href="#interactivity">Interaction</a></li>
      </ul>
    </li>
    <li><a href="#other">Conclusion</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

<img width="1351" alt="daily-planner-board" src="https://user-images.githubusercontent.com/60201466/208043214-533bfe3e-3342-48f4-9ad9-dcb12e992078.png">

There is a growth in the global shift toward a more ethical way to produce and consume fashion. This project uses D3.js to visualize recent facts and predictions regarding ethical fashion trends. There are four main objectives that this project intends to convey: showcase the comparison of the fashion market value, the correlation between apparel consumption and environmental impact, clothing price comparisons, and companies’ fashion transparency index scores. The website presents a story and unique findings from each visualization objective. Additionally, this paper discusses future features that are likely to be implemented.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Website
The project website is deployed with Github Page: https://mt-cs.github.io/marisatania/ethical-fashion/

For the best interaction experience, use Google Chrome on 100% view scale.

### Built With

These are major frameworks/libraries used in this project:

* D3.js 7.7.0: https://d3js.org/d3.v7.min.js
* D3 SVG Legend 2.25.6: https://cdnjs.cloudflare.com/ajax/libs/d3-legend/2.25.6/d3-legend.min.js
* D3 Annotation: https://cdn.rawgit.com/susielu/d3-annotation/75ff6169/d3-annotation.js

<!-- User Manual -->
## User Manual

Here are instructions on setting up your project locally.

### Prerequisites
* D3.js is an open-source library and the source code of the library is freely available on the web at https://d3js.org/ website. * Download the D3.js v7. As of now, the latest version is 7.7.0.
* After the download is complete, unzip the file and look for d3.min.js.
* Copy the d3.min.js file and paste it into your project's root folder or any other folder, where you want to keep all the library files.

### Installation
* Git clone this repository: https://github.com/mt-cs/marisatania.git
* Go to the ethical fashion folder
```
cd ethical-fashion
```
* Double click the `index.html` to run the website locally


### Directory

* The D3 javascript files are under assets/js/d3 folder
* The main CSS is assets/css/style.css
* The html codes that are combined using iframe are located in assets/src
* The datasets used in this project can be found in assets/data or these following gist links:
  * fashion-market-category.tsv: https://gist.github.com/mt-cs/67498e4c1eb3eae2b8801e1a86e6193b
  * fti-top-25-brand.csv: https://gist.github.com/mt-cs/39bc9845f47653d77bda0aaf5d3951f1
  * fti-top-25.csv: https://gist.github.com/mt-cs/219b191cff5410314e52f0b842318410
  * global-emissions-bubble.csv: https://gist.github.com/mt-cs/af63c6fa10b442d81bb042ca15cdc152
  * global-emissions.csv: https://gist.github.com/mt-cs/89d001bcf619ef775dc1597bf6f17887
  * global-fashion-market.csv: https://gist.github.com/mt-cs/b96f60535299afcbebf3085302d450ba
  * male-price.csv: https://gist.github.com/mt-cs/7a7a015f377f35babfc698386dc2ec65
  * female-price.csv: https://gist.github.com/mt-cs/0769e3b43e00311427476811832c7d31
  * consumption-emissions.csv: https://gist.github.com/mt-cs/a0ab1582a2fefb5b6bbe383f9fc414a2
 
  

### Interaction

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Developer Guide
Steps to run Daily Planner in local environment during development stage:

### Development branch
* Git clone https://github.com/good-river/daily-planner.git
* Create a new working branch from `dev`
```
git checkout -b {NEW_BRANCH} dev
```
* Install dependencies
```
pip install -r requirements.txt
```

### Database Setup
* Migration
```
flask db migrate
```
* Upgrade
```
flask db upgrade
```
* For development: clean up user table
```
sqlite3 app.db
```
```
delete from user;
```

### Run Server
* Run flask
```
flask run --port={PORT} 
```
* Run [Ngrok](https://ngrok.com/download)
```
ngrok http --host-header=rewrite {PORT}
```

### Google Credentials

<img src="https://user-images.githubusercontent.com/60201466/206065901-8f0f8834-8210-4e0b-837f-beb59b55ca6e.png" alt="Google-Trello" width="275">

In order to integrate Google Calendar, we need to setup Google developer credentials.
* Go to https://console.cloud.google.com/apis/credentials
* Sign in with your Google account if you haven't already
* Add your email to the test users section on the Oauth consent screen https://console.cloud.google.com/apis/credentials/consent
* Get your API key https://console.cloud.google.com/apis/credentials/key/
* Create OAuth client https://console.cloud.google.com/apis/credentials/oauthclient/
* Add your NGROK URL to Authorized Javascript Origin
* Save your credentials information

### Configuration
Add local development values by creating an .env file:
```
TEMPLATE_BOARD_ID={636b554ea9418404ce8d63b9}
API_KEY={API key}
URL={NGROK HTTPS URL}
PLUGIN_ID={Daily Planner Trello Power-Up Plugin ID}
GOOGLE_CLIENT_ID={Google client ID}
GOOGLE_API_KEY={Google API key}
```

### Create Power-Up

* Go to https://trello.com/power-ups/admin and create a power-up using these Iframe connector URLs:
    * Daily Planner: `https://[NGROK URL].ngrok.io/template/index.html`
* Remember to adjust power-up capabilities as needed: `Board buttons`
* Go to the power-up's API-key section. You can create a new API key or add the existing API key from https://trello.com/app-key/. Update the API_KEY in your `.env`
* Add Ngrok public URL to the power-up allowed origins as well as https://trello.com/app-key/ allowed origins section.
* Add Daily Planner power-up to your Trello board
* Click the daily planner button and an pop up should redirect you to Daily Planner template

You can also go directly to Daily Planner Template:
* Create board from the public Daily Planner Template: https://trello.com/b/fKUVJSrY/daily-planner
* Add Daily Planner power-up to your Daily Planner Template board
* Click the daily planner button and an authorization modal should pop up.

### Get Dev Plugin ID
If you are running a new power-up for the first time, you want to update the idPlugin in your `.env`. 

Get the ID plugin from the JWT printed on the console and decode it through https://jwt.io/. Copy the idPlugin and update your `.env`


## Tests
Run on command line for automated testing:
```
touch conftest.py
```

Run all tests:
```
pytest
```

Run an individual test:
```
pytest /directory_of_the_test.py
```


## Diagrams
### Front End
![Architecture-App-Front-End](https://user-images.githubusercontent.com/60201466/206064610-cdefe712-4f24-470c-bd39-ae517337e6f6.png)

### Back End
![Architecture-Platform-Backend](https://user-images.githubusercontent.com/60201466/206064746-a1cf0771-8786-4b9a-a5e0-69f5dbcefd06.png)


## Wireframes
### Board Design
![Architecture-App-Board-Design](https://user-images.githubusercontent.com/60201466/206065203-e440a8de-6912-4c38-931f-43250fdef46c.png)

### Application Flow
![Architecture-App-Flow](https://user-images.githubusercontent.com/60201466/206064868-3ec4f8b1-701d-4cd0-9210-006775ae2c09.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] A pre-configured Trello Template Board user-interface that shows each day of the week as an individual list
- [x] Create an authorization page on the Trello to get user consent and token
- [x] Set up database and store Trello’s token to the database
- [x] Set up configuration files
- [x] Create left and right arrow buttons to load different week
- [x] Create an authorization page to get consent from the user to access their Google Calendar
- [x] A modal display that adds Google Events to Trello Cards

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Other
For more information, please check: https://whimsical.com/daily-planner-L4VqSeT6GsJ9fi5AtXizcu

