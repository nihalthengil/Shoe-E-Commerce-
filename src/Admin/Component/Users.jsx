import React, { useContext, useState } from "react";
import { AdminContext } from "../../Context/AdminContext";
import UserDetail from "./UserDetail";

const Users = () => {
  const { users } = useContext(AdminContext);
  const [showuser, setShowuser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUser = (user) => {
    setShowuser(true);
    setSelectedUser(user);
  };

  return (
    <>
      {showuser ? (
        <UserDetail user={selectedUser} />
      ) : (
        <div>
          <table className="w-full border-collapse table-auto shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-6 py-3 text-left">user</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-normal">{user.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleUser(user)}
                      className="bg-slate-500 text-white px-4 py-2 mr-4 rounded-md hover:bg-slate-600 transition duration-200 ease-in-out"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Users;
