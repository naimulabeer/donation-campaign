function CategoryList({ donation }) {
  const { title, category, picture } = donation;
  return (
    <div className="">
      <div
        className="card lg:w-[312px] lg:h-[283px]"
        style={{ backgroundColor: donation.category_bg }}
      >
        <figure>
          <img className="w-full" src={donation.picture} alt="Category" />
        </figure>
        <div className="card-body">
          <h2
            style={{
              color: donation.text_button_bg,
              backgroundColor: donation.card_bg,
            }}
            className="border-0 rounded-md px-2 py-1 w-fit"
          >
            {donation.category}
          </h2>
          <h2 style={{ color: donation.text_button_bg }} className="card-title">
            {donation.title}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
