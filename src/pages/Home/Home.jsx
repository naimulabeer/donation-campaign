import { useLoaderData } from "react-router-dom";
import Search from "../../components/Search/Search";
import CategoryList from "../../components/CategoryList/CategoryList";

function Home() {
  const donations = useLoaderData();

  return (
    <>
      <Search />
      <div className="mt-12 mr-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 px-4  ">
          {donations.map((donation) => (
            <CategoryList key={donation.id} donation={donation} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
