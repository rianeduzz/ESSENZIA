import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/authStack';
import AppStack from './navigation/AppStack';
import { supabase } from './services/supabaseClient';

export default function App() {
  const [session, setSession] = useState(null);

useEffect(() => {
  async function getInitialSession() {
    const { data, error } = await supabase.auth.getSession();
    if (error) console.error(error.message);
    else setSession(data.session);
  }
  getInitialSession();

  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      setSession(session);
    }
  );

  return () => {
    subscription.unsubscribe();
  };
}, []);


  return (
    <NavigationContainer>
      {session ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
