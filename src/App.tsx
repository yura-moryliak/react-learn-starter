import './App.css';

import AboutPage from './components/about-page/AboutPage';
import MyButton from './components/my-button/MyButton';

function App() {

  return (
    <>
      <AppHeader />
      <h2>Creating and nesting components</h2>

      <MyButton />

      <hr />

      <h2>Writing markup with JSX</h2>

      <AboutPage />

      <hr />

      <StylingElements />
    </>
  )
}

function AppHeader() {
  return (
    <>
      <h1>React learn starter</h1>
      <hr />
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

export default App;
