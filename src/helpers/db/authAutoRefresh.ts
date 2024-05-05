import { AppState } from "react-native";
import { supabase } from "../../lib/supabase";

export function authAutoRefresh() {
  AppState.addEventListener('change', ( state ) => {
    if ( state === 'active' ) {
      supabase.auth.startAutoRefresh();
    } else {
      supabase.auth.stopAutoRefresh();
    }
  });
}
