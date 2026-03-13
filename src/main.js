import './style.css'
import { createUploadWidget } from './cloudinary.js'

document.querySelector('#app').innerHTML = `
  <h1>ClipMaker</h1>

  <button id="upload_widget" class="cloudinary-button">
    Upload files
  </button>
`

const uploadWidget = createUploadWidget()

document.getElementById("upload_widget").addEventListener("click", function () {
  uploadWidget.open()
}, false)