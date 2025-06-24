import React, { useEffect, useState } from "react";

type FacebookPost = {
  id: number;
  href: string;
  type: "post" | "video";
};

const SHEET_ID = "1yk0x3oNmzAGY8JzvctDOhLvSafZ1PZ2ewVNCT9R_zRE"; // Replace with your sheet id
const SHEET_JSON_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

const Feedback: React.FC = () => {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(SHEET_JSON_URL);
        if (!res.ok) throw new Error("Failed to fetch Google Sheet data");
        const text = await res.text();

        // The response is JSON but wrapped in some characters, so we need to clean it
        const jsonStr = text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1);
        const data = JSON.parse(jsonStr);

        // Extract rows from data.table.rows
        const rows = data.table.rows;

        // Map rows to FacebookPost objects
        const fetchedPosts: FacebookPost[] = rows.map((row: any) => {
          return {
            id: Number(row.c[0]?.v),
            href: row.c[1]?.v,
            type: row.c[2]?.v === "video" ? "video" : "post",
          };
        });

        setPosts(fetchedPosts);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="feedback">
      <div className="gallery-container">
        <div className="fbtitle">
          <h1>Client Feedback & Highlights</h1>
          <p>
            Every post tells a story, and every story reflects the trust,
            happiness, and memories we've built with our amazing clients.
          </p>
        </div>
        <div className="fbcontent">
          <div className="gallery-grid">
            {posts.map((post) => (
              <div key={post.id} className="gallery-item">
                {post.type === "post" ? (
                  <div className="fb-post" data-href={post.href} data-width="500"></div>
                ) : (
                  <div
                    className="fb-video"
                    data-href={post.href}
                    data-width="500"
                    data-show-text="true"
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
