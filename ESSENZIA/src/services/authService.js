import { supabase } from './supabaseClient';

export async function signUpWithEmail({ name, email, password }) {
  const { data, error } = await supabase.auth.signUp(
    {
      email,
      password
    },
    {
      data: { full_name: name }
    }
  );
  return { data, error };
}

export async function signInWithEmail({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return { data, error };
}
