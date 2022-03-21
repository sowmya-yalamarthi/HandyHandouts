Feature: Handy-Handout

  Scenario: Welcome Page
    Given I invoke chrome driver
    And I login into application url "https://handy-handouts.herokuapp.com/"
    Then I validate Welcome Page loaded sucessfully
    And I quit the browser


  Scenario: Register
    Given I invoke chrome driver
    And I login into application url "https://handy-handouts.herokuapp.com/"
    And I click on Register
    And I enter user First name "Library"
    And I enter user Last name "Books"
    And I enter username
    And I enter password "Halloween"
    When I click on register button
    Then I validate register successfully
    And I quit the browser

  Scenario: Login error validation
    Given I invoke chrome driver
    And I login into application url "https://handy-handouts.herokuapp.com/"
    And I click on login
    When I click on Login button
    Then I validate error message
    And I quit the browser





