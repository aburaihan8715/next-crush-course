import Image from "next/image";
import React from "react";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

//  Dynamic metadata
export async function generateMetadata({ params }) {
  const { id } = params;
  const data = await getData(id);
  return {
    title: data.title,
    description: data.desc,
  };
}

const BlogPost = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);
  return (
    <section className="flex gap-10 flex-col">
      <div className="flex gap-10">
        <div className="flex-1 flex gap-4 flex-col">
          <h1 className="text-2xl font-semibold">{data.title}</h1>
          <p>{data.desc}</p>

          <div className="flex gap-3 items-center">
            <div>
              <div className="relative h-10 w-10 ring-2 rounded-full ring-offset-1">
                <Image
                  className="object-cover rounded-full"
                  fill={true}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src={data.image}
                  alt="user image"
                />
              </div>
            </div>
            <div className="capitalize">{data.username}</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="h-60 relative">
            <Image className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" fill={true} src={data.image} alt="user image" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p>{data.content}</p>
      </div>
    </section>
  );
};

export default BlogPost;
