import React, { ReactElement, useEffect, useState } from 'react';

interface Props {
  files: File[];
}

export default function PhotoList({ files }: Props): ReactElement {
  // console.log(files);
  const [fileName, setFileName] = useState('');

  // console.log(files);
  useEffect(() => {
    if (files.length !== 0) {
      setFileName(files[0].name);
    }
  }, [files]);

  // console.log(fileName);

  const handleClick = (name: string) => {
    setFileName(name);
  };

  return (
    <div className="grid gap-4 grid-cols-4 h-full">
      <div className="col-span-1 overflow-auto">
        {fileName !== '' &&
          files.map((file, index) => {
            return (
              <div
                key={index}
                className="py-4"
                onClick={() => handleClick(file.name)}>
                <img src={URL.createObjectURL(file)} alt={file.name} />
              </div>
            );
          })}
      </div>
      <div className="col-span-3 justify-self-center h-screen">
        {fileName !== '' && (
          <>
            <p className="py-4 text-center text-white">{fileName}</p>
            <img
              src={
                files.find(file => file.name === fileName) !== undefined
                  ? URL.createObjectURL(
                      files.find(file => file.name === fileName),
                    )
                  : ''
              }
              alt="show pic"
              className="object-contain h-5/6"
            />
          </>
        )}
      </div>
    </div>
  );
}
