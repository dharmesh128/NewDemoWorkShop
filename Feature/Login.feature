@tag
Feature: Login Action
  Test Login Functionality

  @tag2
  Scenario Outline: Successfull login with valid credentials
    Given navigate to home page
    When user enters "<username>" and "<password>"
    Then Message login sucessfully

    Examples: 
      |username|password|
      |shahrukh@khan.com|omshanti|
      |anild@gmail.com|anilanil|
      |karthik456@gmail.com|karthik456|
