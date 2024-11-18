import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@/config/gluestack-ui.config';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClientProvider} from '@tanstack/react-query';
import {persistor, store} from '@/store';
import {queryClient} from '@/config/react-query';
interface Props {
  children: React.ReactNode;
}
const MainProvider: React.FC<Props> = ({children}) => {
  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </GluestackUIProvider>
  );
};

export default MainProvider;
