import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Fragment, ReactNode, useCallback, useMemo, useState } from "react";

type BasicTableProps<T> = {
  data: T[];
  headers: string[];
  columsArray: (row: T) => ReactNode[];
  collapsable?: Collapsable<T>;
};

type Collapsable<T> = {
  show: (row: T) => boolean;
  row: (row: T) => ReactNode;
};

function BasicTable<T>({
  data,
  headers,
  columsArray,
  collapsable,
}: BasicTableProps<T>) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = useCallback((_: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    },
    []
  );

  const visibleRows = useMemo(
    () => data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [data, page, rowsPerPage]
  );

  return (
    <TableContainer style={{ borderRadius: "0.5rem" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ backgroundColor: "var(--primary)" }}>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header} style={{ color: "white" }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((row, index) => (
            <Fragment key={index}>
              <TableRow>
                {columsArray(row).map((cell, index) => {
                  return (
                    <TableCell key={index} align="left">
                      {cell}
                    </TableCell>
                  );
                })}
              </TableRow>
              {collapsable?.show(row) && (
                <TableRow>
                  <TableCell style={{ padding: 0 }} colSpan={headers.length}>
                    {collapsable.row(row)}
                  </TableCell>
                </TableRow>
              )}
            </Fragment>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default BasicTable;
