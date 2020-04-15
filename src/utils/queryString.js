// import { setQueryStringWithoutPageReload } from "query-string";
import qs from "qs";

const setQueryStringWithoutPageReload = qsValue => {
  const newurl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    qsValue;

  window.history.pushState({ path: newurl }, "", newurl);
};

export const setQueryStringValue = (
  key,
  value,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString);
  console.log("values", values);

  const newQsValue = qs.stringify({ ...values, [key]: value });
  console.log("new", newQsValue);
  setQueryStringWithoutPageReload(`?${newQsValue}`);
};

export const getQueryStringValue = (
  key,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString);

  return values[key];
};
