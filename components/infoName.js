export default function InfoName({ name, lastname }) {
  return (
    <main
      className="px-8 py-4 text-gray-100 w-52 sm:w-72 
      text-left text-xs sm:text-sm md:text-md lg:text-lg
     bg-gradient-to-tr from-gray-900 to-gray-700"
    >
      <span className="block text-gray-400 mb-2">//Presentation</span>
      <span className="text-purple-500">Infos</span> {"\u007B"}
      <div className="ml-4">
        Name: <span className="text-indigo-300">{name},</span>
      </div>
      <div className="ml-4">
        Lastname: <span className="text-indigo-300">{lastname}</span>
      </div>
      {"\u007D"}
    </main>
  );
}
