import { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

const HeaderSearchbar = () => {
  const [value, setValue] = useState('');

  return (
    <div className="relative flex w-1/3 items-center overflow-hidden rounded-full bg-white">
      <SearchIcon className="w- h-6 w-10 pl-4" />
      <input
        type="search"
        value={value}
        placeholder="Search for artists, songs, albums etc."
        className="mr-auto w-full px-4 py-2"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default HeaderSearchbar;
