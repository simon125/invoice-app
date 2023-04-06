import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";

type AlignX = CSSProperties["textAlign"];
type AlignY = CSSProperties["verticalAlign"];

interface StyledCellProps {
  cellAlignX?: AlignX;
  cellAlignY?: AlignY;
}

const StyledTable = styled("table")`
  width: 100%;
`;

const StyledTH = styled("th")<StyledCellProps>`
  vertical-align: ${({ cellAlignY }) => cellAlignY || "middle"};
  text-align: ${({ cellAlignX }) => cellAlignX || "start"};
`;

const StyledTD = styled("td")<StyledCellProps>`
  vertical-align: ${({ cellAlignY }) => cellAlignY || "middle"};
  text-align: ${({ cellAlignX }) => cellAlignX || "start"};
`;

type Only<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type Column<T> =
  | {
      field: keyof T;
      header: ReactNode;
      cellAlignX?: AlignX;
      cellAlignY?: AlignY;
      cellStyles?: CSSProperties;
      headerStyles?: CSSProperties;
      style?: CSSProperties;
    }
  | {
      customCell: (data: T, rowIndex: number, cellIndex: number) => ReactNode;
      header: ReactNode;
      cellAlignX?: AlignX;
      cellAlignY?: AlignY;
      cellStyles?: CSSProperties;
      headerStyles?: CSSProperties;
      style?: CSSProperties;
    };

type TableProps<T> = T extends { id: string }
  ? {
      rows: T[];
      columns: Column<T>[];
      className?: string;
    }
  : {
      rows: T[];
      columns: Column<T>[];
      propertyAsAKey: Only<T, string>;
      className?: string;
    };

export function Table<T extends {}>(props: TableProps<T>) {
  const { rows, propertyAsAKey, columns, className } = props;

  return (
    <StyledTable className={className}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <StyledTH
              cellAlignX={column.cellAlignX}
              cellAlignY={column.cellAlignY}
              key={`${column.header} ${index}`}
              style={column.style ? column.style : column.headerStyles}
            >
              {column.header}
            </StyledTH>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => {
          const key = ("id" in row ? row.id : row[propertyAsAKey]) as string;
          return (
            <tr key={key}>
              {columns.map((column, index) => (
                <StyledTD
                  key={`${key} ${index}`}
                  cellAlignX={column.cellAlignX}
                  cellAlignY={column.cellAlignY}
                  style={column.style ? column.style : column.cellStyles}
                >
                  {"customCell" in column
                    ? column.customCell(row, rowIndex, index)
                    : row[column.field]}
                </StyledTD>
              ))}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
}
