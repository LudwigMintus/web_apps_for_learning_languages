import './app.module.css';

import NxWelcome from './nx-welcome';
import AuthPage from './components/authorization/authentication/AuthPage';
 import BackgroundMainLeftSideBottom from './components/mainPage/backgroundShapes/BackgroundMainLeftSideBottom';
import Header from './components/mainPage/header/Header';
 import SearchBar from './components/catalogPage/searchBar/SearchBar';
import TagButtons from './components/mainPage/tagButtons/TagButtons';
import BackgroundMainLeftSideTopOtherWindows from './components/mainPage/backgroundShapes/BackgroundMainLeftSideTopOtherWindows';
 import BackgroundMainRightSideBottom from './components/mainPage/backgroundShapes/BackgroundMainRightSideBottom';
import ContentList from './components/catalogPage/сontentList/ContentList';
import BackgroundShapes from './components/catalogPage/backgroundShapes/BackgroundShapes';
//import Header from './components/catalogPage/header/Header';
import Sidebar from './components/catalogCardPage/sidebar/Sidebar';
import MainContent from './components/catalogCardPage/mainContent/MainContent';
import MemoryTest from './components/gameCrad/MemoryTest';
import RegistrationPage from './components/authorization/registration/RegistrationPage';
// catalog import SearchBar from './components/catalogPage/searchBar/SearchBar';
// catalog import MainContent from './components/catalogCardPage/mainContent/MainContent';



export function App() {
  return (
    <div>
      <BackgroundShapes />
      <Header />
      <SearchBar/>
      <ContentList/>
    </div>
  );
}

export default App;

// <!-- <AuthPage /> -->

// <BackgroundMainRightSideBottom/>
// <BackgroundMainLeftSideBottom />
// <BackgroundMainLeftSideTopOtherWindows/>
// <Header />
// <SearchBar />
// <TagButtons />


// Карточки создание и добавление
// <BackgroundShapes />
// <Header />
// <div className="layout-container">
//   <Sidebar />
//   <MainContent />
// </div>



// <BackgroundShapes />
// <Header />
// <div style={{ display: 'flex', flexDirection: 'row' }}>
//   <Sidebar />
//   <MainContent />
// </div>
// {/*<MemoryTest/>*/}
// {/*<RegistrationPage/>*/}
