// app/EbookDownload.tsx
"use client"; // This directive indicates that this component will be rendered on the client-side

import React, { useState } from "react";

const EbookDownload = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the inputs
    if (!name || !email) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    // Send the data to the API
    const response = await fetch("/api/save-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      // Trigger the PDF download
      const link = document.createElement("a");
      link.href = "/ebook.pdf"; // Adjust this path to your actual PDF location in the public folder
      link.download = "free_ebook.pdf";
      link.click();
      setName("");
      setEmail("");
    } else {
      setError("Failed to save data.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-md bg-transparent">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4">
          <div className="flex-1 mr-2">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-100 p-2 border border-[#525fe1] rounded"
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-100 p-2 mt-2 border border-[#525fe1] rounded"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`mojedugme ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
        >
          {isSubmitting ? "Downloading..." : "Download Free eBook"}
        </button>
      </form>
    </div>
  );
};

export default EbookDownload;
