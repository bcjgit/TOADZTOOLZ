import React from "react";

interface DownloadButtonProps {
  text: string;
  file: string;
}
const Download = ({ text, file }: DownloadButtonProps) => {
  return (
    <a
      type="button"
      className="inline-flex sm:cursor-pointer items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-toadz-gray hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      download
      href={file}
    >
      {text}
    </a>
  );
};

export default Download;
