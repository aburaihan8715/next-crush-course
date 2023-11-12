"use client";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
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

  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);
  // console.log(data);

  return (
    <div>
      <div>Dashboard page</div>
    </div>
  );
};

export default Dashboard;
