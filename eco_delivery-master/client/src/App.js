import { useState } from 'react';

import { MapPage, SignPage } from './pages';

function App() {
  const [isSigned, setIsSigned] = useState(true);

  // login: ecoproduct
  // password: Ecoproduct123

  return (
    <div className="App">
      {isSigned ? <MapPage /> : <SignPage setIsSigned={setIsSigned} />}
    </div>
  );
}

export default App;
