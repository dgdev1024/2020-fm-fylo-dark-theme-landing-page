import React from "react";
import IconAccess from "../svg/icon-access-anywhere";
import IconSecurity from "../svg/icon-security";
import IconCollab from "../svg/icon-collaboration";
import IconAnyFile from "../svg/icon-any-file";
import "./index.scss";

const FeaturesSection = () => (
  <div className="fm-features-section">
    <div className="fm-container">
      <div className="fm-feature-card">
        <IconAccess />
        <h2>Access your files, anywhere</h2>
        <p>
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </p>
      </div>
      <div className="fm-feature-card">
        <IconSecurity />
        <h2>Security you can trust</h2>
        <p>
          Two-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </p>
      </div>
      <div className="fm-feature-card">
        <IconCollab />
        <h2>Real-time collaboration</h2>
        <p>
          Securely share files and folders with friends, family, and colleagues
          for live collaboration. No email attachments required.
        </p>
      </div>
      <div className="fm-feature-card">
        <IconAnyFile />
        <h2>Store any type of file</h2>
        <p>
          Whether you're sharing holiday photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.
        </p>
      </div>
    </div>
  </div>
);

export default FeaturesSection;
