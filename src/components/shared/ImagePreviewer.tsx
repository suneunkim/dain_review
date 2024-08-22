'use client'

import React, { useState } from 'react'

const ImagePreviewer = ({ onFileSelect }) => {
  const [preview, setPreview] = useState(null)

  const handleImageChange = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
        if (onFileSelect) {
          onFileSelect(file)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="image-previewer">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      {preview && (
        <div className="image-preview mt-4">
          <img
            src={preview}
            alt="Image Preview"
            className="w-full max-w-[200px] rounded border border-gray-300"
          />
        </div>
      )}
    </div>
  )
}

export default ImagePreviewer
