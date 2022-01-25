export default function Card({ book }) {
  return (
    <div className="px-4 py-4 bg-white border-2 border-gray-400 rounded">
      <h1 className="text-emerald-500 text-2xl">{book.title}</h1>
      <p className="text-gray-500 text-sm">{book.author}</p>
      <p className={`${book.read ? "text-blue-500" : "text-red-500"}`}>
        {book.read ? "Read" : "Not Read"}
      </p>
      <div className="progress">
        <p>Progress</p>
        <div class="w-full bg-gray-200 h-1">
          <div
            class="bg-blue-600 h-1"
            style={{ width: `${book.completion}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
