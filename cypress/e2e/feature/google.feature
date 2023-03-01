Feature: Google Test

  Scenario Outline: Make a search and validate "<Length>" <amount>
    Given I open Google page
    When search by "<searchBy>"
    Then the result should be "<Length>" and have <amount>

    Examples: 
      | searchBy | Length      | amount |
      | apple    | greaterThan | 100000 |
      | apple    | lessThan    |  10000 |
