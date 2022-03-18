import React, {
  FC, ReactElement, useContext, useState, useEffect, useMemo,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Select, Table } from '../../components';
import { ColumnsProps } from '../../components/Table';
import { SelectOptionProps, OverviewData, RedataOverviewContext } from '../../contexts/redataOverviewContext';

const TestDetails: FC = (): ReactElement => {
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

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

        <div className="mt-2 rounded-md h-96 w-full border border-red-400" />

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
