import React, {useEffect} from 'react';
import {Login} from './src/screens';
import RNBootSplash from 'react-native-bootsplash';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide(); // immediate
  }, []);

  return <Login />;
}
