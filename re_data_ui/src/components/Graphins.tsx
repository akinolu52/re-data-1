/* eslint-disable @typescript-eslint/no-explicit-any */
import G6 from '@antv/g6';
import {
  Circle, createNodeFromReact,
  Group, Rect, Text,
} from '@antv/g6-react-node';
import Graphin, { Behaviors } from '@antv/graphin';
import React from 'react';
import ReactDOM from 'react-dom';
import { formatData } from '../utils';

const { ZoomCanvas } = Behaviors;

const CustomNode = ({ cfg = {} }: any) => {
  const {
    materializedType, id, subTitle,
    label, backgroundColor,
  } = cfg;
  // console.log("cfg -> ", cfg);
  return (
    <Group>
      <Rect style={{}}>
        <Rect
          draggable
          style={{
            width: 'auto',
            height: 'auto',
            stroke: backgroundColor,
            cursor: 'move',
            fill: '#fff',
            radius: [6],
            lineWidth: '2',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: [0, 15, 0, 4],
          }}
        >
          <Rect style={{ stroke: 'red' }}>
            <Text
              style={{
                marginTop: 5,
                fill: '#000',
                margin: [8, 4],
                fontWeight: 'bold',
              }}
            >
              {`${label} - ${materializedType}`}
            </Text>

            <Text
              style={{
                marginTop: 10,
                fill: '#000',
                margin: [6, 4],
                fontSize: 9,
              }}
            >
              {subTitle}
            </Text>

          </Rect>

          <Circle
            style={{
              r: 4,
              stroke: 'red',
              lineWidth: '2',
              fill: 'white',
              cursor: 'move',
            }}
          />

        </Rect>
      </Rect>
    </Group>
  );
};

Graphin.registerNode('custom-node', createNodeFromReact(CustomNode));

const container = document.getElementById('container');

const d = {
  // The array of nodes
  nodes: [
    {
      id: 'node1',
      x: 100,
      y: 200,
    },
    {
      id: 'node2',
      x: 300,
      y: 200,
    },
  ],
  // The array of edges
  edges: [
    // An edge links from node1 to node2
    {
      source: 'node1',
      target: 'node2',
    },
  ],
};

const Graphins = ({ data, showModelDetails }: any) => {
  const ref = React.useRef(null);
  let graph : any = null;
  // React.useEffect(() => {
  //   if (!graph) {
  //     graph = new G6.TreeGraph({
  //       // eslint-disable-next-line react/no-find-dom-node
  //       container: ref.current as unknown as 'string | HTMLElement',
  //       // width: 300,
  //       // height: 300,
  //       modes: {
  //         default: ['drag-canvas'],
  //       },
  //       defaultNode: {
  //         // type: 'card-node',
  //         type: 'custom-node',
  //         size: [100, 40],
  //       },
  //       defaultEdge: {
  //         type: 'polyline',
  //         style: {
  //           endArrow: true,
  //         },
  //       },
  //       layout: {
  //         type: 'indented',
  //         direction: 'LR',
  //         dropCap: false,
  //         indent: 200,
  //         getHeight: () => 20,
  //         getHGap: () => 0,
  //       },
  //     });
  //   }
  //   graph.data(d);
  //   graph.render();
  // }, []);
  const args = formatData(data);
  return (
    <>
      <div className={showModelDetails ? 'col-span-8' : 'col-span-12'}>
        <Graphin
        // width={300}
        // height={300}
          defaultNode={{ type: 'custom-node' }}
        // nodeSize={30}
        // layout={{ type: 'dendrogram', direction: 'H' }}
          data={args}
        >
          <ZoomCanvas disabled />
          {/* <ShowPaths paths={paths} /> */}
        </Graphin>
      </div>
      {/* <div id="container" ref={ref} className="col-span-8" /> */}
    </>
  );
};

export default Graphins;
