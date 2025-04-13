import React from "react";

const DownloadResume = ({ children }: { children: React.ReactNode }) => {
  return (
    <a
      href="./NITHIN_JOJI-MERN_STACK_DEVELOPER.pdf"
      download="NITHIN_JOJI-MERN_STACK_DEVELOPER.pdf"
    >
      {children}
    </a>
  );
};

export default DownloadResume;