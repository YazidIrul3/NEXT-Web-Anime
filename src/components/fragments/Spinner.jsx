const Spinner = () => {
  return (
    <div
      className="animate-spin inline-block size-10 border-[5px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
