"use client";
import { parseAsInteger, useQueryState } from "nuqs";
import { memo, useCallback } from "react";

function Button({ onClick, children }) {
  console.log("Button component rendered");
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
function Demo() {
  const [search, setSearch] = useQueryState(
    "me",
    parseAsInteger.withDefault(0)
  );
  const s = useCallback(() => setSearch((e) => e + 1), []);
  return (
    <div>
      <Button onClick={s}>+me-{search}</Button>
    </div>
  );
}
const View = memo(({ search }) => {
  console.log("View component rendered with search:", search);
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-semibold">View</h2>
      <div>{search}</div>
    </div>
  );
});
View.displayName = "A";
function Search() {
  const [search, setSearch] = useQueryState(
    "count",
    parseAsInteger.withDefault(0)
  );

  return (
    <div>
      search
      <button onClick={() => setSearch((e) => e + 1)}>+{search}</button>
      <hr />
      <View search={search} />
    </div>
  );
}

export default function Experiments() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-2xl font-bold">Experiments</h1>

      <Search />
      <Demo />
    </div>
  );
}
