<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br/>
<div align="center">
  <img src="https://user-images.githubusercontent.com/60201466/206052990-e2460e60-3b0d-48ec-afc9-ff212aa7ceab.png" alt="Logo" width="250" height="250">
   
  <h3 align="center">Daily Planner</h3>
  <p align="center">
    Daily Planner for Developers
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
    <li>
      <a href="#developer-guide">Developer Guide</a>
      <ul>
        <li><a href="#development-branch">Development Branch</a></li>
        <li><a href="#database-setup">Database Setup</a></li>
        <li><a href="#google-credentials">Google Credentials</a></li>
        <li><a href="#installation">Configuration</a></li>
        <li><a href="#create-power-up">Create Power-Up</a></li>
        <li><a href="#run-server">Run Server</a></li>
        <li><a href="#get-dev-plugin-id">Get Dev Plugin ID</a></li>
      </ul>
    </li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#diagrams">Diagrams</a></li>
    <li><a href="#wireframes">Wireframes</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#other">Other</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

<img width="1351" alt="daily-planner-board" src="https://user-images.githubusercontent.com/60201466/206057074-1bd38d7e-c8e4-4386-b818-465ca7f4302c.png">

Daily Planner is a [Trello Power-Up](https://support.atlassian.com/trello/docs/what-are-power-ups/) that integrates Google Calendar events, Jira tickets, and GitHub Issues into a single weekly plan view. The Power-up enables users to organize tasks from the three platforms by day using a proven strategy called timeblocking.

This Fall 2022 project scope focuses on building the foundation and core functionality of the Daily Planner Board and Google Calendar integration. Users can create their board using the provided Daily Planner Template, add a seven days to-do list, and connect tasks from their calendar.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

These are major frameworks/libraries used in this project:

* [![JavaScript](https://img.shields.io/static/v1?label=&message=JavaScript&color=F7DF1E&logo=JavaScript&logoColor=FFFFFF)](https://www.javascript.com/) 
* [![Python](https://img.shields.io/static/v1?label=&message=Python&color=3776AB&logo=Python&logoColor=FFFFFF)](https://www.python.org/) 
* [![Flask](https://img.shields.io/static/v1?label=&message=Flask&color=000000&logo=Flask&logoColor=FFFFFF)](https://flask.palletsprojects.com/en/2.1.x/) 
* [![SQLite](https://img.shields.io/static/v1?label=&message=SQLite&color=0F52BA&logo=SQLite&logoColor=FFFFFF)](https://www.sqlite.org/index.html) 
* [![SQLAlchemy](https://img.shields.io/static/v1?label=&message=SQLAlchemy&color=C70039&logo=SQLAlchemy&logoColor=FFFFFF)](https://www.sqlalchemy.org/)

<!-- GETTING STARTED -->
## Getting Started

Here are instructions on setting up your project locally.

### Prerequisites

#### Installing python with homebrew
* Homebrew is a Package Manager used to install MacOS development tools. 
* Install it first if you don't already have it. https://brew.sh/
* Should be a simple `brew install python` but read and follow these instructions.
https://docs.python-guide.org/starting/install3/osx/

#### Install venv for virtual environments
* You may need to run pip install virtualenv if the command `virtualenv` is not found. https://docs.python-guide.org/dev/virtualenvs/#virtualenvironments-ref

Create a virtualenv
```
virtualenv -p python3 .venv
```
#### Get a working virtualenv
Activate the virtual environment
```
source .venv/bin/activate
```

### Installation
Install packages for daily-planner
```
pip install -r requirements.txt
```
Run the flask server
```
flask run
```

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

