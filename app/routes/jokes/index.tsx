import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";

export const loader = async () => {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [joke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });
  return json({ joke })
}

export default function JokesIndexRoute() {
  const data = useLoaderData<typeof loader>()
  return (
    <div>
      <p>Here's a random joke:</p>
      <p>
        {data.joke.content}
      </p>
      <Link to=".">{data.joke.name} Permalink</Link>
    </div>
  );
}