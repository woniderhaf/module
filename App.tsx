
import React from 'react';


import RootNavigation from './src/navigation/RootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StoreProvider } from './src/store/StoreProvider';

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <StoreProvider>
        <RootNavigation />
      </StoreProvider>
    </SafeAreaProvider>
  );
}


export default App;
