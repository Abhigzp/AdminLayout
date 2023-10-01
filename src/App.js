import React, { useState ,useEffect } from "react";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import "./App.css";
import styles from "./app.module.css";
import Landing from "./Pages/Landing";
import items from "./Constants/Sidebar.json";
import SidebarItems from "./Components/Sidebar/SidebarItems";
import AddCompanyCategory from "./Pages/ContentManagement/CompanyCategory/AddCompanyCategory";
import ListCompanyCategory from "./Pages/ContentManagement/CompanyCategory/ListCompanyCategory";
import AddLocation from "./Pages/ContentManagement/LocationMaster/AddLocation";
import LocationList from './Pages/ContentManagement/LocationMaster/LocationList/index';
import AddCompany from "./Pages/ContentManagement/CompanyMaster/AddCompany";
import ListOfCompanies from "./Pages/ContentManagement/CompanyMaster/ListOfCompanies";
import AddNewCategory from "./Pages/ContentManagement/EventCategories/AddNewCategory";
import ListOfCategories from "./Pages/ContentManagement/EventCategories/ListOfCategories";
import AddEventOrganizer from "./Pages/ContentManagement/EventOrganizers/AddEventOrganizer";
import ListEventOrganizer from "./Pages/ContentManagement/EventOrganizers/ListEventOrganizers";
import AddNewSession from './Pages/ContentManagement/EventSessions/AddNewSession/index';
import ListofSession from './Pages/ContentManagement/EventSessions/ListOfSession/index';
import AddNewEvent from './Pages/ContentManagement/Event/AddNewEvent/index';
import ListOfEvents from './Pages/ContentManagement/Event/ListofEvents/index';
import AddNewSpeaker from "./Pages/ContentManagement/Speakers/AddNewSpeaker";
import ListOfSpeakers from './Pages/ContentManagement/Speakers/ListOfSpeakers/index';
import AddNewPaper from "./Pages/ContentManagement/Speakers/AddNewPaper";
import ListOfPapers from "./Pages/ContentManagement/Speakers/ListOfPapers";
import AddNewSponsors from './Pages/ContentManagement/Sponsors/AddNewSponsors/index';
import ListOfSponsors from './Pages/ContentManagement/Sponsors/ListOfSponsors/index';
import AddNewExhibitor from './Pages/ContentManagement/Exhibitors/AddNewExhibitor/index';
import ListOfExhibitors from './Pages/ContentManagement/Exhibitors/ListOfExhibitor/index';
import AddEventSchedule from './Pages/ContentManagement/EventSchedules/AddEventSchedule/index';
import ListEventSchedule from './Pages/ContentManagement/EventSchedules/ListEventSchedule/index';
import AddNewDelegate from './Pages/ContentManagement/Delegates/AddNewDelegate/index';
import ListOfDelegates from './Pages/ContentManagement/Delegates/ListOfDelegates/index';
import DelegateAttendence from "./Pages/ContentManagement/Delegates/DelegateAttendance";
import AddNewHelpline from './Pages/ContentManagement/Helpline/AddNewHelpline/index';
import ListOfHelplines from './Pages/ContentManagement/Helpline/ListOfHelplines/index';
import AddFeedbackDelegates from './Pages/ContentManagement/Feedback/AddFeedbackParameters/index';
import ListOfFeedbackParameters from './Pages/ContentManagement/Feedback/ListOfFeedbacksParameters/index';
import AddNewAdvertisement from './Pages/ContentManagement/Adverstisement/AddNewAdvertisement/index';
import ListOfAdvertisements from './Pages/ContentManagement/Adverstisement/ListOfAdvertisements/index';
import UploadDocuments from './Pages/ContentManagement/Gallery/UploadDocuments/index';
import ListOfDocuments from './Pages/ContentManagement/Gallery/ListOfDocuments/index';
import AddEventBanner from './Pages/ContentManagement/EventBanners/AddEventBanner/index';
import ListOfBanners from './Pages/ContentManagement/EventBanners/ListOfBanners/index';
import AddDGMessage from "./Pages/ContentManagement/DGMessage/AddDGMessage";
import AddBanners from './Pages/ContentManagement/EventLocationFacts/AddBanners/index';
import AddEventLocationFacts from './Pages/ContentManagement/EventLocationFacts/AddEventLocationFacts/index';
import ListOfFacts from './Pages/ContentManagement/EventLocationFacts/ListOfFacts/index';
import ListOfLocationBanners from './Pages/ContentManagement/EventLocationFacts/ListOfLocationBanners/index';
import AddRegistrationDetails from "./Pages/ContentManagement/RegistrationDetails/AddRegistrationDetails";
import AddExhibitionDetails from './Pages/ContentManagement/ExhibitionDetails/AddExhibitionDetails/index';
import AddMeetingDetails from './Pages/ContentManagement/Meetings/AddMeetingDetails/index';
import ListOfMeetings from './Pages/ContentManagement/Meetings/ListOfMeetings/index';
import AddAboutOrganization from './Pages/ContentManagement/AboutOrganization/AddAboutOrganization/index';
import EventDelegates from './Pages/Reports/EventDelegates/index';
import SummaryReport from './Pages/Reports/SummaryReport/index';
import AddressLevelForDelegates from './Pages/Reports/AddressLevelForDelegates/index';
import Feedbacks from './Pages/Reports/Feedbacks/index';
import ListOfMenus from './Pages/Settings/AppMenus/ListOfMenus/index';
import MenuDetails from './Pages/Settings/AppMenus/MenuDetails/index';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };



  return (
    <BrowserRouter>
      <div className={styles.app}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.leftHeaderContent}>
              <div className={styles.headerHeading}>
                Seminar Management System
              </div>
              <button className={styles.toggleButton} onClick={toggleSidebar}>
                &#9776;
              </button>
            </div>
            <div className={styles.rightHeaderContent}>
              <svg
                className={styles.profileSvg}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                id="user"
              >
                <g fill="#2b4255" transform="translate(838 -946.115)">
                  <circle cx="-830" cy="950.126" r="4"></circle>
                  <path d="M-823.997 959.123v2.982h-12.006v-2.982"></path>
                  <path d="M-823.997 959.598v-2.19c0-1.264-1.116-2.282-2.502-2.282h-7.002c-1.386 0-2.502 1.018-2.502 2.282v2.19"></path>
                </g>
              </svg>
              <span className={styles.username}>USERNAME</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>

          <div
            className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}
          >
            <div className={styles.searchContainer}>
              <span className={styles.searchIcon}><button><i class="bi bi-search"></i></button></span>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search Page"
              />
            </div>
            {items.map((item, index) => (
              <SidebarItems key={index} item={item} />
            ))}
          </div>

          {/* Main Body */}
          <div className={styles.mainBody}>
            <Routes>
              <Route path="/" element={<Landing />} />
             
              <Route
                path="/companycategory/addcompanycategory" 
                element={<AddCompanyCategory />}
              />
              <Route
                path="/companycategory/listcompanycategory"
                element={<ListCompanyCategory  />}
              />
              <Route
                path="/locationmaster/addlocation"
                element={<AddLocation />}
              />
              <Route
                path="/locationmaster/locationlist"
                element={<LocationList />}
              />
              <Route
                path="/companymaster/addcompany"
                element={<AddCompany />}
              />
              <Route
                path="/companymaster/listofcompanies"
                element={<ListOfCompanies />}
              />
              <Route
                path="/eventcategories/addnewcategory"
                element={<AddNewCategory />}
              />
              <Route
                path="/eventcategories/listofcategories"
                element={<ListOfCategories />}
              />
              <Route
                path="/eventorganizers/addeventorganizer"
                element={<AddEventOrganizer />}
              />
              <Route
                path="/eventorganizers/listeventorganizer"
                element={<ListEventOrganizer />}
              />
              <Route
                path="/eventsessions/addnewsession"
                element={<AddNewSession />}
              />
              <Route
                path="/eventsessions/listofsession"
                element={<ListofSession />}
              />
              <Route
                path="/event/addnewevent"
                element={<AddNewEvent />}
              />
              <Route
                path="/event/listofevents"
                element={<ListOfEvents />}
              />
              <Route
                path="/speakers/addnewspeaker"
                element={<AddNewSpeaker />}
              />
              <Route
                path="/speakers/listofspeakers"
                element={<ListOfSpeakers />}
              />
              <Route
                path="/speakers/addnewpaper"
                element={<AddNewPaper />}
              />
              <Route
                path="/speakers/listofpapers"
                element={<ListOfPapers />}
              />
              <Route
                path="/sponsors/addnewsponsors"
                element={<AddNewSponsors />}
              />
              <Route
                path="/sponsors/listofsponsors"
                element={<ListOfSponsors />}
              />
              <Route
                path="/exhibitors/addnewexhibitor"
                element={<AddNewExhibitor />}
              />
              <Route
                path="/exhibitors/listofexhibitors"
                element={<ListOfExhibitors />}
              />
              <Route
                path="/eventschedules/addeventschedule"
                element={<AddEventSchedule />}
              />
              <Route
                path="/eventschedules/listeventschedule"
                element={<ListEventSchedule />}
              />
              <Route
                path="/delegates/addnewdelegate"
                element={<AddNewDelegate />}
              />
              <Route
                path="/delegates/listofdelegate"
                element={<ListOfDelegates/>}
              />
              <Route
                path="/delegates/delegateattendence"
                element={<DelegateAttendence />}
              />
              <Route
                path="/helpline/addnewhelpline"
                element={<AddNewHelpline/>}
              />
              <Route
                path="/helpline/listofhelplines"
                element={<ListOfHelplines />}
              />
              <Route
                path="/helpline/addfeedbackparameters"
                element={<AddFeedbackDelegates/>}
              />
              <Route
                path="/helpline/listofeedbackparameters"
                element={<ListOfFeedbackParameters />}
              />
              <Route
                path="/advertisement/addnewadvertisement"
                element={<AddNewAdvertisement/>}
              />
              <Route
                path="/advertisement/listofadvertisements"
                element={<ListOfAdvertisements />}
              />
              <Route
                path="/gallery/uploaddocuments"
                element={<UploadDocuments/>}
              />
              <Route
                path="/gallery/listofdocuments"
                element={<ListOfDocuments />}
              />
              <Route
                path="/eventbanners/addeventbanner"
                element={<AddEventBanner/>}
              />
              <Route
                path="/eventbanners/listofbanners"
                element={<ListOfBanners />}
              />
              <Route
                path="/dgmessage/adddgmessage"
                element={<AddDGMessage />}
              />
              <Route
                path="/eventlocationfacts/addbanners"
                element={<AddBanners />}
              />
              <Route
                path="/eventlocationfacts/addeventlocationfacts"
                element={<AddEventLocationFacts />}
              />
              <Route
                path="/eventlocationfacts/listofacts"
                element={<ListOfFacts />}
              />
              <Route
                path="/eventlocationfacts/listoflocationbanners"
                element={<ListOfLocationBanners />}
              />
              <Route
                path="/registrationdetails/addregistrationdetails"
                element={<AddRegistrationDetails />}
              />
              <Route
                path="/exhibitiondetails/addexhibitiondetails"
                element={<AddExhibitionDetails />}
              />
              <Route
                path="/meetings/addmeetingdetails"
                element={<AddMeetingDetails />}
              />
              <Route
                path="/meetings/listofmeetings"
                element={<ListOfMeetings />}
              />
              <Route
                path="/aboutorganization/addaboutorganization"
                element={<AddAboutOrganization />}
              />
              <Route
                path="/reports/eventdelegates"
                element={<EventDelegates />}
              />
              <Route
                path="/reports/summaryreport"
                element={<SummaryReport />}
              />
              <Route
                path="/reports/addresslevelfordelegates"
                element={<AddressLevelForDelegates />}
              />
              <Route
                path="/reports/feedbacks"
                element={<Feedbacks />}
              />
              <Route
                path="/settings/appmenus/listofmenus"
                element={<ListOfMenus />}
              />
              <Route
                path="/settings/appmenus/menudetails"
                element={<MenuDetails />}
              />
              
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
