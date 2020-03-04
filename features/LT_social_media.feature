Feature: Live Traffic Website-Social Media

    Background:
        Given I am at the LiveTraffic Website
        Then I should see the LiveTraffic Website Home page

    @e2e @media @demo
    Scenario Outline: Navigate to LiveTraffic-NSW Twitter page from LiveTraffic Website
        When I navigate to LiveTraffic Twitter account from "<social-media>" link on the side menu
        Then I should see the LiveTraffic Twitter page for "<social-media>" link
        Then I close LiveTraffic "Twitter" page

        Examples:
            | social-media    |
            | @LiveTrafficNSW |

    @e2e @media
    Scenario Outline: Navigate to LiveTraffic-SYD Twitter page from LiveTraffic Website
        When I navigate to LiveTraffic Twitter account from "<social-media>" link on the side menu
        Then I should see the LiveTraffic Twitter page for "<social-media>" link
        Then I close LiveTraffic "Twitter" page

        Examples:
            | social-media    |
            | @LiveTrafficSyd |

    @e2e @media @demo
    Scenario Outline: Navigate to LiveTrafficNSW Facebook page from LiveTraffic Website
        When I navigate to LiveTraffic FaceBook account from "<social-media>" link on the side menu
        Then I should see the LiveTraffic FaceBook page for "<social-media>" link
        Then I close LiveTraffic "facebook" page

        Examples:
            | social-media    |
            | /LiveTrafficNSW |

    @e2e @media
    Scenario: Navigate to Transport for NSW Home page from LiveTraffic Website
        When I click on Transport for NSW logo button from Live Traffic side menu bar
        Then I should see the Transport NSW site launched in the new tab
        Then I close LiveTraffic "TfNSW Home" page
        

