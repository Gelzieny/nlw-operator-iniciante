export function createUploadWidget() {

  const config = {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  }

  const widget = cloudinary.createUploadWidget(
    config,
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Upload realizado:", result.info)
      }
    }
  )

  return widget
}