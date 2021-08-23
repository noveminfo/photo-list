import React, { ReactElement, useEffect, useRef, useState } from 'react';
import PhotoList from './PhotoList';

export interface ImageFile {
  title: string;
  dataUrl: string | ArrayBuffer;
}

export default function FolderReader(): ReactElement {
  const folderInput = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);
  // const [imageList, setImageList] = useState<ImageFile[]>([]);

  useEffect(() => {
    if (folderInput.current !== null) {
      folderInput.current.setAttribute('directory', '');
      folderInput.current.setAttribute('webkitdirectory', '');
    }
  }, [fileList, folderInput]);

  // console.log(fileList);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList !== null) {
      const files = Array.from(fileList).filter(
        file => file.type.slice(0, 5) === 'image',
      );
      setFileList(files);
    }
  };

  const handleBack = () => {
    setFileList([]);
  };

  return fileList.length === 0 ? (
    <div className="text-center">
      <p className="text-white text-2xl py-4">PHOTO LIST</p>
      <label
        htmlFor="folderInput"
        className="bg-white rounded-xl px-4 py-1 cursor-pointer">
        フォルダを選択
        <input
          type="file"
          ref={folderInput}
          id="folderInput"
          onChange={handleOnChange}
          className="hidden"
        />
      </label>
    </div>
  ) : (
    <>
      <PhotoList files={fileList} />
      <div className="absolute top-4 right-4">
        <button onClick={handleBack} className="text-white">
          もどる
        </button>
      </div>
    </>
  );
}
