import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // <-- changed
import Contract from "./pages/Contract";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { createRoot } from "react-dom/client";
import Landing from "./pages/Landing";
import CSS from "./Landing.css"
import Capabilities from "./pages/Capabilities";
import Work from "./pages/Work";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter> {/* <-- changed */}
        <Header /> {/* Moved header here so it will be applied to every site */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

