import React, { useEffect, useState } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from './api';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './components/ui/card';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Trash2, Edit } from 'lucide-react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', dateOfBirth: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateUser(editingId, form);
      setIsEditing(false);
      setEditingId(null);
    } else {
      await createUser(form);
    }
    setForm({ name: '', email: '', dateOfBirth: '' });
    fetchUsers();
  };

  const handleEdit = (user) => {
    setForm(user);
    setIsEditing(true);
    setEditingId(user._id);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 to-black p-8">
      <h1 className="text-4xl font-bold text-gray-100 mb-10">User Management</h1>

      {/* Form Card */}
      <Card className="w-full max-w-lg h-full shadow-2xl rounded-3xl bg-gray-800 text-gray-200 p-6">
        <CardHeader className="bg-gray-700 text-gray-200 p-4 rounded-2xl">
          <CardTitle className="text-xl font-semibold">{isEditing ? 'Update User' : 'Add User'}</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <CardContent className="space-y-3 mt-10">
            <Input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border border-gray-600 rounded-xl bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border border-gray-600 rounded-xl bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
              required
            />
            <Input
              type="date"
              placeholder="Date of Birth"
              value={form.dateOfBirth}
              onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
              className="w-full p-3 border border-gray-600 rounded-xl bg-gray-700 text-gray-200 focus:ring-2 focus:ring-indigo-500"
              required
            />
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition duration-200"
            >
              {isEditing ? 'Update' : 'Add'} User
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* User List */}
      <div className="mt-12 w-full max-w-lg space-y-6">
        {users.map((user) => (
          <Card key={user._id} className="flex justify-between items-center p-5 shadow-lg rounded-2xl bg-gray-800 text-gray-200 hover:bg-gray-700 transition duration-200 relative">
            <div>
              <p className="font-semibold text-xl">{user.name}</p>
              <p className="text-gray-400">{user.email}</p>
              <p className="text-gray-500">{new Date(user.dateOfBirth).toLocaleDateString()}</p>
            </div>
            <div className="flex space-x-3">
              <Button onClick={() => handleEdit(user)} className="text-yellow-400 hover:text-yellow-500 transition duration-200">
                <Edit size={20} />
              </Button>
              <Button onClick={() => handleDelete(user._id)} className="text-red-500 hover:text-red-600 transition duration-200">
                <Trash2 size={20} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
