import React, { memo, useMemo } from "react";
import { isEqual } from "@/utils";
import Graph from "@/components/Charts/Graph";

// 获取series数据
const getData = data => {
  const seriesData = [];
  const xAxis = [];
  if (Array.isArray(data)) {
    data.forEach(({ name, pv }) => {
      seriesData.push(pv);
      xAxis.push(name);
    });
  }
  return {
    seriesData,
    xAxis
  };
};

const GraphChart = memo(({ className, loading, click }) => {
  // const { seriesData, xAxis } = useMemo(() => getData(data), [data]);
  const data = {"data":[{"name":"日本广告量动向排行榜发布 渡辺直美成为关东第一1564572263122","data-id":1564572263122,"x":450,"y":100,"symbolSize":100,"itemStyle":{"color":"#1890ff"},"label":{"align":"center","formatter":"{a|日本广告量动}\n{a|向排行榜发布}\n{a| 渡辺直美成}\n{a|为关东第一}","rich":{"a":{"color":"white"}}}},{"name":"“军事拉力”项目收官 军参赛队获团体赛亚军1565662926362","data-id":1565662926362,"x":550,"y":100,"symbolSize":100,"itemStyle":{"color":"#1890ff"},"label":{"align":"center","formatter":"{a|“军事拉力”}\n{a|项目收官 军}\n{a|参赛队获团体}\n{a|赛亚军}","rich":{"a":{"color":"white"}}}},{"name":"我军参赛队包揽“安全环境”项目全部第一1565662930728","data-id":1565662930728,"x":650,"y":100,"symbolSize":100,"itemStyle":{"color":"#1890ff"},"label":{"align":"center","formatter":"{a|我军参赛队包}\n{a|揽“安全环境}\n{a|”项目全部第}\n{a|一}","rich":{"a":{"color":"white"}}}},{"name":"上海书展|在人人竞相成为赢家的时代 他却只想做个人生“输”家1566024382861","data-id":1566024382861,"x":750,"y":100,"symbolSize":100,"itemStyle":{"color":"#1890ff"},"label":{"align":"center","formatter":"{a|上海书展|在}\n{a|人人竞相成为}\n{a|赢家的时代 }\n{a|他却只想做个}","rich":{"a":{"color":"white"}}}},{"name":"沪滇合作十六年 云南昆明风情在豫园精彩上演1566024368408","data-id":1566024368408,"x":850,"y":100,"symbolSize":100,"itemStyle":{"color":"#1890ff"},"label":{"align":"center","formatter":"{a|沪滇合作十六}\n{a|年 云南昆明}\n{a|风情在豫园精}\n{a|彩上演}","rich":{"a":{"color":"white"}}}},{"name":"2019","category":"关键字","x":400,"y":300,"label":{"align":"center","formatter":"2019","rich":{"a":{"color":"white"}}}}],"links":[{"source":"日本广告量动向排行榜发布 渡辺直美成为关东第一1564572263122","target":"2019"},{"source":"“军事拉力”项目收官 军参赛队获团体赛亚军1565662926362","target":"2019"},{"source":"我军参赛队包揽“安全环境”项目全部第一1565662930728","target":"2019"},{"source":"上海书展|在人人竞相成为赢家的时代 他却只想做个人生“输”家1566024382861","target":"2019"},{"source":"沪滇合作十六年 云南昆明风情在豫园精彩上演1566024368408","target":"2019"}],"categoriesData":[{"name":"关键字"}]}
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: "quinticInOut",
    series: [
      {
        type: "graph",
        // layout: 'none',
        symbolSize: 50,
        roam: true,
        layout: "force",
        nodeScaleRatio: 0,
        // focusNodeAdjacency: true,
        draggable: true,
        force: {
          // repulsion: (data['data'].length * 100 + data['links'].length * 50),
          repulsion: data["data"].length * 200 + data["links"].length * 200,
          gravity: 0.3
        },
        label: {
          normal: {
            show: true
          }
        },
        edgeSymbol: ["circle", "arrow"],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          normal: {
            textStyle: {
              fontSize: 20
            }
          }
        },
        nodes: data["data"],
        links: data["links"],
        categories: data["categoriesData"],
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 2,
            curveness: 0
          }
        }
      }
    ]
  };
  const clickHandle = params => {
    if (Object.keys(params.data).includes("data-id")) {
      click(params.data["data-id"]);
    }
  };
  return (
    <Graph
      events={[
        {
          eventName: "click",
          handler: clickHandle,
          query: { dataType: "node" }
        }
      ]}
      style={{ height: "80vh" }}
      className={className}
      option={option}
      loading={false}
    />
  );
}, isEqual);

export default GraphChart;
