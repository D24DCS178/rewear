import { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import ImageUploader from '../components/ImageUploader';

function AddItem() {
    const [itemData, setItemData] = useState({
    title: '',
    size: '',
    category: '',
    condition: '',
    tags: '',
    imageUrl: '',
    });

    const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (url) => {
    setItemData({ ...itemData, imageUrl: url });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!itemData.title || !itemData.imageUrl) {
    alert('Please provide a title and image.');
    return;
    }
    try {
      await addDoc(collection(db, 'items'), {
        ...itemData,
        tags: itemData.tags.split(',').map((tag) => tag.trim()),
        createdAt: Timestamp.now(),
      });
      alert('Item listed successfully!');
      setItemData({
        title: '',
        size: '',
        category: '',
        condition: '',
        tags: '',
        imageUrl: '',
      });
    } catch (err) {
      console.error('Error saving item:', err);
      alert('Failed to add item.');
    }
    };

    return (
        <div className="container">
        <h2>List a New Clothing Item</h2>
        <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={itemData.title} onChange={handleChange} required />
        <input name="size" placeholder="Size" value={itemData.size} onChange={handleChange} />
        <input name="category" placeholder="Category (e.g., Jeans, Dress)" value={itemData.category} onChange={handleChange} />
        <input name="condition" placeholder="Condition (e.g., New, Gently Used)" value={itemData.condition} onChange={handleChange} />
        <input name="tags" placeholder="Tags (comma-separated)" value={itemData.tags} onChange={handleChange} />
        <ImageUploader onUpload={handleImageUpload} />
        <br />
        <button type="submit">Submit Item</button>
        </form>
        </div>
    );
}

export default AddItem;