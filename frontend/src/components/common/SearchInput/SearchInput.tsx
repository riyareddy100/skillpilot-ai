import type { SearchInputProps } from "./SearchInput.types";

const SearchInput = ({
  value,
  placeholder,
  onChange,
  onSearch,
}: SearchInputProps) => {
  return (
    <div className="flex w-full gap-4">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
      />

      <button
        onClick={onSearch}
        className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;