"use client";
import GlobalLoading from "@/ui/GlobalLoading";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import ErrorMessage from "@/ui/ErrorMessage";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  // console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(`/api/posts?username=${session?.data.user.name}`, fetcher);

  // console.log(data);

  // const [data, setData] = useState([]);
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   async function getData() {
  //     setLoading(true);
  //     try {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //       const data = await res.json();
  //       setData(data);
  //       setLoading(false);
  //       setError("");
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //       setData([]);
  //     }
  //   }
  //   getData();
  // }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    if (!title || !desc || !image || !content) return alert("Please input valid data!!");

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, desc, image, content, username: session?.data.user.name }),
      });
      if (res.status === 201) {
        alert("Post has been created!");
        mutate();
        e.target.reset();
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // post delete handler
  const deleteHandler = async (id) => {
    const agree = confirm("Are you sure!!");
    if (agree) {
      try {
        await fetch(`/api/posts/${id}`, {
          method: "DELETE",
        });
        mutate();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  if (session.status === "loading") return <GlobalLoading />;
  if (session.status === "unauthenticated") router?.push("/dashboard/login");

  if (session.status === "authenticated") {
    return (
      <div className="flex mb-10 mt-6">
        <div className="flex flex-1 flex-col gap-6">
          {isLoading && <GlobalLoading />}
          {error && <ErrorMessage error={error.message} />}
          {data?.map((item) => (
            <div key={item._id} className="flex gap-10 items-center">
              <div>
                <Image alt="post image" width={250} height={100} src={item.image} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <button onClick={() => deleteHandler(item._id)}>❌</button>
            </div>
          ))}
        </div>

        {/* add new post form */}
        <div className="flex-1">
          <form onSubmit={submitHandler} className="space-y-4 max-w-md ml-auto">
            <h1 className="text-2xl font-semibold text-center">Add New Post</h1>
            <div className="space-y-1">
              <label htmlFor="title">Title</label>
              <input
                className="bg-inherit border px-4 py-2 w-full rounded focus:outline-none focus:ring ring-inherit"
                type="text"
                name="title"
                id="title"
                placeholder="Enter title"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="desc">Desc</label>
              <input
                className="bg-inherit border px-4 py-2 w-full rounded focus:outline-none focus:ring ring-inherit"
                type="text"
                name="desc"
                id="desc"
                placeholder="Enter desc"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="image">Image</label>
              <input
                className="bg-inherit border px-4 py-2 w-full rounded focus:outline-none focus:ring ring-inherit"
                type="url"
                name="image"
                id="image"
                placeholder="Enter image url"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="content">Content</label>
              <textarea
                className="bg-inherit border px-4 py-2 w-full rounded focus:outline-none focus:ring ring-inherit"
                placeholder="Enter content"
                name="content"
                id="content"
                rows="3"
              ></textarea>
            </div>

            <div className="text-right">
              <button className="capitalize px-4 py-2 border bg-green-600 rounded w-full" type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Dashboard;
