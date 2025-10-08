'use client';

import React, { useRef } from 'react';
import { Bold, Italic, List, ListOrdered, Heading1, Heading2, Link as LinkIcon } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, placeholder }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertTag = (openTag: string, closeTag: string) => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    
    const before = value.substring(0, start);
    const after = value.substring(end);
    
    const newText = `${before}${openTag}${selectedText || 'text'}${closeTag}${after}`;
    onChange(newText);

    // Set cursor position after insertion
    setTimeout(() => {
      if (selectedText) {
        textarea.setSelectionRange(start + openTag.length, end + openTag.length);
      } else {
        const cursorPos = start + openTag.length;
        textarea.setSelectionRange(cursorPos, cursorPos + 4); // Select "text"
      }
      textarea.focus();
    }, 0);
  };

  const toolbarButtons = [
    { icon: Heading1, label: 'Heading 1', action: () => insertTag('<h1>', '</h1>') },
    { icon: Heading2, label: 'Heading 2', action: () => insertTag('<h2>', '</h2>') },
    { icon: Bold, label: 'Bold', action: () => insertTag('<strong>', '</strong>') },
    { icon: Italic, label: 'Italic', action: () => insertTag('<em>', '</em>') },
    { icon: List, label: 'Bullet List', action: () => insertTag('<ul>\n  <li>', '</li>\n</ul>') },
    { icon: ListOrdered, label: 'Numbered List', action: () => insertTag('<ol>\n  <li>', '</li>\n</ol>') },
    { icon: LinkIcon, label: 'Link', action: () => insertTag('<a href="url">', '</a>') },
  ];

  return (
    <div className="rich-text-editor-wrapper border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 p-2 flex flex-wrap gap-1">
        {toolbarButtons.map((button, index) => (
          <button
            key={index}
            type="button"
            onClick={button.action}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
            title={button.label}
          >
            <button.icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </button>
        ))}
      </div>

      {/* Editor */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Write your content here...\n\nUse the toolbar buttons above to add formatting.'}
        className="w-full h-64 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none font-sans text-sm"
        style={{
          resize: 'vertical',
          minHeight: '256px',
        }}
      />

      {/* Help Text */}
      <div className="bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 px-4 py-2 text-xs text-gray-600 dark:text-gray-400">
        <strong>Quick Tips:</strong> Select text and click toolbar buttons to format. You can also type HTML tags directly.
      </div>
    </div>
  );
};

export default RichTextEditor;

