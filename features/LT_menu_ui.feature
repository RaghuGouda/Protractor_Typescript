Feature: Live Traffic Website-Menu

    Background:
        Given I am at the LiveTraffic Website

    @e2e
    Scenario: Verify display of menu items and page footers
        Then I should see the LiveTraffic Website Home page
        When I go to live traffic menu page
        Then I should see all the menu items and links
            | menu_items             |
            | Home                   |
            | Roadwork & Hazard List |
            | Traffic Cameras        |
            | Help                   |
            | @LiveTrafficNSW        |
            | @LiveTrafficSyd        |
            | /LiveTrafficNSW        |
            | Privacy                |
            | Terms                  |
            | Copyright              |
        And I should page footer


    @e2e
    Scenario: Verify display of map options in the homepage
        Then I should see map filter options list as default
            | Filters                       |
            | Roadwork                      |
            | Bushfire                      |
            | Flood                         |
            | Show future incidents         |
            | Traffic Flow                  |
            | Live Traffic Cameras          |
            | Rest Areas                    |
            | Heavy Vehicle Safety Stations |


    @e2e
    Scenario: Verify display of map legends
        When I Navigate to Legend section
        Then I should see all the legend details
            | Legend         |
            | Incident Types |
            | Other Types    |
            | Time           |
            | Severity Types |
            | Lanes Affected |
            | Area Affected  |

    @e2e @demo
    Scenario: Verify hide and show map options
        When I choose Hide map options
        Then I should not see any map options in the menu
        When I choose Show map options
        Then I should see map options back in the menu
        

    
