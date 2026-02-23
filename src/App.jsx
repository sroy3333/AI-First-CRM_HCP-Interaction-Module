import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({});
  const [aiText, setAiText] = useState("");
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: JSON.stringify(formData) })
    });

    alert("Interaction Logged Successfully");
  };

  const handleAiLog = async () => {
  if (!aiText.trim()) return;

  // Add user message bubble
  setMessages((prev) => [
    ...prev,
    { type: "user", text: aiText }
  ]);

  const response = await fetch("http://127.0.0.1:8000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: aiText })
  });

  const data = await response.json();

  // Fill form
  setFormData({
    hcp_name: data.hcp_name || "",
    interaction_type: data.interaction_type || "",
    date: data.interaction_date || "",
    time: data.interaction_time
      ? data.interaction_time.slice(0, 5)
      : "",
    attendees: data.attendees || "",
    topics: data.topics_discussed || "",
    materials: data.materials_shared || "",
    samples: data.samples_distributed || "",
    sentiment: data.sentiment || "",
    outcomes: data.outcomes || "",
    follow_up: data.follow_up || ""
  });

  // Add AI success message
  setMessages((prev) => [
    ...prev,
    {
      type: "bot",
      text:
        "✅ **Interaction logged successfully!**\n\n" +
        "The details (HCP Name, Date, Sentiment, and Materials) have been automatically populated based on your summary.\n\n" +
        "Would you like me to suggest a specific follow-up action?"
    }
  ]);

  setAiText("");
};

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "30px" }}>
        AI-First CRM - HCP Module
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px"
        }}
      >
        {/* LEFT FORM CARD */}
        <div
          style={{
            width: "700px",
            background: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
          }}
        >
          <h3>Log HCP Interaction</h3>

          <form onSubmit={handleSubmit}>
            <label>HCP Name</label>
            <input 
              name="hcp_name"
              value={formData.hcp_name || ""}
              onChange={handleChange}
              style={inputStyle} 
            />

            <label>Interaction Type</label>
            <select 
              name="interaction_type"
              value={formData.interaction_type || ""}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Interaction Type</option>
              <option>Meeting</option>
              <option>Call</option>
              <option>Conference</option>
            </select>

            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ flex: 1 }}>
                <label>Date</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date || ""}
                  onChange={handleChange}
                  style={inputStyle} 
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Time</label>
                <input 
                  type="time" 
                  name="time"
                  value={formData.time || ""}
                  onChange={handleChange}
                  style={inputStyle} 
                />
              </div>
            </div>

            <label>Attendees</label>
            <textarea 
              name="attendees"
              value={formData.attendees || ""}
              onChange={handleChange}
              style={textareaStyle} 
            />

            <label>Topics Discussed</label>
            <textarea 
              name="topics"
              value={formData.topics || ""}
              onChange={handleChange}
              style={textareaStyle} 
            />

            <label>Materials Shared</label>
            <textarea 
              name="materials"
              value={formData.materials || ""}
              onChange={handleChange}
              style={textareaStyle} 
            />

            <label>Samples Distributed</label>
            <textarea 
              name="samples"
              value={formData.samples || ""}
              onChange={handleChange}
              style={textareaStyle} 
            />

            <label>Sentiment</label>
            <div style={{ marginBottom: "15px" }}>
              <input 
                type="radio" 
                name="sentiment"
                value="Positive"
                checked= {formData.sentiment === "Positive"}
                onChange={handleChange} 
              /> Positive
              <input 
                type="radio" 
                name="sentiment"
                value="Neutral"
                style={{ marginLeft: "20px" }}
                checked= {formData.sentiment === "Neutral"}
                onChange={handleChange} 
              /> Neutral
              <input 
                type="radio" 
                name="sentiment"
                value="Negative"
                style={{ marginLeft: "20px" }}
                checked= {formData.sentiment === "Negative"}
                onChange={handleChange} 
              /> Negative
            </div>

            <label>Outcomes</label>
            <textarea 
              name="outcomes"
              value={formData.outcomes || ""}
              onChange={handleChange}
              style={textareaStyle} 
            />

            <label>Follow-up Actions</label>
            <textarea 
              name="follow_up"
              value={formData.follow_up || ""}
              onChange={handleChange}
              style={textareaStyle} 
            />

            <button type="submit" style={buttonStyle}>
              Log Interaction
            </button>
          </form>
        </div>

        {/* RIGHT AI PANEL */}
        <div
  style={{
    width: "350px",
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    height: "600px"
  }}
>
  <h3>🤖 AI Assistant</h3>
  <p style={{ fontSize: "14px", color: "#666" }}>
    Log interaction details via chat
  </p>

  {/* Chat Area */}
  <div
    style={{
      flex: 1,
      overflowY: "auto",
      marginBottom: "10px",
      paddingRight: "5px"
    }}
  >
    <div
      style={{
        background: "#e6f4f1",
        padding: "10px",
        borderRadius: "8px",
        fontSize: "13px",
        marginBottom: "10px"
      }}
    >
      Log interaction details here (e.g., "Met Dr. Smith, discussed Product-X efficacy, positive sentiment, shared brochure")
    </div>

    {messages.map((msg, index) => (
      <div
        key={index}
        style={{
          background:
            msg.type === "user" ? "#f1f1f1" : "#d1f5d3",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "8px",
          fontSize: "13px",
          whiteSpace: "pre-line"
        }}
      >
        {msg.text}
      </div>
    ))}
  </div>

  {/* Input Area */}
  <div style={{ display: "flex", gap: "10px" }}>
    <textarea
      placeholder="Describe Interaction..."
      value={aiText}
      onChange={(e) => setAiText(e.target.value)}
      style={{
        flex: 1,
        padding: "8px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        resize: "none"
      }}
    />
    <button
      onClick={handleAiLog}
      style={{
        width: "60px",
        backgroundColor: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}
    >
      Log
    </button>
  </div>
</div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "6px"
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  minHeight: "80px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px"
};
