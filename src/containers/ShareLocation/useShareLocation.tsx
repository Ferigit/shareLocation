import React, { useState } from "react";
import { IInitialState } from "types/types";
import { useMapStore } from "store/mapStore";
import { shareLocationApi } from "apiInstance/apiList";
import { toast } from "react-toastify";

const initialState = {
  locationName: "",
  locationType: "",
  locationLogo: "",
};

const useShareLocation = () => {
  const [state, setState] = useState<IInitialState>(initialState);
  const { locationName, locationType, locationLogo } = state;
  const location = useMapStore((state) => state.location);

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setState(initialState);
  };

  const handleSubmitForm = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const payload = {
      locationName,
      locationType,
      locationLogo,
      location,
    };
    if (!locationName) {
      toast.error("Enter location name!");
      return;
    }
    if (!locationType) {
      toast.error("Enter location type!");
      return;
    }
    if (!locationLogo) {
      toast.error("Enter location logo!");
      return;
    }
    try {
      const res = shareLocationApi("/share", payload);
      toast.success("Your location shared successfully! ");

      // alert("user location shared successfully!");
    } catch (err) {}
    console.log("payload: ", payload);
    setState(initialState);
  };
  return { handleCancel, handleSubmitForm, state, setState };
};

export default useShareLocation;
