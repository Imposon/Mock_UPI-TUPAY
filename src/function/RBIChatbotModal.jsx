import React, { useState } from 'react';
import axios from 'axios';

const RBIChatbotModal = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // 🛑 Do NOT expose this in public repositories
  const OPENROUTER_API_KEY = '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'; // Replace with your key

  const fetchAnswerFromOpenRouter = async (userInput) => {
    setLoading(true);
    try {
      const res = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'openai/gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Answer this UPI safety query in a helpful tone: ${userInput}`,
            },
          ],
          temperature: 0.6,
        },
        {
          headers: {
            Authorization: `Bearer ${OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'http://localhost:3000',
            'X-Title': 'RBI UPI Chatbot',
          },
        }
      );

      const answer = res.data?.choices?.[0]?.message?.content?.trim();
      setResponse(answer || '⚠️ No response from AI.');
    } catch (err) {
      console.error('OpenRouter error:', err.response?.data || err.message);
      setResponse('⚠️ AI did not respond correctly. Check API key or try again.');
    }
    setLoading(false);
  };

  const handleAsk = () => {
    if (!input.trim()) return;
    setResponse('');
    fetchAnswerFromOpenRouter(input.trim());
  };

  return (
    <div className="chatbot-modal" style={styles.modal}>
      <div className="chatbot-content" style={styles.content}>
        <h2>🤖 UPI Safety Bot</h2>
        <button style={styles.closeBtn} onClick={onClose}>×</button>

        <input
          type="text"
          placeholder="Ask a UPI safety question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
          style={styles.input}
        />

        <button
          onClick={handleAsk}
          disabled={loading || !input.trim()}
          style={styles.askButton}
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>

        {response && <div style={styles.responseBox}>{response}</div>}
      </div>
    </div>
  );
};

const styles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  content: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    width: '90%',
    maxWidth: 500,
    boxShadow: '0 0 20px rgba(0,0,0,0.2)',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 14,
    fontSize: 24,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    border: '1px solid #ccc',
    marginTop: 12,
    marginBottom: 8,
    fontSize: 16,
  },
  askButton: {
    padding: '10px 20px',
    borderRadius: 8,
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  responseBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    whiteSpace: 'pre-wrap',
    border: '1px solid #eee',
  },
};

export default RBIChatbotModal;
