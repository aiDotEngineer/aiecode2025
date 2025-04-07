import { Search } from 'lucide-react';

import { Input } from '~/components/ui/input';

export interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative">
      <Input
        className="h-12 bg-white pl-10 text-base"
        type="search"
        placeholder="Find your dream job"
        value={value}
        onChange={onChange}
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-5 w-5 text-gray-500" />
      </div>
    </div>
  );
}
