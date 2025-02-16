import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const TextForm = () => {
  const [text, setText] = useState("This is a demo paragraph written for your reference.");
  const [alert, setAlert] = useState({ show: false, message: '' });

  const showAlert = (message) => {
    setAlert({ show: true, message });
    setTimeout(() => setAlert({ show: false, message: '' }), 2000);
  };

  const handleUpClick = () => setText(text.toUpperCase());
  const handleLoClick = () => setText(text.toLowerCase());
  const handleTitleClick = () => setText(
    text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(" ")
  );

  const handleT2SClick = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      showAlert("Speech synthesis not supported in your browser");
    }
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      showAlert("Content copied to clipboard!");
    } catch (err) {
      showAlert("Failed to copy text");
    }
  };

  const handleClearClick = () => setText("");
  const handleOnChange = (event) => setText(event.target.value);

  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  const charCount = text.length;

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg space-y-4 mb-12">
      {alert.show && (
        <div className="flex items-center gap-2 p-4 mb-4 rounded-lg bg-blue-900 text-blue-100">
          <AlertCircle className="h-4 w-4" />
          <p>{alert.message}</p>
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">
          {wordCount} words, {charCount} characters
        </h2>
      </div>

      <textarea
        className="w-full p-3 min-h-[150px] rounded-lg border 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   bg-gray-800 border-gray-700 text-white"
        value={text}
        onChange={handleOnChange}
        placeholder="Enter your text here..."
      />

      <div className="flex flex-wrap gap-2">
        <button 
          onClick={handleUpClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                     transition-colors duration-200">
          Upper
        </button>
        <button 
          onClick={handleLoClick}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 
                     transition-colors duration-200">
          Lower
        </button>
        <button 
          onClick={handleTitleClick}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 
                     transition-colors duration-200">
          Title Case
        </button>
        <button 
          onClick={handleT2SClick}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 
                     transition-colors duration-200">
          Text 2 Speech
        </button>
        <button 
          onClick={handleCopyClick}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 
                     transition-colors duration-200">
          Copy
        </button>
        <button 
          onClick={handleClearClick}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 
                     transition-colors duration-200">
          Clear
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white mb-2">Preview</h3>
        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 min-h-[50px]">
          {text.length > 0 ? text : "Nothing to preview..."}
        </div>
      </div>
    </div>
  );
};

export default TextForm;