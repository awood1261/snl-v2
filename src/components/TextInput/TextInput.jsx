import React from "react";

const TextInput = ({ label, value, onChange, error, disabled }) => {
  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor="text-input"
        className={`mb-1 font-bold ${
          error ? "text-red-400" : "text-amber-300"
        }`}
      >
        {label}
      </label>
      <input
        id="text-input"
        type="text"
        value={value}
        onChange={onChange}
        className={`px-3 py-2 border ${
          error ? "border-red-400" : "border-gray-300"
        } rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent`}
      />
    </div>
  );
};

export default TextInput;
