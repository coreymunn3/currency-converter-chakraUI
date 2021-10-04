import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <ColorModeScript />
      <App />
      <ReactQueryDevtools />
    </ChakraProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);

reportWebVitals();
