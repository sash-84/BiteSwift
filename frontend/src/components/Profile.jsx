import { useState, UserContext } from "react";
import {UserContext} from "../UserContext";

const ProfilePage = () => {
      const {user, setUser} = useContext(UserContext); 
  const [selectedTab, setSelectedTab] = useState("Orders");

  const menuItems = [
    { name: "Orders", icon: "📦" },
    { name: "Swiggy One", icon: "🔥" },
    { name: "Favourites", icon: "❤️" },
    { name: "Payments", icon: "💳" },
    { name: "Addresses", icon: "🏠" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-6">MY ACCOUNT</h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`p-2 flex items-center cursor-pointer rounded-lg 
                ${selectedTab === item.name ? "bg-gray-200 font-bold" : ""}`}
              onClick={() => setSelectedTab(item.name)}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        {/* User Info */}
        <div className="bg-blue-600 text-white p-6 rounded-lg flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Sakshi</h1>
            <p className="text-sm">sakshikatale161@gmail.com</p>
          </div>
          <button className="border border-white px-4 py-2 rounded-md">
            Edit Profile
          </button>
        </div>

        {/* Content Section */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{selectedTab}</h2>
          {selectedTab === "Orders" ? (
            <div className="text-center text-gray-500">
              <p>Your orders will be listed here.</p>
              <img src="https://via.placeholder.com/150" alt="No orders" className="mx-auto mt-4" />
              <p className="mt-2">Go ahead and find some awesome restaurants near you...</p>
            </div>
          ) : (
            <p>Content for {selectedTab} will appear here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
