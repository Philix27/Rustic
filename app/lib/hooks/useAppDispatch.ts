import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { AppActions } from "../redux/store/persist";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useAppDispatch(state?: keyof RootState) {
  return {
    dispatch: useDispatch<AppDispatch>(),
    actions: AppActions,
  };
}
