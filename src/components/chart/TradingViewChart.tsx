import { RefObject, useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import stockData from '../../utils/mock/btcHistory.json';

function TradingViewChart() {
  const ref = useRef<HTMLElement | string>('');

  useEffect(() => {
    const chart = createChart(ref.current, {
      height: 500,
      localization: { locale: 'fa-IR' },

      watermark: {
        color: 'rgba(255,255,255, 0.4)',
        visible: true,
        text: '@Coinito',
        fontSize: 16,
        horzAlign: 'left',
        vertAlign: 'bottom',
      },
      layout: {
        backgroundColor: '#303030',
        textColor: '#DEDEDE',
        fontSize: 12,
      },
      grid: {
        vertLines: {
          color: 'rgba(70, 130, 180, 0.5)',
          style: 1,
          visible: true,
        },
        horzLines: {
          color: 'rgba(70, 130, 180, 0.5)',
          style: 1,
          visible: true,
        },
      },
    });

    const candlestickSeries = chart.addCandlestickSeries();

    const stockData2 = [
      { time: '2018-12-19', open: 141.77, high: 170.39, low: 120.25, close: 145.72 },
      { time: '2018-12-20', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },
      { time: '2018-12-21', open: 108.19, high: 118.43, low: 74.22, close: 75.16 },
      { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
      { time: '2018-12-23', open: 45.12, high: 53.9, low: 45.12, close: 48.09 },
      { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
      { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.5 },
      { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
      { time: '2018-12-27', open: 91.04, high: 121.4, low: 82.7, close: 111.4 },
      { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
      { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
      { time: '2018-12-30', open: 106.33, high: 110.2, low: 90.39, close: 98.1 },
      { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
    ];
    console.log(stockData);
    console.log(stockData2);
    // set data
    candlestickSeries.setData(stockData);
  }, []);

  return (
    <>
      <div ref={ref as RefObject<HTMLDivElement>} />
    </>
  );
}

export default TradingViewChart;
