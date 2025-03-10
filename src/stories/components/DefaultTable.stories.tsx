import type { Meta, StoryObj } from "@storybook/react";
import { createColumnHelper } from "@tanstack/react-table";
import { CustomColumnMeta, Table } from "../../";

const columnHelper = createColumnHelper<any>();

const getColumns = () => [
  columnHelper.accessor("symbol", {
    id: "symbol",
    header: () => <div>Symbol</div>,
    cell: (info) => <div>{info.getValue()}</div>,
    meta: { align: "left" } as CustomColumnMeta,
  }),
  columnHelper.accessor("date", {
    id: "date",
    header: () => <div>Date</div>,
    cell: (info) => <div>{info.getValue()}</div>,
    meta: { align: "left" } as CustomColumnMeta,
  }),
  columnHelper.accessor("open", {
    id: "open",
    header: () => <div>Open</div>,
    cell: (info) => <div>{info.getValue()}</div>,
    meta: { align: "right" } as CustomColumnMeta,
  }),
  columnHelper.accessor("close", {
    id: "close",
    header: () => <div>Close</div>,
    cell: (info) => <div>{info.getValue()}</div>,
    meta: { align: "right" } as CustomColumnMeta,
  }),
  columnHelper.accessor("high", {
    id: "high",
    header: () => <div>High</div>,
    cell: (info) => <div>{info.getValue()}</div>,
    meta: { align: "right" } as CustomColumnMeta,
  }),
  columnHelper.accessor("low", {
    id: "low",
    header: () => <div>Low</div>,
    cell: (info) => <div>{info.getValue()}</div>,
    meta: { align: "right" } as CustomColumnMeta,
  }),
  columnHelper.accessor("volume", {
    id: "volume",
    header: () => <div>Volume</div>,
    cell: (info) => <div>{info.getValue()}</div>,
    meta: { align: "right" } as CustomColumnMeta,
  }),
];

interface DefaultTableProps {
  data: any[];
  onSelect?: (row: any) => boolean;
  onDoubleClick?: (row: any) => void;
  sortable?: boolean;
}

const DefaultTable = ({
  data,
  onSelect,
  onDoubleClick,
  sortable,
}: DefaultTableProps) => {
  return (
    <Table<any>
      data={data}
      columns={getColumns()}
      onSelect={onSelect}
      onDoubleClick={onDoubleClick}
      sortable={sortable}
    />
  );
};

const meta: Meta<typeof DefaultTable> = {
  title: "Components/Table",
  component: DefaultTable,
  argTypes: {
    sortable: { control: "boolean" },
    onSelect: { action: "row selected" },
    onDoubleClick: { action: "row double-clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof DefaultTable>;

const sampleData: any[] = [
  {
    symbol: "AAPL",
    date: "2024-03-10",
    open: 175.5,
    close: 178.2,
    high: 180.1,
    low: 174.8,
    volume: 2500000,
  },
  {
    symbol: "GOOGL",
    date: "2024-03-10",
    open: 2800.5,
    close: 2822.3,
    high: 2850.0,
    low: 2795.2,
    volume: 1800000,
  },
  {
    symbol: "TSLA",
    date: "2024-03-10",
    open: 850.2,
    close: 870.4,
    high: 880.1,
    low: 845.3,
    volume: 3200000,
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
  },
};

export const Empty: Story = {
  args: {
    data: [],
  },
};

export const LargeDataset: Story = {
  args: {
    data: Array.from({ length: 100 }, (_, i) => ({
      symbol: `SYM${i}`,
      date: "2024-03-10",
      open: Math.random() * 1000,
      close: Math.random() * 1000,
      high: Math.random() * 1000,
      low: Math.random() * 1000,
      volume: Math.floor(Math.random() * 5000000),
    })),
  },
};
