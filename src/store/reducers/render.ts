import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RenderState = {
  activeComponent: 'frontend' | 'backend' | null
}

const initialState: RenderState = {
  activeComponent: null
}

const renderSlice = createSlice({
  name: 'render',
  initialState,
  reducers: {
    setRender: (state, action: PayloadAction<'frontend' | 'backend'>) => {
      state.activeComponent = action.payload
    }
  }
})

export const { setRender } = renderSlice.actions
export default renderSlice.reducer