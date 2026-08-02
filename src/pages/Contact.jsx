import { useState } from "react";

function Contact() {

  const [message, setMessage] = useState("");

  const [showHelp, setShowHelp] = useState(false);

  return (
    <div>

      <h2>Contact</h2>

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <p>
        You typed:
        {message}
      </p>

      <p>
        Characters:
        {message.length}
      </p>

      <button
        onClick={() => setShowHelp(!showHelp)}
      >
        Toggle Help
      </button>

      {showHelp && (
        <p>
          Enter your contact message here.
        </p>
      )}

    </div>
  );
}

export default Contact;