import React from "react";

const DownloadResume = ({ children }: { children: React.ReactNode }) => {
  return (
    <a
      href="\NITHIN_JOJI-MERN_STACK_DEVELOPER.pdf"
      download="resume_nithin.pdf"
      aria-label="Download resume as PDF"
    >
      {children}
    </a>
  );
};

export default DownloadResume;
