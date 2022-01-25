export default function Input({ book, setBook, books, setBooks }) {
  const changeHandler = (e) => {
    setBook({ ...book, [e.target.id]: e.target.value });
  };
  const checkHandler = (e) => {
    let isChecked = e.target.checked;
    if (isChecked) {
      setBook({ ...book, read: true });
    } else {
      setBook({ ...book, read: false });
    }
  };
  const handleBlur = (e) => {};
  return (
    <div>
      <h1>Input</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col m-5 border-2 w-1/2 p-5"
      >
        <h1 className="text-2xl text-emerald-600">Add Book</h1>
        <label htmlFor="Title" className="text-lg text-emerald-500">
          Title:
        </label>
        <input
          className="p-1 rounded border-2 border-gray-400 "
          type="text"
          name="Title"
          id="title"
          value={book.title}
          onChange={changeHandler}
        />
        <label htmlFor="Author" className="text-lg text-emerald-500">
          Author:
        </label>
        <input
          className="p-1 rounded border-2 border-gray-400 "
          type="text"
          name="Author"
          id="author"
          value={book.author}
          onChange={changeHandler}
        />
        <label htmlFor="Completion" className="text-lg text-emerald-500">
          Progress:
        </label>
        <input
          className="p-1 rounded border-2 border-gray-400 "
          type="number"
          name="Completion"
          id="completion"
          value={book.completion}
          onChange={changeHandler}
        />
        <label htmlFor="Read" className="text-lg text-emerald-500">
          Read:
        </label>
        <input
          type="checkbox"
          name="Read"
          id="read"
          value={book.read}
          onChange={checkHandler}
        />

        <button
          type="submit"
          onClick={() => {
            setBooks([...books, book]);
          }}
          className="bg-emerald-500 p-2 rounded mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
