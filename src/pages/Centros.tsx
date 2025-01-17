import { CardLayout } from "../components/ui/CardLayout";

export function Centros() {
  return (
    <main className="w-full rounded-lg my-5 flex  flex-col gap-2">
      <div className="grid grid-cols-4 gap-3">
        <CardLayout>
          <div className="flex flex-col gap-2">
            <h3 className="text-center">Centro 1</h3>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex flex-col gap-2">
            <h3 className="text-center">Centro 2</h3>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex flex-col gap-2">
            <h3 className="text-center">Centro 3</h3>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex flex-col gap-2">
            <h3 className="text-center">Centro 4</h3>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex flex-col gap-2">
            <h3 className="text-center">Centro 5</h3>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex flex-col gap-2">
            <h3 className="text-center">Centro 6</h3>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex flex-col gap-2">
            <h3 className="text-center">Centro 7</h3>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex flex-col gap-2">
            <h3 className="text-center">Centro 8</h3>
          </div>
        </CardLayout>
      </div>
    </main>
  );
}
