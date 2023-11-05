import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createTweetService } from '../../services/tweetService';

import { handleAddFilePreview } from '../../utils/handleAddFilePreview';
import { handleRemoveFilePreview } from '../../utils/handleRemoveFilePreview';

import './TweetCreateForm.css';

const TweetCreateForm = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTweetCreate = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('text', text);

      if (file) formData.append('image', file);

      const body = await createTweetService(formData);

      if (body.status === 'error') {
        throw new Error(body.message);
      }

      navigate('/');
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className='tweet-create-form'
      onSubmit={(e) => {
        e.preventDefault();
        handleTweetCreate();
      }}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength='280'
        autoFocus
        required
      />

      <div className='img-prev-container'>
        <label htmlFor='file-input' className='custom-file-label'></label>

        <input
          type='file'
          id='file-input'
          accept='image/*'
          ref={fileInputRef}
          onChange={(e) => handleAddFilePreview(e, setFile, setPreviewUrl)}
        />

        {previewUrl && (
          <img
            src={previewUrl}
            onClick={() => {
              handleRemoveFilePreview(fileInputRef, setFile, setPreviewUrl);
            }}
            alt='Previsualización'
            title='Eliminar imagen'
          />
        )}
        <button className='new-tweet-btn' disabled={loading}>
          New Tweet
        </button>
      </div>
    </form>
  );
};

export default TweetCreateForm;
