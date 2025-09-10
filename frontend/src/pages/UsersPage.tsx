import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import '../../public/css/UsersPage.css';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const API_BASE_URL = 'http://localhost:3000';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [userToDeleteId, setUserToDeleteId] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    username: '',
    email: ''
  });

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      if (!response.ok) {
        throw new Error('Ağ yanıtı başarılı değil');
      }
      const data: User[] = await response.json();
      setUsers(data);
    } catch (err) {
      setError("Kullanıcıları getirme başarısız oldu.");
      console.error("Hata:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateOrUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      try {
        const response = await fetch(`${API_BASE_URL}/users/${editingUser.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });
        if (!response.ok) {
          throw new Error('Kullanıcı güncelleme başarısız oldu.');
        }
        await fetchUsers();
        closeModal();
      } catch (err) {
        setError("Kullanıcı güncelleme başarısız oldu.");
        console.error("Hata:", err);
      }
    } else {
      try {
        const response = await fetch(`${API_BASE_URL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });
        if (!response.ok) {
          throw new Error('Kullanıcı oluşturma başarısız oldu.');
        }
        await fetchUsers();
        closeModal();
      } catch (err) {
        setError("Kullanıcı oluşturma başarısız oldu.");
        console.error("Hata:", err);
      }
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Kullanıcı silme başarısız oldu.');
      }
      await fetchUsers();
    } catch (err) {
      setError("Kullanıcı silme başarısız oldu.");
      console.error("Hata:", err);
    }
  };

  const confirmDeleteUser = (id: number) => {
    setUserToDeleteId(id);
    setIsConfirmModalOpen(true);
  };

  const handleConfirmAction = (isConfirmed: boolean) => {
    if (isConfirmed && userToDeleteId !== null) {
      handleDeleteUser(userToDeleteId);
    }
    setIsConfirmModalOpen(false);
    setUserToDeleteId(null);
  };

  const openCreateModal = () => {
    setEditingUser(null);
    setFormState({ name: '', username: '', email: '' });
    setIsModalOpen(true);
  };

  const openEditModal = (user: User) => {
    setEditingUser(user);
    setFormState({ name: user.name, username: user.username, email: user.email });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <div>Kullanıcılar yükleniyor...</div>;
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
            <h1 className="page-title">Kullanıcı Listesi</h1>
            <button
              onClick={openCreateModal}
              className="btn-create">
              Yeni Kullanıcı Oluştur
            </button>
        </div>

        <ul className="users-list-grid">
          {users.map(user => (
            <li key={user.id} className="user-item">
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>İsim:</strong> {user.name}</p>
              <p><strong>Kullanıcı Adı:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <button
                onClick={() => openEditModal(user)}
                className="btn-edit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                </svg>
              </button>
              <button
                onClick={() => confirmDeleteUser(user.id)}
                className="btn-delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        {isModalOpen && createPortal(
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="modal-title">{editingUser ? 'Kullanıcıyı Düzenle' : 'Yeni Kullanıcı Oluştur'}</h2>
              <form onSubmit={handleCreateOrUpdateUser}>
                <div className="form-group">
                  <label className="form-label">İsim:</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Kullanıcı Adı:</label>
                  <input
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
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
                    className={`btn-submit ${editingUser ? '' : 'create'}`}>
                    {editingUser ? 'Güncelle' : 'Oluştur'}
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
              <p>Bu kullanıcıyı silmek istediğinizden emin misiniz?</p>
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

export default UsersPage;

