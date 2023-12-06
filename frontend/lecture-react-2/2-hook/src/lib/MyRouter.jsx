import React from "react";

export const routerContext = React.createContext({});
routerContext.displayName = "RouterContext";

export const Router = ({ children }) => {
  const [path, setPath] = React.useState(window.location.pathname);

  const changePath = (path) => {
    setPath(path);
    window.history.pushState({ path }, "", path);
  };

  const handlePopstate = (event) => {
    const nextPath = event.state && event.state.path;
    if (!nextPath) return;
    setPath(nextPath);
  };

  React.useEffect(() => {
    window.addEventListener("popstate", handlePopstate);
    window.history.replaceState({ path }, "");

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return (
    <routerContext.Provider value={{ path, changePath }}>
      {children};
    </routerContext.Provider>
  );
};

export const Routes = ({ children }) => {
  const { path } = React.useContext(routerContext);

  let selectedRoute = null;

  React.Children.forEach(children, (child) => {
    // 리액트 엘리먼트인지 검사한다.
    if (!React.isValidElement(child)) return;

    // 프레그먼트 검사
    if (child.type === React.Fragment) return;

    // Route 컴포넌트인지 검사
    if (!child.props.path || !child.props.element) return;

    // 요청 경로를 검사
    // 요청 경로에서 쿼리 문자열을 제거하고 비교
    if (child.props.path !== path.replace(/\?.*$/, "")) return;

    // 엘리먼트를 찾았다.
    selectedRoute = child.props.element;
  });

  return selectedRoute;
};

/**
 * 사용 예
 * <MyRouter.Route path={'경로'} element={<리액트_앨리먼트 />} />
 */
export const Route = () => null;

export const Link = ({ to, ...rest }) => {
  const { path, changePath } = React.useContext(routerContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (to !== path) changePath(to);
  };
  return <a {...rest} href={to} onClick={handleClick} />;
};

export const useNavigate = () => {
  const { path, changePath } = React.useContext(routerContext);
  const navigate = (nextPath) => {
    if (path !== nextPath) changePath(nextPath);
  };
  return navigate;
};

export const useMatch = () => {
  const { path } = React.useContext(routerContext);
  const match = (comparedPath) => path === comparedPath;
  return match;
};

export const useParams = () => {
  // Todo: useMemo 사용해야
  const params = new URLSearchParams(window.location.search);
  const paramsObject = {};
  for (const [key, value] of params) {
    paramsObject[key] = value;
  }
  return paramsObject;
};
