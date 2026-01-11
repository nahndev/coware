"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export type DocumentVideoBoxProps = {
  onVideoUpload?: (file: File) => void;
  maxSize?: number; // in bytes
  acceptedFormats?: string[];
};

const DocumentVideoBox: React.FC<DocumentVideoBoxProps> = ({
  onVideoUpload,
  maxSize = 100 * 1024 * 1024, // 100MB default
  acceptedFormats = ["video/mp4", "video/webm", "video/ogg", "video/avi", "video/mov"],
}) => {
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      setError(null);

      if (rejectedFiles.length > 0) {
        const rejection = rejectedFiles[0];
        if (rejection.errors.some((e: any) => e.code === "file-too-large")) {
          setError(`File is too large. Maximum size is ${Math.round(maxSize / (1024 * 1024))}MB`);
        } else if (rejection.errors.some((e: any) => e.code === "file-invalid-type")) {
          setError("Invalid file type. Please upload a video file.");
        }
        return;
      }

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setUploadedVideo(file);

        // Create preview URL
        const url = URL.createObjectURL(file);
        setVideoUrl(url);

        // Call parent callback
        onVideoUpload?.(file);
      }
    },
    [maxSize, onVideoUpload]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      "video/*": acceptedFormats.map((format) => format.split("/")[1]),
    },
    maxSize,
    multiple: false,
  });

  const removeVideo = () => {
    setUploadedVideo(null);
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
      setVideoUrl(null);
    }
    setError(null);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!uploadedVideo ? (
        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
            ${isDragActive && !isDragReject ? "border-blue-400 bg-blue-50" : ""}
            ${isDragReject ? "border-red-400 bg-red-50" : ""}
            ${!isDragActive ? "border-gray-300 hover:border-gray-400" : ""}
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center space-y-2">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <div>
              {isDragActive ? (
                <p className="text-blue-600">Drop the video here...</p>
              ) : (
                <div>
                  <p className="text-gray-600">
                    Drag & drop a video here, or <span className="text-blue-600">click to select</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Max size: {Math.round(maxSize / (1024 * 1024))}MB</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <video src={videoUrl || undefined} controls className="w-full rounded-lg" style={{ maxHeight: "300px" }}>
              Your browser does not support the video tag.
            </video>
            <button
              onClick={removeVideo}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              title="Remove video"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="text-sm text-gray-600">
            <p>
              <strong>File:</strong> {uploadedVideo.name}
            </p>
            <p>
              <strong>Size:</strong> {formatFileSize(uploadedVideo.size)}
            </p>
            <p>
              <strong>Type:</strong> {uploadedVideo.type}
            </p>
          </div>
        </div>
      )}

      {error && <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded">{error}</div>}
    </div>
  );
};

export default DocumentVideoBox;
