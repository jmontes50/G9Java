import useGetAxios from "../../hooks/useGetAxios";

const CategoryBar = () => {
  const URL = ``;
  const { data, loading, error } = useGetAxios(URL);
  return (
    <div className="navbar bg-base-100 shadow-sm  max-w-[1200px] mx-auto">
      <div className="flex-1">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Electronicos</a>
          </li>
           <li>
            <a>Acceesorios</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2 z-40" >
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="flex-none">

      </div>
    </div>
  );
};

export default CategoryBar;
