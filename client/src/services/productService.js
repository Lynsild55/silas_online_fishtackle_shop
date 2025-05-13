import { supabase } from './supabaseClient';

export const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*');
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data;
  };


export const fetchProductById = async (id) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
