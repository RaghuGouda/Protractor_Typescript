import {Before, Given, setDefaultTimeout, Then, When,TableDefinition} from 'cucumber';
import { LTHomePage } from "../pages/LT_home.po";
import { LTSideMenuBar } from "../pages/LT_sidemenubar.po";



     const LTHomepage: LTHomePage = new LTHomePage();
     const LTSidemenuBar: LTSideMenuBar = new LTSideMenuBar();

     When(/^.*I go to live traffic menu page$/, async () => {
         // await LTHomepage.clickLiveTrafficTMenu();
         console.log("*I go to live traffic menu pag");
         
     });
     Then(/^.*I should see all the menu items and links$/,  async (table: TableDefinition) => {

      /*    await LTHomepage.clickLiveTrafficTMenu();
          const rows = table.hashes();
          for (let i = 0; i < rows.length; i++) {
              await LTSidemenuBar.verifySideMenuItem(rows[i].menu_items);
          }
     */
          console.log("I should see all the menu items and links");
          LTSidemenuBar.verifySideMenuItems();

     });

     Then(/^.*I should page footer$/, async () => {
          await LTSidemenuBar.verifySideMenuItem("TfNSW-Logo");
     });

     Then(/^.*I should see map filter options list as default$/, async (table: TableDefinition) => {
          await LTSidemenuBar.verifyMapFilterOptions();
     });

     Then(/^.*I Navigate to Legend section$/, async () => {
          await LTSidemenuBar.NavigateToLegendSection();
     });

     Then(/^.*?I should see all the legend details$/, async (table: TableDefinition) => {
          await LTSidemenuBar.verifyMapLegends();
     });

     When(/^.*I choose Hide map options$/, async () => {
          await LTSidemenuBar.clickShowHideMapOption();
     });

     Then(/^.*I should not see any map options in the menu$/, async () => {
          await LTSidemenuBar.verifyNoMapFilterOptionsDisplay();
     });

     When(/^.*I choose Show map options$/, async () => {
          await LTSidemenuBar.clickShowHideMapOption();
     });

    Then(/^.*I should see map options back in the menu$/, async () => {
          await LTSidemenuBar.verifyMapFilterOptions();
     });

