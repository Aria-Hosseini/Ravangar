'use client';
import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string | null;
  email: string;
  created_at: string;
};

export function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editUserData, setEditUserData] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('/api/users')
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.error('خطا در دریافت کاربران:', err));
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm('آیا از حذف این کاربر مطمئن هستید؟');
    if (!confirmDelete) return;

    const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } else {
      alert('خطا در حذف کاربر');
    }
  };

  const handleView = (user: User) => {
    setSelectedUser(user);
    alert(`👁️ کاربر: ${user.name ?? 'بدون نام'}\nایمیل: ${user.email}`);
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setEditUserData({
      name: user.name ?? '',
      email: user.email,
    });
    setIsEditOpen(true);
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser) return;

    const res = await fetch(`/api/users/${selectedUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editUserData),
    });

    if (res.ok) {
      fetchUsers();
      setIsEditOpen(false);
      setSelectedUser(null);
    } else {
      alert('خطا در ویرایش کاربر');
    }
  };

  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded">
          <thead className="bg-[#F3E8FF] text-[#9810FA]">
            <tr>
              <th className="py-2 px-3 text-right">شناسه</th>
              <th className="py-2 px-3 text-right">نام</th>
              <th className="py-2 px-3 text-right">ایمیل</th>
              <th className="py-2 px-3 text-right">تاریخ ثبت‌نام</th>
              <th className="py-2 px-3 text-right">عملیات</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {users.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  هنوز کاربری ثبت‌نام نکرده است.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="py-2 px-3 text-right">{user.id}</td>
                  <td className="py-2 px-3 text-right">{user.name ?? 'بدون نام'}</td>
                  <td className="py-2 px-3 text-right">{user.email}</td>
                  <td className="py-2 px-3 text-right">
                    {new Date(user.created_at).toLocaleDateString('fa-IR')}
                  </td>
                  <td className="py-2 px-3 flex justify-end gap-2">
                    <button
                      onClick={() => handleView(user)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      👁️ مشاهده
                    </button>
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-yellow-600 hover:underline text-sm"
                    >
                      ✏️ ویرایش
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      ❌ حذف
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal ویرایش کاربر */}
      {isEditOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg text-right">
            <h3 className="text-lg font-bold text-[#9810FA] mb-4">✏️ ویرایش کاربر</h3>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 block mb-1">نام</label>
                <input
                  type="text"
                  value={editUserData.name}
                  onChange={(e) => setEditUserData({ ...editUserData, name: e.target.value })}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">ایمیل</label>
                <input
                  type="email"
                  value={editUserData.email}
                  onChange={(e) => setEditUserData({ ...editUserData, email: e.target.value })}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  type="submit"
                  className="bg-[#9810FA] text-white px-4 py-1 rounded hover:bg-purple-800"
                >
                  ثبت تغییرات
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditOpen(false);
                    setSelectedUser(null);
                  }}
                  className="text-sm text-gray-500 hover:text-red-500"
                >
                  انصراف
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
