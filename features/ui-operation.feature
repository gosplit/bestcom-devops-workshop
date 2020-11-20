Feature: UI Operations
 
    Scenario: Demo1 - Google Search
        When go to "<url>"
        And search for "<search text>"
        Then the page title will become "<title>"
    Examples:
           | url                       | search text | title                      |
           | https://www.google.com/ncr | webdriver   | webdriver - Google Search |
          # | https://www.google.com/ncr | webdriver   | 錯誤示範這一步會失敗      |
