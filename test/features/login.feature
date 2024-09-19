Feature: Login Feature
    This test will check different scenerio of login such as valid and invalid login

    Background:
        Given I am on the home page

    @valid
    Scenario Outline: TS-001: Log-in with valid username and password
        When I click on my account from the menu
        Then I should be on login-register page
        When I type <username> in the username field
        And I type <password> in the password field
        And I click on the login button
        Then I should see <username> in my account page

        Examples:
            | username | password   |
            | rafi123  | Xyz1234... |

    @invalid

    Scenario Outline: TS-002: Log-in with invalid username or password
        When I click on my account from the menu
        Then I should be on login-register page
        When I type <username> in the username field
        And I type <password> in the password field
        And I click on the login button
        Then I should see this <message>

        Examples:
            | username | password   | message                                                      |
            | rafi1234 | abcd123    | Error: The username rafi1234 is not registered on this site. |
            | rafi123  |            | Error: Password is required.                                 |
            |          | Xyz1234... | Error: Username is required.                                 |
            |          |            | Error: Username is required.                                 |

    Scenario: TS-003: Log-in -Password should be masked
        When I click on my account from the menu
        Then I should be on login-register page
        When I type <username> in the username field
        And I type <password> in the password field
        And I click on the login button
        Then I should see this <message>