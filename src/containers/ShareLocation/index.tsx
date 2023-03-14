import { lazy } from "react";
import {
  Card,
  TextField,
  FormControl,
  DropDownField,
  UploadFileField,
  Button,
} from "components/index";
import useForm from "./useShareLocation";
import "./index.scss";

const Map = lazy(() => import("components/Map"));

const ShareLocation = () => {
  const { state, setState, handleCancel, handleSubmitForm } = useForm();

  const { locationName, locationType, locationLogo } = state;
  console.log("locationType: ", locationType);
  return (
    <div className="w-full max-w-xl mr-auto ml-auto mt-20">
      <Card title="Share location" className="home-card">
        <div className="w-full">
          <FormControl label="Location Name">
            <TextField
              value={locationName}
              placeholder="ex. Tehran"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setState({ ...state, locationName: e.target.value });
              }}
            />
          </FormControl>
          <FormControl label="Location on map:">
            <Map />
          </FormControl>
          <FormControl label="Location Type:">
            <DropDownField
              value={locationType}
              onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                setState({ ...state, locationType: e.currentTarget.value });
              }}
              options={[
                { label: "Business", value: "business" },
                { label: "Personal", value: "personal" },
              ]}
            />
          </FormControl>
          <FormControl label="Logo:">
            <UploadFileField
              accept="image/png, image/jpeg"
              uploadBtnText="Upload"
              value={locationLogo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { files } = e.target;
                const selectedFiles = files as FileList;
                setState({ ...state, locationLogo: selectedFiles[0] });
              }}
            />
          </FormControl>
          <div className="w-full flex justify-end items-center gap-x-3">
            <Button
              title="Cancel"
              onClick={handleCancel}
              className="cancel-btn"
            />
            <Button
              title="Save"
              onClick={handleSubmitForm}
              className="save-btn"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export { ShareLocation };
