import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import '../../public/css/PostsPage.css';

interface Post {
  id: number;
  userId: number;
  title: string;
}

const API_BASE_URL = 'http://localhost:3000';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [postToDeleteId, setPostToDeleteId] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    title: ''
  });

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/posts`);
      if (!response.ok) {
        throw new Error('Ağ yanıtı başarılı değil');
      }
      const data: Post[] = await response.json();
      setPosts(data);
    } catch (err) {
      setError("Postları getirme başarısız oldu.");
      console.error("Hata:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateOrUpdatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      try {
        const response = await fetch(`${API_BASE_URL}/posts/${editingPost.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });
        if (!response.ok) {
          throw new Error('Post güncelleme başarısız oldu.');
        }
        await fetchPosts();
        closeModal();
      } catch (err) {
        setError("Post güncelleme başarısız oldu.");
        console.error("Hata:", err);
      }
    } else {
      try {
        const response = await fetch(`${API_BASE_URL}/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formState, userId: 1 }), 
        });
        if (!response.ok) {
          throw new Error('Post oluşturma başarısız oldu.');
        }
        await fetchPosts();
        closeModal();
      } catch (err) {
        setError("Post oluşturma başarısız oldu.");
        console.error("Hata:", err);
      }
    }
  };

  const handleDeletePost = async (id: number) => {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Post silme başarısız oldu.');
      }
      await fetchPosts();
    } catch (err) {
      setError("Post silme başarısız oldu.");
      console.error("Hata:", err);
    }
  };

  const confirmDeletePost = (id: number) => {
    setPostToDeleteId(id);
    setIsConfirmModalOpen(true);
  };

  const handleConfirmAction = (isConfirmed: boolean) => {
    if (isConfirmed && postToDeleteId !== null) {
      handleDeletePost(postToDeleteId);
    }
    setIsConfirmModalOpen(false);
    setPostToDeleteId(null);
  };

  const openCreateModal = () => {
    setEditingPost(null);
    setFormState({ title: ''});
    setIsModalOpen(true);
  };

  const openEditModal = (post: Post) => {
    setEditingPost(post);
    setFormState({ title: post.title});
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <div>Postlar yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-link">Anasayfa</Link>
        <Link to="/users" className="nav-link">Users</Link>
        <Link to="/posts" className="nav-link">Posts</Link>
      </nav>
      <div className="page-container">
        <div className="page-header">
            <h1 className="page-title">Post Listesi</h1>
            <button
              onClick={openCreateModal}
              className="btn-create">
              Yeni Post Oluştur
            </button>
        </div>
        
        <ul className="posts-list-grid">
          {posts.map(post => (
            <li key={post.id} className="post-item">
              <p><strong>ID:</strong> {post.id}</p>
              <p><strong>Kullanıcı ID:</strong> {post.userId}</p>
              <p><strong>Başlık:</strong> {post.title}</p>
              <div className="post-actions">
              <button
                onClick={() => openEditModal(post)}
                className="btn-edit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                </svg>
              </button>
              <button
                onClick={() => confirmDeletePost(post.id)}
                className="btn-delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                </svg>
              </button>
              </div>
            </li>
          ))}
        </ul>
        
        {isModalOpen && createPortal(
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="modal-title">{editingPost ? 'Postu Düzenle' : 'Yeni Post Oluştur'}</h2>
              <form onSubmit={handleCreateOrUpdatePost}>
                <div className="form-group">
                  <label className="form-label">Başlık:</label>
                  <input
                    type="text"
                    name="title"
                    value={formState.title}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-actions">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="btn-cancel">
                    İptal
                  </button>
                  <button
                    type="submit"
                    className={`btn-submit ${editingPost ? '' : 'create'}`}>
                    {editingPost ? 'Güncelle' : 'Oluştur'}
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
        
        {isConfirmModalOpen && createPortal(
          <div className="modal-overlay">
            <div className="confirm-modal-content">
              <p>Bu postu silmek istediğinizden emin misiniz?</p>
              <div className="confirm-modal-actions">
                <button
                  onClick={() => handleConfirmAction(true)}
                  className="btn-yes">
                  Evet
                </button>
                <button
                  onClick={() => handleConfirmAction(false)}
                  className="btn-no">
                  Hayır
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </>
  );
};

export default PostsPage;
