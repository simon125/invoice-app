import { useDispatch, useSelector } from "react-redux";
import {
  selectIsFormDrawerOpen,
  toggleFormDrawer as toggle,
} from "../state/formDrawer";

export const useFormDrawer = () => {
  const isFormDrawerOpen = useSelector(selectIsFormDrawerOpen);
  const dispatch = useDispatch();

  const toggleFormDrawer = () => {
    dispatch(toggle());
  };

  return { isFormDrawerOpen, toggleFormDrawer };
};
