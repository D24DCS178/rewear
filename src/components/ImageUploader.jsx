import { useState } from 'react';

function ImageUploader({ onUpload }) {
const [preview, setPreview] = useState(null);
const [uploading, setUploading] = useState(false);

const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'rewear_unsigned'); // your unsigned preset

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dmtsy9vmm/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await res.json();
    setUploading(false);

    if (onUpload) onUpload(data.secure_url); // send image URL to parent
};

return (
    <div style={{ margin: '1rem 0' }}>
    <label>Upload Image:</label><br />
    <input type="file" accept="image/*" onChange={handleImageChange} />
    {uploading && <p>Uploading image…</p>}
    {preview && (
    <div style={{ marginTop: '1rem' }}>
    <img src={preview} alt="Preview" style={{ width: '200px', borderRadius: '8px' }} />
    </div>
    )}
    </div>
);}

export default ImageUploader;