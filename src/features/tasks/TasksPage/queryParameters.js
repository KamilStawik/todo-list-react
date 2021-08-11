import { useLocation, useHistory } from "react-router-dom";

const useQueryParameter = (searchQueryParamName) => {
    const location = useLocation();
    return (new URLSearchParams(location.search).get(searchQueryParamName));
};

const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);

    return ({ key, value }) => {
        value === undefined ? searchParams.delete(key) : searchParams.set(key, value);
        history.push(`${location.pathname}?${searchParams.toString()}`);
    }
};

export { useQueryParameter, useReplaceQueryParameter };