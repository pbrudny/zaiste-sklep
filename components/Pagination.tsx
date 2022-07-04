import Link from "next/link";

interface PaginationProps {
  totalPages: number,
  current: number,
};

const Pagination = ({totalPages, current}: PaginationProps) => {
  const indicator = current > 5 ? current - 5 : 1;
  const pages = [...Array(10).keys()].map(p => p + indicator);

  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="hidden md:-mt-px md:flex">
        {pages.map((page) => {
            if (page == current) {
              return (
                <Link
                  key={page}
                  href={`/products/page/${page}`}
                >
                  <a
                    className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                    aria-current="page"
                  >
                    {page}
                  </a>
                </Link>
              )
            }

            return (
              <Link
                key={page}
                href={`/products/page/${page}`}
              >
                <a
                   className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  {page}
                </a>
              </Link>
            )
          }
        )
        }

      </div>
    </nav>
  )
}

export default Pagination;
