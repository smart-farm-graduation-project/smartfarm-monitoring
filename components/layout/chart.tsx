import dynamic from "next/dynamic";

const Chart = dynamic(
  // @ts-ignore
  () => import("./Charts.tsx"),
  { loading: () => <p>loading...</p>, ssr: false }
);

type chartName = { chartName: string };

const chart = ({ chartName }: chartName) => {
  console.log(chartName);

  return <Chart chartName={chartName} />;
};

export default chart;
