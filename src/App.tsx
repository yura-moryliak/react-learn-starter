import './App.css';

import AboutPage from './components/about-page/AboutPage';
import ConditionalRendering from './components/conditional-rendering/ConditionalRendering';
import MyButton from './components/my-button/MyButton';
import MyProfile from './components/my-profile/MyProfile';
import ProductsList from './components/about-page/products-list/ProductsList';

function App() {

  return (
    <>
      <FirstStepsLearning />
      <SecondStepLearning />
    </>
  )
}

function FirstStepsLearning() {
  return (
    <>
      <AppHeader />
      <h2>Creating and nesting components</h2>

      <MyButton />
      <MyButton />

      <hr />

      <h2>Writing markup with JSX</h2>

      <AboutPage />

      <hr />

      <StylingElements />

      <hr />

      <MyProfile />
    </>
  );
}

function SecondStepLearning() {
  return (
    <>
      <ConditionalRendering />
      <ProductsList />
    </>
  );
}

function StylingElements() {
  return (
    <img
      className='avatar'
      src="https://cryptologos.cc/logos/vite-vite-logo.png"
      alt="avatar-img" />
  );
}

function AppHeader() {
  return (
    <>
      <h1>React learn starter</h1>
      <hr />
    </>
  );
}

export default App;
