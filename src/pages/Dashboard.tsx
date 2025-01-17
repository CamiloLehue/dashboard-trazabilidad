import ActividadReciente from "../components/ActividadReciente";
import { ChartLine } from "../components/charts/ChartLine";
import { CardLayout } from "../components/ui/CardLayout";

export function Dashboard() {
  return (
    <>
      <main className="w-full rounded-lg my-5 flex  flex-col gap-2">
        <div className="grid grid-cols-5 gap-3">
          <CardLayout className="col-span-2 ">
            <ChartLine />
          </CardLayout>
          <CardLayout className="col-span-3">
            <ActividadReciente />
          </CardLayout>
          <CardLayout className="col-span-2">
            <ChartLine />
          </CardLayout>
          <CardLayout className="col-span-2">
            <ChartLine />
          </CardLayout>
          <CardLayout className="col-span-1">
            <ChartLine />
          </CardLayout>
          <CardLayout className="col-span-1">
            <ChartLine />
          </CardLayout>
          <CardLayout className="col-span-1">
            <ChartLine />
          </CardLayout>
          <CardLayout className="col-span-1">
            <ChartLine />
          </CardLayout>
          <CardLayout className="col-span-1">
            <ChartLine />
          </CardLayout>
          <CardLayout className="col-span-1">
            <ChartLine />
          </CardLayout>
        </div>
      </main>
    </>
  );
}
