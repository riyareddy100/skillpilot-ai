import { useState } from "react";
import SearchInput from "@/components/common/SearchInput";

const Hero = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", search);
  };

  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
      <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
        🚀 AI Powered Learning
      </span>

      <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900">
        Learn Anything with AI
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-600">
        Build personalized roadmaps, practice real-world projects,
        solve quizzes, and master any skill with your own AI mentor.
      </p>

      <div className="mt-10 w-full max-w-2xl">
        <SearchInput
          value={search}
          placeholder="Search any skill..."
          onChange={setSearch}
          onSearch={handleSearch}
        />
      </div>
    </section>
  );
};

export default Hero;