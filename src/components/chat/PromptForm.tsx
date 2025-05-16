import { useEffect, useState } from 'react';
import { RxPaperPlane } from 'react-icons/rx';

const placeholderOptions = [
  "What's the date and time for the opening keynote?",
  'Are there any sessions focused on RAG?',
  'Are there any workshops focused on GPT-4?',
  'Who are the keynote speakers this year?',
  'Will there be any sessions about Evals?',
  'Is there a Q&A session after each talk?',
  'Are there any workshops on developing Agents?',
  'Are there any talks about vector databases?',
  'Are meals and refreshments provided?',
  'When is the after-party?',
] as const;

export default function PromptForm({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
}: {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}) {
  const [placeholderText, setPlaceholderText] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * placeholderOptions.length);
    setPlaceholderText(placeholderOptions[randomIndex] as string);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="relative flex items-center">
        <input
          autoFocus
          disabled={isLoading}
          className="flex-1 appearance-none rounded-lg border border-gray-700 bg-gray-900 p-2 text-sm"
          value={input}
          onChange={handleInputChange}
          placeholder={isLoading ? 'Loading...' : placeholderText}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`absolute right-2 rounded-lg bg-blue-700 p-2 text-white hover:bg-blue-600 ${
            isLoading && ' cursor-not-allowed bg-gray-700'
          }`}
        >
          <RxPaperPlane className="h-3 w-3" />
        </button>
      </div>
    </form>
  );
}
