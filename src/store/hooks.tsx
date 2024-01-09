import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store";
import { SettingsSchema } from "./settings.slice";


export interface StateSchema {
  settings: SettingsSchema
}


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
