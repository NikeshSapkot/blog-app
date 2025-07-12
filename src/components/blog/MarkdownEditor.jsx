import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor({ content, setContent }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-4 border rounded-lg h-64"
        placeholder="Write in Markdown..."
      />
      <div className="p-4 border rounded-lg prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}