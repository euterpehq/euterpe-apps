"use client";

import UploadModal from "@/components/UploadModal";
import React, { useState } from "react";

const UploadMusicPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={openModal}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Upload Music
      </button>

      <UploadModal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-semibold text-center">Upload Your Music</h2>
        <p className="mt-2 text-center text-gray-600">
          Drag and drop files here, or click to select files.
        </p>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Close
        </button>
      </UploadModal>
    </div>
  );
};

export default UploadMusicPage;
