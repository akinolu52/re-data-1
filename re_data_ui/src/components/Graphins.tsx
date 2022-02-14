/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Circle, createNodeFromReact, Group,
  Rect, Text,
} from '@antv/g6-react-node';
import Graphin, { Behaviors } from '@antv/graphin';
import React from 'react';

const { ZoomCanvas } = Behaviors;

const CustomNode = ({ cfg = {} }: any) => {
  const {
    materializedType, id, subTitle,
    label, backgroundColor,
  } = cfg;
  // console.log("cfg -> ", cfg);
  return (
    <Group>

      <Circle
        style={{
        //   width: 10,
        //   height: 10,
          r: 7,
          //   position: 'absolute',
          // top: 10,
          // margin: [-100, 0, 0 ,0],
          fill: 'hsl(0deg 88% 67%)',
          cursor: 'move',
        //   radius: 5,
        }}
      >
        {/* <Text style={{ fill: '#fff' }}>ok</Text> */}
      </Circle>

      <Rect
        style={
            {
              // width: 200,
              // height: 75
            }
          }
      >
        <Rect
          draggable
          style={{
            width: 150,
            height: 55,
            // stroke: color,
            fill: backgroundColor,
            cursor: 'move',
            // fill: "#ffffff",
            radius: 6,
          }}
        >
          <Group>
            <Text
              style={{
                marginTop: 5,
                fill: '#fff',
                margin: [8, 4],
                fontWeight: 'bold',
              }}
            >
              {label}
              {/* {materializedType ? (
                <> */}

              {materializedType}

              {/* </>
              ) : ''} */}

            </Text>

            {/* <Text
              style={{
                marginTop: 5,
                fill: '#fff',
                margin: [8, 4],
                fontWeight: 'bold',
                fontSize: 12,
              }}
            >
              (
              {materializedType}
              )
            </Text> */}

            {/* <Rect
                style={{
                  position: "absolute"
                }}
              >
                <Text
                  style={{
                    marginTop: 5,
                    fill: "#fff",
                    margin: [8, 4],
                    fontWeight: "bold"
                  }}
                >
                  ({materializedType})
                </Text>
              </Rect> */}
          </Group>
          <Text style={{
            marginTop: 10,
            fill: '#fff',
            margin: [6, 4],
            fontSize: 9,
          }}
          >
            {subTitle}
          </Text>
        </Rect>
      </Rect>

      {/* <Circle
          style={{
            stroke: "red",
            r: 10,
            fill: "#fff",
            cursor: "pointer",
            // position: "absolute",
            // margin: [0, "auto"]
          }}
          name="circle"
        >
          <Image
            style={{
              img:
                "https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",
              width: 12,
              height: 12,
              margin: [4, "auto"],
              cursor: "pointer"
            }}
          />
        </Circle> */}
    </Group>
  );
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
      type: 'custom-node',
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

Graphin.registerNode('custom-node', createNodeFromReact(CustomNode));

const Graphins = ({ data, showModelDetails }: any) => {
  const args = formatData(data);
  return (
    <div className={showModelDetails ? 'col-span-8' : 'col-span-12'}>
      <Graphin
        // width={300}
        // height={300}
        // defaultNode={{ type: "custom-node-one" }}
        // nodeSize={30}
        // layout={{ type: 'dendrogram', direction: 'H' }}
        data={args}
      >
        <ZoomCanvas disabled />
        {/* <ShowPaths paths={paths} /> */}
      </Graphin>
    </div>
  );
};

export default Graphins;
