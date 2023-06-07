import { SearchBar } from "./SearchBar";

type HeaderProps = {
  onSearch: (searchTerm: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <div className="flex justify-between px-2 select-none">
      <SearchBar onSearch={onSearch} />
      <h1 className="text-2xl xl:text-4xl">
        <a href="http://localhost:3000">Repo Rummage</a>
      </h1>
    </div>
  );
};

export default Header;
