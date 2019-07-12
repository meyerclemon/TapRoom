import React from "react";
import ReactDataGrid from "react-data-grid";
import rows from "./Rows";
export default KegList;

function KegList() {
  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => rows[i]}
      rowsCount={30}
      minHeight={1000}
    />
  );
}

const columns = [
  {
    key: "brewery",
    name: "Brewery",
    sortable: true,
    sortDescendingFirst: true
  },
  { key: "name", name: "Name", sortable: true, sortDescendingFirst: true },
  {
    key: "pint",
    name: "$Pint (16oz)",
    width: 120,
    sortable: true,
    sortDescendingFirst: true
  },
  {
    key: "growler",
    name: "$Growler (64oz)",
    width: 120,
    sortable: true,
    sortDescendingFirst: true
  },
  {
    key: "origin",
    name: "Origin",
    width: 120,
    sortable: true,
    sortDescendingFirst: true
  },
  {
    key: "abv",
    name: "ABV",
    width: 120,
    sortable: true,
    sortDescendingFirst: true
  }
];
