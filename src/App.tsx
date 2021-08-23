import React, { ReactElement } from 'react';
import FolderReader from './components/FolderReader';

export default function App(): ReactElement {
  return (
    <div className="relative bg-black h-screen">
      <FolderReader />
    </div>
  );
}
