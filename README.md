# Puppeteer with Jest - Page Object Model - Automation

Design Page Objects and run Tests

## Run application

Clone the repository

```bash
git clone https://github.com/JayKishoreDuvvuri/Puppeteer-Jest-Page-Object-Automation-Framework
```

Install dependencies

```bash
Install Node modules with command : npm i
```

Run test

```bash
Test Execution Sequentially (OR) Parallel
npm run test (OR) npm test                   #For Parallel execution
npm test addToCart.test.js                   #For running individual test
```

Folder Structure

    ├── ...
    │
    ├── pages                               # Generic functionality for tests
    │   |
    │   ├── BasePage.js                     # Base page testing functionality
    │   ├── LandingPage.js                  # Landing page testing functionality
    │   ├── AddToCartPage.js                # Add To Cart page testing functionality
    │   ├── ProductPage.js                  # Product page testing functionality
    │
    ├── test                                # Test suite
    │    ├── addToCart.test.js              # Automated Test Script
    │    ├── checkTotalPrice.test.js        # Automated Test Script
    │    ├── productNames.test.js           # Automated Test Script
    │    ├── toggleProductColour.test.js    # Automated Test Script
    │
    │
    │── config.js                           # Confiuguration JavSacript File
    │
    │
    ├── utils                               # Utility files for testing
    │    ├──locators.js                     # HTML and CSS identifier for elements to test
    │
    │
    ├──  allure-results                     # allure generate {Directory} [on terminal]
    │
    └─── allure-report                      # allure open                 [on terminal]

Generate Allure Test Report

```bash
Run on Terminal :
        |
        ├── allure generate --clean (OR) allure generate --clean --output allure-report  
        │
        ├── allure open
```

# Docker Locally
```bash
docker build -t puppeteer:v1 .
docker run -it puppeteer:v1      
```

# From Docker Hub
```bash
docker pull jaykishoreduvvuri/puppeteer:v1   
docker run -it jaykishoreduvvuri/puppeteer:v1      
```