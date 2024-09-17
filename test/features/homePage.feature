Feature: Home Page
  This test checks different functionality of home page

  Background:
    Given I am on the home page

  Scenario: TS-001:Home Page with three sliders only
    When I click on shop menu
    Then I should be on the shop page
    When I click on the home menu
    Then I should see home page has only 3 sliders

  Scenario: TS-002:Home Page with three arrivals only
    When I click on shop menu
    Then I should be on the shop page
    When I click on the home menu
    Then I should see home page has only 3 arrivals

  Scenario: TS-003:Images in arrivals should navigate
    When I click on shop menu
    Then I should be on the shop page
    When I click on the home menu
    Then I should see home page has only 3 arrivals
    When I click on the first image in the arrivals
    Then I should be on prodcut description page
    And There should a basket button is visible

  Scenario: TS-004: Home page-Arrivals-Images-Description
    When I click on shop menu
    Then I should be on the shop page
    When I click on the home menu
    Then I should see home page has only 3 arrivals
    When I click on the first image in the arrivals
    Then I should be on prodcut description page
    Then There should be a description regarding that book the user clicked on

  Scenario: TS-005: Home page-Arrivals-Images-Reviews
    When I click on shop menu
    Then I should be on the shop page
    When I click on the home menu
    Then I should see home page has only 3 arrivals
    When I click on the first image in the arrivals
    Then I should be on prodcut description page
    And There should a basket button is visible
    When I click in review tab
    Then There should be a review regarding that book the user clicked on

  Scenario: TS-006: Home page-Arrivals-Images-Add to Basket
    When I click on shop menu
    Then I should be on the shop page
    When I click on the home menu
    Then I should see home page has only 3 arrivals
    When I click on the first image in the arrivals
    Then I should be on prodcut description page
    And There should a basket button is visible
    When I click on the add to basket button
    Then i should see book added message

  @check-out
  Scenario: TS-007:  Home-Arrivals-Add to Basket-Items
    When I click on shop menu
    Then I should be on the shop page
    When I click on the home menu
    Then I should see home page has only 3 arrivals
    When I click on the first image in the arrivals
    Then I should be on prodcut description page
    And There should a basket button is visible
    When I click on the add to basket button
    Then I should see "1 Item" in the menu
    When I click on the item from menu
    Then I should be on the check out page
