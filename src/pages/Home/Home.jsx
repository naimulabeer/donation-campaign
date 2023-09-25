import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Search from "../../components/Search/Search";
import CategoryList from "../../components/CategoryList/CategoryList";

function Home() {
  const donations = useLoaderData();
  const [filteredDonations, setFilteredDonations] = useState(donations);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = (category) => {
    const filtered = donations.filter((donation) =>
      donation.category.toLowerCase().includes(category.toLowerCase())
    );
    if (filtered.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }

    setFilteredDonations(filtered);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <div className="mt-12 mr-2">
        {noResults ? (
          <p className="text-center text-gray-500">No results found</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-12 px-4  ">
            {filteredDonations.map((donation) => (
              <CategoryList key={donation.id} donation={donation} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
