import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Layout } from "./layout/Layout.tsx";
import { Home } from "./pages/Home.tsx";
import { Folios } from "./pages/Folios.tsx";
import { Centros } from "./pages/Centros.tsx";
import { FolioDetalle } from "./pages/FolioDetalle.tsx";
import { FolioHistorialDoc } from "./pages/FolioHistorialDoc.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";

const AppLayout = () => {
  // const location = useLocation();
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="Dashboard Control" description="Sistema">
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/inicio"
          element={
            <Layout title="Dashboard Control" description="Sistema">
              <Home />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout title="Dashboard Control" description="Sistema">
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/folio"
          element={
            <Layout title="Todos los Folios" description="Sistema">
              <Folios />
            </Layout>
          }
        />
        <Route
          path="/folioResumen"
          element={
            <Layout title="Folio Resumen" description="Sistema">
              <FolioDetalle />
            </Layout>
          }
        />
        <Route
          path="/folioHistorialDoc"
          element={
            <Layout title="Folio Historial Documentos" description="Sistema">
              <FolioHistorialDoc />
            </Layout>
          }
        />

        <Route
          path="/centros"
          element={
            <Layout title="Centros" description="Sistema">
              <Centros />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </StrictMode>
);
