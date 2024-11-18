import RootNavigation from '@/navigations/root-navigation';
import MainProvider from '@/providers';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <MainProvider>
      <RootNavigation />
    </MainProvider>
  );
}

export default App;
