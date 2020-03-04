Feature: Testing incident API'S
  Description: Testing incident API'S

  @e2e
  Scenario Outline: Login Micro Service
  Description: Login into NAD with Project Manager Credentials

    When I GET <url>
    Then response code should be <status_code>
    And I store the value of body path $.features[0].id as incidentId in global scope
    And I store the value of body path $.features[0].properties.headline as headlineTxt in global scope
    And I store the value incidentId at path incidentId in jsonfile <filepath>
    And I store the value headlineTxt at path headline in jsonfile <filepath>

    Examples:
      |url                           |status_code|filepath|
      |/traffic/hazards/incident.json|200        |./testdata/api/incident.json|
