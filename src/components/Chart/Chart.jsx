import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';

import { BarChart } from '@mui/x-charts/BarChart';

// import { HighlightedCode } from '@mui/docs/HighlightedCode';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const barChartsParams = {
  series: [
    {
      id: 'series-1',
      data: [10, 25, 30, 50, 50, 50, 50],
      label: 'Tasks',
      stack: 'total',
      highlightScope: {
        highlight: 'item',
      },
      color: '#99CFB5',
    },
    {
      id: 'series-2',
      data: [5, 5, 10, 10, 10, 10, 10],
      label: 'Overdue Tasks',
      stack: 'total',
      highlightScope: {
        highlight: 'item',
      },
      color: '#FFDD9D',
    }
  ],
  xAxis: [{ data: ['1', '2', '3', '4', '5', '6', '7',], id: 'axis1' }],
  yAxis: [
    {
      min: 0,
      max: 100,
      tickInterval: 20, // Forces ticks at 0, 20, 40, ..., 100
    },
  ],
  height: 400,
  margin: { left: 0 },
};

export default function BarClick() {
  const [itemData, setItemData] = React.useState();
  const [axisData, setAxisData] = React.useState();

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: '100%' }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <BarChart
          {...barChartsParams}
          onItemClick={(event, d) => setItemData(d)}
          onAxisClick={(event, d) => setAxisData(d)}
        />
      </Box>

      
    </Stack>
  );
}
