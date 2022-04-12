import { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

const HeaderSearchbar = () => {
  const [value, setValue] = useState('');

  return (
    <div className="relative bg-white rounded-full flex items-center overflow-hidden">
      <SearchIcon className="w-10 h-6 pl-4" />
      <input
        type="search"
        value={value}
        placeholder="Search for artists, songs, albums etc."
        className="px-4 mr-auto"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default HeaderSearchbar;
