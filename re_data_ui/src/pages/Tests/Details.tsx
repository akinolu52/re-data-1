import EChartsReactCore from 'echarts-for-react/lib/core';
import { ToolboxComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import React, {
  FC, ReactElement, useContext, useEffect, useMemo, useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Select, Table } from '../../components';
import { ColumnsProps } from '../../components/Table';
import { OverviewData, RedataOverviewContext, SelectOptionProps } from '../../contexts/redataOverviewContext';

echarts.use([ToolboxComponent]);
const values = () => {
  const data = [];
  const runAt = [];
  // const data = [];
  for (let i = 0; i < 100; i += 1) {
    data.push(parseInt((Math.random() * 100).toFixed(0), 10));
    runAt.push(new Date(Date.now() - i * 1000).toISOString());
    // data.push({
    //   runAt: new Date(Date.now() - i * 1000).toISOString(),
    //   value: parseInt((Math.random() * 100).toFixed(0), 10),
    // });
  }
  // return data;
  return {
    title: {
      left: 'center',
      text: 'Timeline',
    },
    grid: {
      top: '20%', right: '5%', bottom: '12%', left: '15%',
    },
    xAxis: {
      type: 'category',
      data: runAt,
    },
    yAxis: {
      type: 'value',
      // axisLabel: {
      //   formatter: getFormatter(metricName),
      // },
    },
    series: [
      {
        name: 'timeline',
        data,
        type: 'line',
        color: '#8884d8',
        smooth: true,
        // markArea: {
        //   itemStyle: {
        //     color: 'rgba(255, 173, 177, 0.4)',
        //   },
        //   data: generateMarkAreas(anomaliesMap, columnName, metricName),
        // },
      },
    ],
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     type: 'line',
    //   },
    // },
    // visualMap: {
    //   show: false,
    //   dimension: 0,
    //   pieces,
    //   inRange: {
    //     color: pieces.length ? '#ee2828' : '#8884d8',
    //   },
    //   outOfRange: {
    //     color: '#8884d8',
    //   },
    // },
  };

  // let base = +new Date(1968, 9, 3);
  // const oneDay = 24 * 3600 * 1000;
  // const date = [];

  // const data = [Math.random() * 300];

  // for (let i = 1; i < 10000; i++) {
  //   const now = new Date(base += oneDay);
  //   date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
  //   data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  //   // date.push(parseInt((Math.random() * 100).toFixed(0), 10));
  // }

  // return {
  //   tooltip: {
  //     trigger: 'axis',
  //     position(pt: any) {
  //       return [pt[0], '10%'];
  //     },
  //   },
  //   title: {
  //     left: 'center',
  //     text: 'timeline',
  //   },
  //   toolbox: {
  //     feature: {
  //       // dataZoom: {
  //       //   yAxisIndex: 'none',
  //       // },
  //       restore: {},
  //       saveAsImage: {},
  //     },
  //   },
  //   xAxis: {
  //     type: 'category',
  //     // boundaryGap: false,
  //     data: date,
  //   },
  //   yAxis: {
  //     type: 'value',
  //     boundaryGap: [0, '100%'],
  //   },
  //   dataZoom: [{
  //     type: 'inside',
  //     start: 0,
  //     end: 10,
  //   }, {
  //     start: 0,
  //     end: 10,
  //     handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,
  // 4.4 - 8.8, 9.4c0, 5, 3.9, 9.1, 8.8, 9.4v1.3h1.3v - 1.3c4.9 - 0.3,
  // 8.8 - 4.4, 8.8 - 9.4C19.5, 16.3, 15.6, 12.2, 10.7, 11.9z M13.3,
  // 24.4H6.7V23h6.6V24.4z M13.3, 19.6H6.7v - 1.4h6.6V19.6z',
  //     handleSize: '80%',
  //     handleStyle: {
  //       color: '#fff',
  //       shadowBlur: 3,
  //       shadowColor: 'rgba(0, 0, 0, 0.6)',
  //       shadowOffsetX: 2,
  //       shadowOffsetY: 2,
  //     },
  //   }],
  //   series: [
  //     {
  //       name: '模拟数据',
  //       type: 'line',
  //       smooth: true,
  //       symbol: 'none',
  //       sampling: 'average',
  //       itemStyle: {
  //         normal: {
  //           color: 'rgb(255, 70, 131)',
  //         },
  //       },
  //       areaStyle: {
  //         normal: {
  //           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  //             offset: 0,
  //             color: 'rgb(255, 158, 68)',
  //           }, {
  //             offset: 1,
  //             color: 'rgb(255, 70, 131)',
  //           }]),
  //         },
  //       },
  //       data,
  //     },
  //   ],
  // };
};

const TestDetails: FC = (): ReactElement => {
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  // const values: any = values();
  console.log('values ', values());

  const { name } = useParams();
  const columns: ColumnsProps[] = useMemo(() => [
    {
      Header: 'Test Name',
      accessor: 'test_name',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Column',
      accessor: 'column_name',
    },
    {
      Header: 'Run At',
      accessor: 'run_at',
    },
  ], []);

  const [optionValue, setOptionValue] = useState<SelectOptionProps | null>({
    label: name || '',
    value: name || '',
  });

  const overview: OverviewData = useContext(RedataOverviewContext);
  const { testObj, loading } = overview;

  const options = useMemo(() => Object.keys(testObj || {})?.map((x) => ({
    label: x,
    value: x,
  })), [testObj]);

  useEffect(() => {
    if (!!name && !loading) {
      setResult(testObj[name]);
    }
  }, [loading]);

  const handleChange = (option: SelectOptionProps | null) => {
    if (option) {
      console.log('option ', option);
      console.log('result => ', testObj[option.value]);
      setOptionValue(option);
      setResult(testObj[option.value]);
      navigate(`/tests/${option.value}`);
    }
  };

  return (
    <>
      <section className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">
          {`Test for: ${name}`}
        </h1>
        <div className="md:w-1/3 w-full ml-1">
          <Select
            value={optionValue}
            options={options}
            handleChange={handleChange}
            placeholder="Please enter a test name to check details"
          />
        </div>
      </section>

      <section className="mb-6">
        <h4 className="font-bold">Timeline</h4>

        <div className="mt-2 rounded-md h-96 w-full border border-red-400">
          <EChartsReactCore echarts={echarts} option={values()} />

        </div>

      </section>

      <section className="mb-6">
        <h4 className="font-bold">By Run</h4>

        <div className="flex flex-col mt-2">
          <Table columns={columns} data={result} />
        </div>
      </section>
    </>
  );
};

export default TestDetails;
