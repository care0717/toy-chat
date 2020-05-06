import React from 'react';
import './App.css';
import ButtonAppBar from "./components/ButtonAppBar";
import AlignItemsList from "./components/AlignItemList";
import TextInput from "./components/TextInput";

function App() {
  return (
      <React.Fragment>
        <ButtonAppBar />
        <div className="App">
          <AlignItemsList />
          <TextInput />
        </div>
      </React.Fragment>
  )
}

export default App;
