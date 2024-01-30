// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/routes';
import { PasswordProvider } from './src/context/passwordcontext'; // Corrigido o caminho

export default function App() {
  return (
    <PasswordProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </PasswordProvider>
  );
}
