// Popup.tsx
import React from "react";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="rounded bg-white p-4 shadow-lg">
        <span className="">JUMPSCARE</span>
        <img src="path_to_your_image.jpg" alt="Ridha" className="mt-4" />
        <button onClick={onClose} className="ml-2">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
