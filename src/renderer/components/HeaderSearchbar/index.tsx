import { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

const HeaderSearchbar = () => {
  const [value, setValue] = useState('');

  return (
    <div className="relative flex items-center overflow-hidden rounded-full bg-white">
      <SearchIcon className="h-6 w-10 pl-4" />
      <input
        type="search"
        value={value}
        placeholder="Search for artists, songs, albums etc."
        className="mr-auto px-4"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default HeaderSearchbar;
