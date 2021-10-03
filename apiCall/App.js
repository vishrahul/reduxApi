// Imports: Dependencies
import React from 'react';
import {Provider} from 'react-redux';
// Imports: Screens
import ContactList from './src/screen/contactList';
// Imports: Redux Store
import store from './src/redux/store/Store';
// React Native App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <ContactList />
    </Provider>
  );
}
