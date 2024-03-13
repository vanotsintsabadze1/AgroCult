function BlogCard({ blogData }) {
  return (
    <div className="shadow-blog-card lg:row-gap xs:w-[32rem] relative flex h-[45rem] w-[40rem] flex-col gap-[1rem] rounded-[1rem] bg-white md:w-[40rem] lg:w-[40rem]">
      <div className="h-[20rem] w-full rounded-tl-[1rem] rounded-tr-[1rem] bg-black">
        <img
          src={blogData.imageUrl}
          alt={`blog-${blogData.id}`}
          className="h-full w-full rounded-tl-[1rem] rounded-tr-[1rem] object-cover"
        />
      </div>
      <div className="mt-[1rem] flex min-h-[10rem] w-full flex-col items-center gap-[1.5rem] text-center">
        <h1 className="w-[30rem] text-[2rem] font-bold">{blogData.name}</h1>
        <p className="xs:w-[30rem] line-clamp-3 w-[35rem] text-center text-[1.2rem] font-medium">
          {blogData.description}...
        </p>
      </div>
      <div className="absolute bottom-0 flex h-[5rem] w-full items-center justify-center p-[4rem_0_5rem_0] ">
        <button className="h-[4rem] w-[14rem] rounded-[.5rem] bg-footer text-[1.1rem] font-bold uppercase text-white">
          See More
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
