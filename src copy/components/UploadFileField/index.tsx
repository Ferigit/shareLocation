import { ReactElement, useRef, Ref } from "react";
import "./styles.scss";
import UploadIcon from "assets/images/upload-icon.png";

interface Props {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: FileList;
  uploadBtnText: string;
  accept?: string;
}

const UploadFileField = ({
  className,
  onChange,
  value,
  uploadBtnText,
  accept,
}: Props): ReactElement => {
  const inputFile = useRef<any>(null);

  const handleBtnClick = () => {
    inputFile?.current?.click();
  };

  return (
    <>
      <input
        className="hidden"
        type="file"
        id="file"
        accept={accept}
        ref={inputFile}
        onChange={onChange}
      />
      <div className="upload-btn" onClick={handleBtnClick}>
        <p className="upload-text">{uploadBtnText}</p>
        <img src={UploadIcon} alt="upload icon" className="upload-icon" />
      </div>
      {/* <div className="file-name">{value && value}</div> */}
    </>
  );
};

export { UploadFileField };
