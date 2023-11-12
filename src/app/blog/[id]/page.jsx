import Image from "next/image";
import React from "react";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);
  return (
    <section className="flex gap-10 flex-col">
      <div className="flex gap-10">
        <div className="flex-1 flex gap-4 flex-col">
          <h1 className="text-2xl font-semibold">{data.title}</h1>
          <p>{data.body}</p>

          <div className="flex gap-3 items-center">
            <div>
              <div className="relative h-10 w-10 ring-2 rounded-full ring-offset-1">
                <Image
                  className="object-cover rounded-full"
                  fill={true}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                  alt="user image"
                />
              </div>
            </div>
            <div className="capitalize">John Doe</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="h-60 relative">
            <Image
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
              fill={true}
              src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
              alt="user image"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cumque voluptate hic magnam distinctio, quidem pariatur, possimus inventore,
          id minus culpa quas sint? Porro ad consectetur vero explicabo voluptatum minus eligendi, odio, impedit recusandae dolorum optio asperiores
          quod facilis cumque laudantium reprehenderit fugit tempora. Earum amet obcaecati sit nulla quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo officiis eius ut facilis animi magni ipsa sapiente consequuntur? Vitae
          voluptate rerum nemo itaque optio quaerat possimus ut harum nulla, recusandae odio aperiam accusantium nisi, officiis corporis quasi et
          pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nihil impedit adipisci tempora asperiores illo quidem pariatur corporis,
          eaque natus sit consectetur ea id eum distinctio repellendus esse incidunt accusamus sapiente ullam enim sed? Commodi harum tenetur
          consequatur cum quasi accusantium iusto ab, dolor laudantium magni nostrum atque velit excepturi obcaecati fuga recusandae sed voluptatum
          debitis! Ex a accusantium enim.
        </p>
      </div>
    </section>
  );
};

export default BlogPost;
