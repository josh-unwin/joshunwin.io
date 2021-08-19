export default function BookCard({ title, description, href }) {
  return (
    <a
      className="mb-4 hover:shadow"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
        <div className="h-6 w-6 ml-2 mr-4">
          <span className="sr-only">Book</span>
          <svg
            viewBox="0 0 361 507"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M348.891 494.5H60.8905C2.89063 500.5 -11.1095 374.5 60.8905 374.5C69.149 374.5 78.4336 374.5 88.5 374.5M12.8905 412.5C12.8905 319.667 12.8905 122 12.8905 74C12.8905 26 44.8905 12.6667 60.8905 12H88.5M348.891 436.5H72.8906M88.5 12H329.891C340.384 12 348.891 20.5066 348.891 31V355.5C348.891 365.993 340.403 374.5 329.909 374.5C266.539 374.5 158.577 374.5 88.5 374.5M88.5 12V374.5"
              stroke="black"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
