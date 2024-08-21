import React from 'react';
import UseMemoComponent from './UseMemoComponent';

import DisplayWithConsumer from './components/DisplayWithConsumer';
import DisplayWithUseContext from './components/DisplayWithUseContext';
import HeaderBar from './components/HeaderBar';

export const NumberContext = React.createContext();
export const CurrentUser = React.createContext();
export const Notifications = React.createContext();

function App() {
  return (
    <div className="App">
      <UseMemoComponent first="value1" second="value2" />

      <NumberContext.Provider value={42}>
      <CurrentUser.Provider value={{ name: 'John Doe' }}>
        <Notifications.Provider value={[ 'Notification 1', 'Notification 2' ]}>
          <div>
            <h1>Using Consumer:</h1>
            <DisplayWithConsumer />
            <h1>Using useContext:</h1>
            <DisplayWithUseContext />
            <h1>HeaderBar Component:</h1>
            <HeaderBar />
          </div>
        </Notifications.Provider>
      </CurrentUser.Provider>
    </NumberContext.Provider>

    </div>
  );
}

export default App;

