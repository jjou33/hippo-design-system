import { Database } from '@/types/supabase';
import { createServerClient } from '@supabase/ssr';

export const createClient = async (
  cookies: Partial<{ [key: string]: string }>
) => {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookies[name];
        },
      },
    }
  );
};
