// services/productsService.js

import { supabase } from './supabaseClient';

export async function fetchProducts() {
  const { data: products, error: fetchError } = await supabase
    .from('products')
    .select('id, name, description, price, image_url, category');

  if (fetchError) {
    console.error('Erro ao buscar produtos:', fetchError);
    return { data: null, error: fetchError };
  }

  const productsWithUrls = products.map(item => {
    let finalUrl = null;

    if (item.image_url) {
      // 1) Se já é uma URL pública, usa direta
      if (item.image_url.startsWith('http')) {
        finalUrl = item.image_url;
      } else {
        // 2) Caso contrário, gera com getPublicUrl
        //    * Atenção ao leading slash: remova se existir
        const path = item.image_url.replace(/^\/+/, '');
        const { data: urlData, error: urlError } = supabase
          .storage
          .from('product-images')
          .getPublicUrl(path);

        if (urlError) {
          console.warn('Erro gerando publicUrl para', path, urlError);
        } else {
          finalUrl = urlData.publicUrl;
        }
      }
    }

    return {
      ...item,
      image_url: finalUrl, // ou null, se não tiver
    };
  });

  return { data: productsWithUrls, error: null };
}
