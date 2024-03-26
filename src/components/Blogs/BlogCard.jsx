function BlogCard({ title, description, imageUrl, publishdate }) {
  return (
    <div className="flex h-full w-full snap-center items-center justify-center lg:h-auto lg:w-auto">
      <div className="lg:row-gap relative flex h-[50rem] w-[38rem] flex-col gap-[1rem] rounded-[1rem] bg-white shadow-soft xs:w-[32rem] md:w-[35rem] lg:w-[35rem]">
        <div className="mt-[1rem] flex h-[20rem] w-full items-center justify-center rounded-tl-[1rem] rounded-tr-[1rem] p-[1rem]">
          <img src={imageUrl} alt={`blog-${title}`} className="h-full max-w-full rounded-[1rem] object-fill" />
        </div>
        <div className="flex min-h-[10rem] w-full flex-col items-center gap-[1.5rem] text-center">
          <h1 className="w-[30rem] text-[2rem] font-bold">{title}</h1>
          <p className="line-clamp-3 w-[35rem] text-center text-[1.2rem] font-medium xs:w-[25rem] sm:w-[30rem] md:w-[30rem] lg:w-[30rem] lg:text-[1.1rem]">
            {description}...
          </p>
        </div>
        <div className="flex items-center justify-center p-[.5rem]">
          <p className="text-[1.2rem] font-bold">Publish Date: {publishdate}</p>
        </div>
        <div className="flex h-[5rem] w-full items-center justify-center p-[1rem]">
          <button className="h-[4rem] w-[14rem] rounded-[.5rem] bg-footer text-[1.1rem] font-bold uppercase text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
