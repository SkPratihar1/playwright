
# login.feature

Feature: Login Functionality

  Scenario: Successful Login
    Given I am on the login page
    When I enter my username "student" and password "Password123"
    And I click the login button
    Then I should be logged in successfully

