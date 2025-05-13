import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wnhtzyjnfoekdneaukuo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduaHR6eWpuZm9la2RuZWF1a3VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMzI4ODEsImV4cCI6MjA2MTYwODg4MX0.CmO-4uYCz99xJ3V8D7Ug8dYJnZHVRs-qSNCtIbu6nXs'; // anon safe key to show
export const supabase = createClient(supabaseUrl, supabaseKey);

