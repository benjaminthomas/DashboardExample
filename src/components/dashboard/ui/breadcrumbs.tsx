import { Link } from "react-router-dom";
interface BreadcrumbProps {
  pageName: string;
  sectionName?: string;
}
const Breadcrumb = ({ pageName, sectionName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/dashboard">Dashboard /</Link>
          </li>
          {sectionName ? (
            <>
              <li>{pageName}</li>
              <li className="text-primary dark:text-gray-50">
                / {sectionName}
              </li>
            </>
          ) : (
            <li className="text-primary dark:text-gray-50">{pageName}</li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
