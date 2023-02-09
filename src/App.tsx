import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import './App.css';
import { RVListing } from './RVListing/RVListing';

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <div className="App">
          <header className="App-header">
            Rv App
          </header>
          <RVListing/>
        </div>
    </QueryClientProvider>
  );
}

export default App;
