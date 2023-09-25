function Search() {
  const styles = {
    backgroundImage: {
      backgroundImage: "url('/Rectangle 4281.png')",
      opacity: 0.1,
    },
  };
  return (
    <div className="bg-[#FFFFFFF2]">
      <div
        className="relative bg-cover bg-center h-96 px-5"
        style={styles.backgroundImage}
      ></div>
      <div className="absolute inset-20 flex items-center justify-center">
        <div className="text-center gap-2">
          <h1 className="md:text-4xl font-semibold text-gray-800 mb-4">
            I Grow By Helping People In Need
          </h1>
          <div className=" input-group justify-center rounded-lg focus:outline-none">
            <input type="text" className="px-4 py-2" placeholder="Search..." />
            <button className="bg-[#FF444A] px-4 py-2 text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
