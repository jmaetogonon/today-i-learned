import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://msrudisvszubpisprzvb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcnVkaXN2c3p1YnBpc3ByenZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwOTY5NTgsImV4cCI6MjAxMDY3Mjk1OH0.ZEvRC-2w88qb1BCgRJdM03GWHQnhfOiZnqyMGRHTMIc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
