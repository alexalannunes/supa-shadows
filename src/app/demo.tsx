"use client";

import { parseAsJson, useQueryState } from "nuqs";
import { z } from "zod";

const schema = z.array(
  z.object({
    id: z.number(),
  })
);

export function Demo() {
  const [name, setName] = useQueryState("name", { defaultValue: "ko" });
  const [todos, setTodos] = useQueryState<Array<{ id: number }>>(
    "todos",
    parseAsJson(schema.parse)
  );

  return (
    <>
      <input
        value={name || ""}
        placeholder="oi"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName(null)}>Clear</button>
      <p>Hello, {name || "anonymous visitor"}!</p>
      <button
        onClick={() => setTodos((prev) => (prev || []).concat({ id: 42 }))}
      >
        add
      </button>
      {todos?.map((s, x) => (
        <input
          key={x}
          value={s.id}
          onChange={(e) => {
            setTodos((prev) => {
              return (prev || [])?.map((f, x1) =>
                x1 === x ? { ...f, id: Number(e.target.value) } : f
              );
            });
          }}
        />
      ))}
    </>
  );
}
