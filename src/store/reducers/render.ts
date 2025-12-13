import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RenderState = {
  activeComponent: 'frontend' | 'fullstack' | 'all' | null
  activeSection: boolean
}

const initialState: RenderState = {
  activeComponent: null,
  activeSection: false
}

const renderSlice = createSlice({
  name: 'render',
  initialState,
  reducers: {
    setComponent: (
      state,
      action: PayloadAction<'frontend' | 'fullstack' | 'all' | null>
    ) => {
      state.activeComponent = action.payload
    },
    setSection: (state, action: PayloadAction<boolean>) => {
      state.activeSection = action.payload
    }
  }
})

export const { setComponent, setSection } = renderSlice.actions
export default renderSlice.reducer
