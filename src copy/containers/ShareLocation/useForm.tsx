import React, { useState } from "react";
import { IInitialState } from "types/types";

const initialState = {
  locationName: "",
  locationType: "",
  locationLogo: "",
};

const useForm = () => {
  const [state, setState] = useState<IInitialState>(initialState);
  const { locationName, locationType, locationLogo } = state;

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setState(initialState);
  };

  const handleSave = () => {};

  const handleSubmitForm = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const payload = {
      locationName,
      locationType,
      locationLogo,
    };
    setState(initialState);
    alert("User location shared!");
  };
  return { handleCancel, handleSave, handleSubmitForm, state, setState };
};

export default useForm;
