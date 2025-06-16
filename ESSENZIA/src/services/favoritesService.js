import { supabase } from './supabaseClient';

export async function fetchUserFavorites(userId) {
  const { data, error } = await supabase
    .from('favorites')
    .select('*')
    .eq('user_id', userId);

  return { data, error };
}
export async function toggleFavorite(userId, productId) {
  const { data: existing, error: fetchError } = await supabase
    .from('favorites')
    .select('*')
    .eq('user_id', userId)
    .eq('product_id', productId)
    .maybeSingle();

  if (fetchError) {
    return { data: null, error: fetchError };
  }

  if (existing) {
    const { data, error } = await supabase
      .from('favorites')
      .delete()
      .eq('id', existing.id);
    return { data, error };
  } else {
    const { data, error } = await supabase
      .from('favorites')
      .insert({ user_id: userId, product_id: productId });
    return { data, error };
  }
}
