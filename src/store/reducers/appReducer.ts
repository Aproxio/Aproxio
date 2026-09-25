import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  mobileMenuOpen: boolean;
  activeRoute: string;
  selectedBusinessId: string | null;
}

const initialState: AppState = {
  mobileMenuOpen: false,
  activeRoute: '/',
  selectedBusinessId: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    setActiveRoute: (state, action: PayloadAction<string>) => {
      state.activeRoute = action.payload;
    },
    setSelectedBusinessId: (state, action: PayloadAction<string | null>) => {
      state.selectedBusinessId = action.payload;
    },
  },
});

export const { setMobileMenuOpen, setActiveRoute, setSelectedBusinessId } = appSlice.actions;
export default appSlice.reducer;
