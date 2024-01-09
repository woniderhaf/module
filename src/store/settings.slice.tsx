import { ActionCreatorWithPayload, createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { COLORS } from '../settings/colors.settings';
import { Schemas } from '../settings/scheema.settings';
import { BackgroundColor } from '../settings/backgroundColor.settings';
import { ColorSchemeName } from 'react-native';

export interface SettingsSchema {
  color: COLORS,
  schema: Schemas,
  backgroundColor: BackgroundColor
  systemSchema: 'dark' | 'light'
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    color: COLORS.green,
    schema: Schemas.light,
    backgroundColor: BackgroundColor.dark,
    systemSchema: 'light'
  } as SettingsSchema,

  reducers: {
    toggleColor: (state, action: PayloadAction<COLORS>) => {
      state.color = action.payload
    },
    toggleSystemSchema: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.systemSchema = action.payload
      let color = BackgroundColor.light //default
      if (state.schema === Schemas.system) {
        color = state.systemSchema === 'dark' ? BackgroundColor.dark : BackgroundColor.light
      } else {

        color = state.schema === Schemas.dark ?
          BackgroundColor.dark
          : BackgroundColor.light
      }
      state.backgroundColor = color
    },
    toggleSchema: (state, action: PayloadAction<Schemas>) => {
      state.schema = action.payload

      let color = BackgroundColor.light //default
      if (action.payload === Schemas.system) {
        color = state.systemSchema === 'dark' ? BackgroundColor.dark : BackgroundColor.light
      } else {

        color = action.payload === Schemas.dark ?
          BackgroundColor.dark
          : BackgroundColor.light
      }
      state.backgroundColor = color

    },


  },
});

export const { toggleColor, toggleSchema, toggleSystemSchema } = settingsSlice.actions


export default settingsSlice.reducer;
