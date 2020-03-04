import chai = require('chai');
import chaiAsPromised = require("chai-as-promised");
import { browser, by, element, ElementFinder, protractor } from "protractor";

const EC = protractor.ExpectedConditions;
chai.use(chaiAsPromised as any);
const expect = chai.expect;

export class LTSideMenuBar {
    homeButton: ElementFinder;
    roadworkNHazardListButton: ElementFinder;
    trafficCamerasButton: ElementFinder;
    helpButton: ElementFinder;
    twitterLTNSWLink: ElementFinder;
    twitterLTSYDLink: ElementFinder;
    fbLTNSWLink: ElementFinder;
    privacyLink: ElementFinder;
    TermsLink: ElementFinder;
    copyright: ElementFinder;
    TfNSWLogo: ElementFinder;
    SocialMediaLTNSWpageText: ElementFinder;
    twitterLTSYDpageText: ElementFinder;
    TfNSWHomePage: ElementFinder;
    roadworkIcon: ElementFinder;
    bushFireIcon: ElementFinder;
    floodIcon: ElementFinder;
    futureIncidentText: ElementFinder;
    trafficFlow: ElementFinder;
    liveTrafficCameras: ElementFinder;
    restAreas: ElementFinder;
    heavyVehicleSafetyStationOption: ElementFinder;
    incidentTypesLegend: ElementFinder;
    otherTypesLegend: ElementFinder;
    TimeLegend: ElementFinder;
    severityTypesLegend: ElementFinder;
    areaAffectedLegend: ElementFinder;
    lanesAffectedLegend: ElementFinder;
    legendTab: ElementFinder;
    hideMapbutton: ElementFinder;
    showMapbutton: ElementFinder;
   public showhideMapbutton: ElementFinder;

    constructor() {
        this.homeButton = browser.element(by.xpath("//button[contains(.,'Home')]"));
        this.roadworkNHazardListButton = browser.element(by.xpath("//button[contains(.,'Roadwork & Hazard List')]"));
        this.trafficCamerasButton = browser.element(by.xpath("//button[contains(.,'Traffic Cameras')]"));
        this.helpButton = browser.element(by.xpath("//button[contains(.,'Help')]"));
        this.twitterLTNSWLink = browser.element(by.css("a[href='https://twitter.com/LiveTrafficNSW'] > .social-media-text"))
        this.twitterLTSYDLink = browser.element(by.xpath("//span[.='@LiveTrafficSyd']"));
        this.fbLTNSWLink = browser.element(by.css("a[href='https://www.facebook.com/livetrafficnsw/'] > .social-media-text"))
        this.SocialMediaLTNSWpageText = browser.element(by.xpath("//span[contains(text(),'Live Traffic NSW')]"));
        this.twitterLTSYDpageText = browser.element(by.xpath("//span[contains(text(),'Live Traffic Sydney')]"));
        this.privacyLink = browser.element(by.css("//a[contains(.,'Privacy')]"));
        this.TermsLink = browser.element(by.css("//a[contains(.,'Terms')]"));
        this.copyright = browser.element(by.css("//a[contains(.,'Copyright')]"));
        this.TfNSWLogo = browser.element(by.css("[src='tfnsw-logo.svg']"));
        this.TfNSWHomePage = browser.element(by.xpath("//a[@href='https://www.transport.nsw.gov.au/']"));


        this.roadworkIcon = browser.element(by.xpath("//*[@class='mat-icon notranslate main-icon icon--grey mat-icon-no-color'][@ng-reflect-svg-icon='roadwork']"));
        this.bushFireIcon = browser.element(by.xpath("//*[@class='mat-icon notranslate main-icon icon--grey mat-icon-no-color'][@ng-reflect-svg-icon='fire']"));
        this.floodIcon = browser.element(by.xpath("//*[@class='mat-icon notranslate main-icon icon--grey mat-icon-no-color'][@ng-reflect-svg-icon='flood']"));
        this.futureIncidentText = browser.element(by.xpath("//*[@class='has-sub-text'][contains(.,'Show future incidents')]"));
        this.trafficFlow = browser.element(by.xpath("//div[@class='m-15 mat-typography ng-star-inserted']//div[@class='icon-text']/div[.='Traffic Flow']"));
        this.liveTrafficCameras = browser.element(by.xpath("//div[@class='m-15 mat-typography ng-star-inserted']//div[@class='icon-text']/div[.='Live Traffic Cameras']"));
        this.restAreas = browser.element(by.xpath("//div[@class='m-15 mat-typography ng-star-inserted']//div[@class='icon-text']/div[.='Rest Areas']"));
        this.heavyVehicleSafetyStationOption = browser.element(by.xpath("//div[@class='m-15 mat-typography ng-star-inserted']//div[@class='icon-text']/div[.='Heavy Vehicle Safety Stations']"));
        this.incidentTypesLegend = browser.element(by.xpath("//h3[.='Incident Types']"));
        this.otherTypesLegend = browser.element(by.xpath("//h3[.='Other Types']"));
        this.TimeLegend = browser.element(by.xpath("//h3[.='Time']"));
        this.severityTypesLegend = browser.element(by.xpath("//h3[.='Severity Types']"));
        this.lanesAffectedLegend = browser.element(by.xpath("//h3[.='Lanes Affected']"));
        this.areaAffectedLegend = browser.element(by.xpath("//h3[.='Area Affected']"));
        this.legendTab = browser.element(by.css("div[aria-posinset='2'] > .mat-tab-label-content"));
        this.showhideMapbutton = browser.element(by.css(".mat-expansion-indicator"));
        this.showMapbutton = browser.element(by.xpath("//span[@style='transform: rotate(0deg);'']"));


    }


    public async clickSocialMediaLink(mediaLink: string) {

        switch (mediaLink) {
            case "@LiveTrafficNSW":
                await this.twitterLTNSWLink.click();
                break;
            case "@LiveTrafficSyd":
                await this.twitterLTSYDLink.click();
                break;
            case "/LiveTrafficNSW":
                await this.fbLTNSWLink.click();
                break;
            case "TfNSW":
                await this.TfNSWLogo.click();
                break;
            default:
                expect.fail("Please enter valid media link");
                break;
        }
    }

    public async NavigateToLegendSection() {
        
        await browser.sleep(1000);
        await this.legendTab.click();
    }

    public async clickShowHideMapOption() {
        await browser.sleep(1000);
        await this.showhideMapbutton.click();
    }

    public async validateSocialMediaHomePage(mediaLinkName: string) {

        await browser.sleep(2000);
        await this.switchToTabNumber(1);
        //const url = await browser.getCurrentUrl();
        //await browser.get(url);
       //await browser.sleep(7000);

        switch (mediaLinkName) {
            case "@LiveTrafficNSW":
                await browser.wait(EC.visibilityOf(this.SocialMediaLTNSWpageText));
                break;
            case "@LiveTrafficSyd":
                await browser.wait(EC.visibilityOf(this.twitterLTSYDpageText));
                break;
            case "/LiveTrafficNSW":
                await browser.wait(EC.visibilityOf(this.SocialMediaLTNSWpageText));
                break;
            case "TfNSW":
                await browser.wait(EC.visibilityOf(this.TfNSWHomePage));
                break;                
            default:
                // expect.fail("Please enter valid media link")
                expect.fail("Please enter valid media link");
                break;
        }

        //await browser.driver.close();
        //await this.switchToTabNumber(1);

    }


    public async switchToTabNumber(tabIndex: number) {
        return await browser.getAllWindowHandles().then(async (handles) => {
            const newWindowHandle = handles[tabIndex];
            await browser.switchTo().window(newWindowHandle);
        });
    }

    public async closeChildWindow() {
        await browser.sleep(2000);
        //await this.switchToTabNumber(1);
        //await browser.driver.close();
        //await this.switchToTabNumber(0);

        browser.getAllWindowHandles().then((handles) => {
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });

        
    }

    public async verifySideMenuItems() {
        await browser.sleep(2000);
        await browser.wait(EC.visibilityOf(this.homeButton));
        await browser.wait(EC.visibilityOf(this.roadworkNHazardListButton));
        await browser.wait(EC.visibilityOf(this.trafficCamerasButton));
        await browser.wait(EC.visibilityOf(this.helpButton));
        await browser.wait(EC.visibilityOf(this.twitterLTNSWLink));
        await browser.wait(EC.visibilityOf(this.twitterLTSYDpageText));
        await browser.wait(EC.visibilityOf(this.SocialMediaLTNSWpageText));
        await browser.wait(EC.visibilityOf(this.privacyLink));

    }

    public async verifyMapFilterOptions() {

        await browser.sleep(2000);
        await browser.wait(EC.visibilityOf(this.roadworkIcon));
        await browser.wait(EC.visibilityOf(this.bushFireIcon));
        await browser.wait(EC.visibilityOf(this.floodIcon));
        await browser.wait(EC.visibilityOf(this.futureIncidentText));
        await browser.wait(EC.visibilityOf(this.trafficFlow));
        await browser.wait(EC.visibilityOf(this.liveTrafficCameras));
        await browser.wait(EC.visibilityOf(this.restAreas));
        await browser.wait(EC.visibilityOf(this.heavyVehicleSafetyStationOption));

    }

    public async verifyNoMapFilterOptionsDisplay() {

        await browser.sleep(2000);
        await browser.wait(EC.invisibilityOf(this.roadworkIcon));
        await browser.wait(EC.invisibilityOf(this.bushFireIcon));
        await browser.wait(EC.invisibilityOf(this.floodIcon));

    }

    public async verifyMapLegends() {

        await browser.sleep(2000);
        await browser.wait(EC.visibilityOf(this.incidentTypesLegend));
        await browser.wait(EC.visibilityOf(this.otherTypesLegend));
        await browser.wait(EC.visibilityOf(this.TimeLegend));
        await browser.wait(EC.visibilityOf(this.severityTypesLegend));
        await browser.wait(EC.visibilityOf(this.lanesAffectedLegend));
        await browser.wait(EC.visibilityOf(this.areaAffectedLegend));
    }


    public async verifySideMenuItem(menuItemName: string) {

        await browser.sleep(2000);
        switch (menuItemName) {

            case "Home":
                await browser.wait(EC.visibilityOf(this.homeButton));
                break;
            case "Roadwork & Hazard List":
                await browser.wait(EC.visibilityOf(this.roadworkNHazardListButton));
                break;
            case "Traffic Cameras":
                await browser.wait(EC.visibilityOf(this.trafficCamerasButton));
                break;
            case "Help":
                await browser.wait(EC.visibilityOf(this.helpButton));
                break;
            case "@LiveTrafficNSW":
                await browser.wait(EC.visibilityOf(this.twitterLTNSWLink));
                break;
            case "@LiveTrafficSyd":
                await browser.wait(EC.visibilityOf(this.twitterLTSYDpageText));
                break;
            case "/LiveTrafficNSW":
                await browser.wait(EC.visibilityOf(this.SocialMediaLTNSWpageText));
                break;
            case "Privacy":
                await browser.wait(EC.visibilityOf(this.privacyLink));
                break;
            case "Terms":
                await browser.wait(EC.visibilityOf(this.TermsLink));
                break;
            case "Copyright":
                await browser.wait(EC.visibilityOf(this.copyright));
                break;
            case "TfNSW-Logo":
                await browser.wait(EC.visibilityOf(this.TfNSWLogo));
                break;
            default:
                // expect.fail("Please enter valid media link")
                expect.fail("Please enter valid media link");
                break;
        }

    }
}
