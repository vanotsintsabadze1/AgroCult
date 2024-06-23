export default function BlogsIntro() {
  return (
    <section className="flex w-full flex-col items-center gap-[2rem] px-[1rem]">
      <h4 className="font-montserrat text-[2.2rem] font-medium uppercase tracking-widest text-gray-700">Blogs</h4>
      <canvas className="h-[.1rem] bg-gray-400 sm:w-[80%] md:w-[60%] xs:w-[90%] " />
      <p className="max-w-[45rem] text-center text-[1.3rem] font-medium text-gray-600">
        Here you can see blogs from our community members. You can also submit your own blog post and let others know
        about your thoughts or let them learn something new.
      </p>
    </section>
  );
}
