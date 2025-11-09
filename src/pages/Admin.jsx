import React, { useState } from "react";
import { motion } from "motion/react";
import toast from "react-hot-toast";

const Admin = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Product added successfully!");
    setProductName("");
    setProductDescription("");
  };

  return (
    <div className='min-h-screen dark:bg-black bg-white py-20 px-4 sm:px-12 lg:px-24 xl:px-40'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl'
      >
        <h1 className='text-3xl font-bold mb-6 text-gray-800 dark:text-white'>Admin Panel</h1>
        
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className='w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Product Description
            </label>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              rows={4}
              className='w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
              required
            />
          </div>

          <button
            type="submit"
            className='w-full bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white py-3 rounded-lg hover:scale-105 transition-all'
          >
            Add Product
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Admin;
