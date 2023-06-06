import { SearchBar } from "./SearchBar";

type HeaderProps = {
  onSearch: (searchTerm: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <div className="flex justify-between px-2 select-none">
      <SearchBar onSearch={onSearch} />
      <h1 className="h-[35px] text-4xl xl:text-7xl xl:h-[66px] left-2">
        <a href="http://localhost:3000">Repo Rummage</a>
      </h1>
    </div>
  );
};

export default Header;
