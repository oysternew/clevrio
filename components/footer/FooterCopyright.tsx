import React from "react";

const FooterCopyright = () => {
  return (
    <div className="foot_copy">
      <div className="footer_copyright">
        <p>&copy; {new Date().getFullYear() || "2025"}. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default FooterCopyright;
