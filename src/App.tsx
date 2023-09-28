import './App.css';

import AboutPage from './components/about-page/AboutPage';
import ConditionalRendering from './components/conditional-rendering/ConditionalRendering';
import MyButton from './components/my-button/MyButton';
import MyProfile from './components/my-profile/MyProfile';
import ProductsList from './components/about-page/products-list/ProductsList';
import { useState } from 'react';
import FilterableProductTable from './components/thinking-in-react/ThinkingInReact';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function App() {

  return (
    <>
      <FirstStepsLearning />
      <SecondStepLearning />
      <FilterableProductTable products={PRODUCTS} />
    </>
  )
}

function FirstStepsLearning() {

  const [ count, setCount ] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <AppHeader />
      <h2>Creating and nesting components</h2>

      <MyButton count={count} onClick={ handleClick } />
      <MyButton count={count} onClick={ handleClick } />

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
