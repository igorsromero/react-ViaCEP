import React, { useState } from 'react';

import ResultTable from './components/ResultTable/ResultTable.jsx'
import FormSubmit from './components/FormSubmit/FormSubmit.jsx'

function App() {

  const [currentScreen, setCurrentScreen] = useState(0);
  const [address, setAddress] = useState("");
  const [back, setBack] = useState(false);

  if (address !== "" && currentScreen === 0) {
    setCurrentScreen(1);
  }

  if (back) {
    setAddress("");
    setCurrentScreen(0);
    setBack(false);
  }

  const telas = [
    <FormSubmit setAddress={setAddress} />,
    <ResultTable address={address.data} setBack={setBack} />
  ]

  return (
    <>
      {telas[currentScreen]}
    </>
  )
}


export default App;