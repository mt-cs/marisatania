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
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

<img width="1351" alt="website-header" src="https://user-images.githubusercontent.com/60201466/208043214-533bfe3e-3342-48f4-9ad9-dcb12e992078.png">

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

To generate the color pallette, use ColorBrewer 2.0: https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3

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
* To make code changes and test it locally, it is recommended to use extensions like `Live Server` for `VS Code` and launch a live server
* You can aldo double click the `index.html` to run the website on your localhost

### Directory

Here is the structure of this directory:
```
finalProject/
├─ assets/
  ├─ css/
  ├─ data/
  ├─ fonts/
  ├─ img/
  ├─ js/
  ├─ src/
├─ index.html
├─ README.md
```

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
* Hover over the small-multiple line charts to show the year and market value.
<img width="300" alt="line-chart" src="https://user-images.githubusercontent.com/60201466/208044253-926e9e46-82ca-4702-ac33-de6a585d9175.png">

* Scroll horizontally on the interactive small multiple-line chart to highlight all three markets and see the comparison
<img width="600" alt="interactive-line-chart" src="https://user-images.githubusercontent.com/60201466/208044058-381d7ec0-d5d1-41e1-9a67-a43ccd2b61a2.png">

* Hover over each circle of the bubble chart to show the year, consumptions volume, and CO2 emissions
<img width="1000" alt="emissions-charts" src="https://user-images.githubusercontent.com/60201466/208044669-7ddbd6ec-2eb1-4fe2-a650-123c2724b7ee.png">

* Hover over the each point of the radar graph to show the score percentage of each subcategories
<img width="350" alt="radar-graph" src="https://user-images.githubusercontent.com/60201466/208044894-8ca9c72d-0547-48bd-ac44-6a8b8c1da70c.png">

* Click the two buttons on top of the lollipop chart to sort by brand name or by score
* Hover on the lollipop circle to show the score of each brand
<img width="350" alt="lollipop-chart" src="https://user-images.githubusercontent.com/60201466/208045018-921734f3-28ce-4b5d-95fb-beb06c69a085.png">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact
For more information, feel free to reach out at: mtania@dons.usfca.edu

