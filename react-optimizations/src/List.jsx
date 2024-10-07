import PropTypes from "prop-types";
import { Profiler, useCallback, useMemo } from "react";
import { Button } from "./Button";

export const List = ({ data }) => {
  const mappedData = useMemo(() => {
    return data.map((item) => {
      return {
        ...item,
        title: item.title.toUpperCase(),
      };
    });
  }, [data]);

  const show = useCallback(() => {
    const joined = mappedData
      .map(({ title }) => {
        console.log("map called");

        return title;
      })
      .join("")
      .slice(0, 10);
    console.log(joined);
  }, [mappedData]);

  const size = !!data.length;

  return (
    <>
      <Profiler id="List" onRender={console.log} />
      <Button onClick={show}>Show All title</Button>
      <h2>List size: {size}</h2>
      <ul>
        {mappedData.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
};

List.displayName = "List";

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
