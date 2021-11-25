export default function InfoJob({ job, company }) {
  return (
    <main
      className="px-8 py-4 text-gray-100 w-52 sm:w-72 
      text-left text-xs sm:text-sm md:text-md lg:text-lg
     bg-gradient-to-tr from-gray-900 to-gray-700"
    >
      <span className="text-purple-500">Job</span> {"\u007B"}
      <div className="ml-4">
        Title: <span className="text-indigo-300">{job},</span>
      </div>
      {company != "" && (
        <div className="ml-4">
          Company: <span className="text-indigo-300">{company}</span>
        </div>
      )}
      {"\u007D"}
    </main>
  );
}
