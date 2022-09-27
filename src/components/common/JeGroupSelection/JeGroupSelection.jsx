import React, { useCallback, useMemo } from "react";
import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import Item from "./components/Item";
import { useEffect } from "react";

const JeGroupSelection = ({
  direction,
  children,
  multiple,
  onChange,
  value,
}) => {
  const addSelectedItem = useCallback(
    (item, selected) => {
      if (!multiple) {
        onChange([item]);
      } else {
        if (selected) {
          onChange((value) => value.filter((v) => v !== item));
        } else {
          onChange((items) => [...items, item]);
        }
      }
    },
    [onChange]
  );

  const items = useMemo(() => {
    let childs = React.Children.toArray(children);
    childs = childs.map((child) => {
      return React.cloneElement(child, {
        selected: value.filter((it) => it === child.props.value).length > 0,
        handleClick: addSelectedItem,
      });
    });
    return childs;
  }, [children, addSelectedItem, value]);

  return <Stack direction={direction}>{items}</Stack>;
};

JeGroupSelection.propTypes = {
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
};

JeGroupSelection.defaultProps = {
  direction: "row",
  multiple: false,
};

JeGroupSelection.Item = Item;

export default JeGroupSelection;
