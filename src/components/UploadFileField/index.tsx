import { ReactElement, useRef, useEffect, useState } from "react";
import "./styles.scss";
import UploadIcon from "assets/images/upload-icon.png";
import RemoveIcon from "assets/images/remove.png";

interface Props {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: any; //FileList | Blob;
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
  const [preview, setPreview] = useState(undefined);

  const handleBtnClick = () => {
    inputFile?.current?.click();
  };

  useEffect(() => {
    if (!value) {
      setPreview(undefined);
      return;
    }

    const objectUrl: any = URL.createObjectURL(value);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [value]);

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
      <div
        className="upload-btn flex justify-center items-center flex-col pb-2"
        onClick={handleBtnClick}
      >
        <p className="w-full upload-text flex justify-center items-center">
          {uploadBtnText}
        </p>
        <img src={UploadIcon} alt="upload icon" className="upload-icon mt-2" />
      </div>
      {preview && (
        <div className="w-full flex justify-center items-center gap-x-3">
          <img src={preview} className="preview-img mt-1" alt="preview img" />
          <img
            src={RemoveIcon}
            className="remove-icon cursor-pointer"
            alt="preview img"
            onClick={() => setPreview(undefined)}
          />
        </div>
      )}
    </>
  );
};

export { UploadFileField };
