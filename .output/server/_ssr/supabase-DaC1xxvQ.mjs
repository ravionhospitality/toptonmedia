import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
const SUPABASE_URL = "https://ahjhwqcrxcljmenoqyex.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoamh3cWNyeGNsam1lbm9xeWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3ODQ5NjEsImV4cCI6MjA5NTM2MDk2MX0.KTMkkFhmMXMR-1ATK1IwaAIfUqDHkmRgO8bjJXyZ0DY";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export {
  supabase as s
};
