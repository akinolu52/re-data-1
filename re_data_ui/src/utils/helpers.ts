import dayjs from 'dayjs';
import {
  Anomaly, DbtNode, DbtSource, Metric, SchemaChange,
} from '../contexts/redataOverviewContext';

export const RE_DATA_OVERVIEW_FILE = 'overview.json';
export const DBT_MANIFEST_FILE = 'dbt_manifest.json';
export const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss';
export const DATE_FORMAT = 'YYYY-MM-DD';

export const stripQuotes = (str: string): string => str.replaceAll('"', '').replaceAll('`', '');

export const extractComponentFromIdentifier = (
  identifier: string | null, component: string,
): string => {
  if (!identifier) return '';
  const arr = identifier.split('.');
  const mapping: { [key: string]: number } = {
    database: 0,
    schema: 1,
    tableName: 2,
    columnName: 3,
    metricName: 4,
  };
  const idx = mapping[component];
  if (!idx || idx >= arr.length) {
    return '';
  }
  return arr[idx];
};

export const metricValue = (metric: Metric): number => {
  let value = Number(metric.value);
  if (metric.metric === 'freshness') {
    value = value / 60 / 60;
  }
  return Math.round(value * 100) / 100;
};

export const getFormatter = (metricName: string): string => {
  if (metricName === 'freshness') {
    return '{value}hrs';
  }
  if (metricName.indexOf('percent') > -1) {
    return '{value}%';
  }
  return '{value}';
};

export const generateSchemaChangeMessage = (change: SchemaChange): string => {
  let message = '';
  const detectedTime = dayjs(change.detected_time).format(DATE_TIME_FORMAT);
  switch (change.operation) {
    case 'column_added':
      message = `column ${change.column_name} of type ${change.data_type} was added at ${detectedTime}`;
      break;
    case 'column_removed':
      message = `column ${change.prev_column_name} of type ${change.prev_data_type} was removed at ${detectedTime}`;
      break;
    case 'type_change':
      message = `${change.column_name} column data type was changed from ${change.prev_data_type} to 
            ${change.data_type} at ${detectedTime}`;
      break;
    default:
      message = '';
  }
  return message;
};

export const generateAnomalyIdentifier = (model: string, anomaly: Anomaly): string => {
  const { column_name: columnName } = anomaly;
  const metricName = anomaly.metric;
  return columnName
    ? `${model}.${columnName}.${metricName}`
    : `${model}..${metricName}`;
};

export const generateMetricIdentifier = (
  model: string, columnName: string, metric: Metric,
): string => {
  const metricName = stripQuotes(metric.metric);
  // use $ as placeholder for column name that doesn't exist in table metrics,
  // so we can have a uniform key structure
  return columnName
    ? `${model}.${columnName}.${metricName}`
    : `${model}..${metricName}`;
};

export const appendToMapKey = (
  map: Map<string, Array<unknown>>,
  key: string,
  item: unknown,
): Map<string, unknown> => {
  if (map.has(key)) {
    const arr = map.get(key) as Array<unknown>;
    arr.push(item);
    map.set(key, arr);
  } else {
    map.set(key, [item]);
  }
  return map;
};

export const supportedResTypes = new Set(['source', 'model', 'seed']);

export const generateModelId = (details: DbtNode | DbtSource): string => {
  const { database, schema, name } = details;
  return `${database}.${schema}.${name}`.toLowerCase();
};

export const formatData = (data: any) => {
  console.log('data -> ', data);
  const { edges, nodes } = data;
  const result = {
    edges: [],
    nodes: [],
  };
  for (let index = 0; index < edges.length; index++) {
    const { from, to } = edges[index];
    edges[index] = {
      // id, arrows,
      source: from,
      target: to,
    };
  }

  for (let index = 0; index < nodes.length; index++) {
    // console.log('node -> ', nodes[index]);
    const {
      id, color: { background },
      materializedType, dbName: subTitle,
    } = nodes[index];
    const label = id.split('.').at(-1);

    nodes[index] = {
      id,
      label,
      materializedType,
      backgroundColor: background,
      subTitle,
      // type: 'custom-node',
      // type: 'graphin-circle',
      style: {
        label: {
          value: id, // add label
        },
        halo: {
          visible: true,
          stroke: 'red',
        },
        keyshape: {
          size: 40,
          // stroke: "red",
          // fill: "red",
          // fillOpacity: 0.2
        },
        badges: [
          {
            position: 'RT',
            type: 'text',
            value: index,
            size: [15, 15],
            fill: 'red',
            color: '#fff',
          },
        ],
      },

      // arrows,
      // source: from,
      // target: to
    };
  }

  result.nodes = nodes;
  result.edges = edges;

  return result;
};
