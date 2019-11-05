$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/TRAINING_H2A.06.17/Desktop/Selenium/Login/Feature/Login.feature");
formatter.feature({
  "name": "Login Action",
  "description": "  Test Login Functionality",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Successfull login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Message login sucessfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "shahrukh@khan.com",
        "omshanti"
      ]
    },
    {
      "cells": [
        "anild@gmail.com",
        "anilanil"
      ]
    },
    {
      "cells": [
        "karthik456@gmail.com",
        "karthik456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successfull login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "navigate to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.navigate_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"shahrukh@khan.com\" and \"omshanti\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Message login sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.message_login_sucessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfull login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "navigate to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.navigate_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"anild@gmail.com\" and \"anilanil\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Message login sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.message_login_sucessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfull login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "navigate to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.navigate_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"karthik456@gmail.com\" and \"karthik456\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Message login sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.message_login_sucessfully()"
});
formatter.result({
  "status": "passed"
});
});