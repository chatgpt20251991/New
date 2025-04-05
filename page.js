import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Rocket, BrainCircuit, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 text-neon">AI Trading Tools</h1>
        <p className="text-lg mb-6 text-gray-300">
          Ontgrendel de kracht van AI en til je trading naar een hoger niveau met onze geavanceerde tools en services.
        </p>
        <Button className="bg-neon hover:bg-white hover:text-black transition-all text-lg px-6 py-2 rounded-xl">
          Bekijk Tools
        </Button>
      </section>

      <section className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <Card className="bg-gray-900 border border-neon shadow-lg">
          <CardContent className="p-6">
            <BrainCircuit className="text-neon w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Signalen</h3>
            <p className="text-gray-400 text-sm">
              Krijg realtime AI-gegenereerde koop- en verkoopsignalen rechtstreeks in je dashboard.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border border-neon shadow-lg">
          <CardContent className="p-6">
            <BarChart3 className="text-neon w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backtesting</h3>
            <p className="text-gray-400 text-sm">
              Test je strategieën met historische data en krijg direct inzicht in winstgevendheid.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border border-neon shadow-lg">
          <CardContent className="p-6">
            <Rocket className="text-neon w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Portfolio AI</h3>
            <p className="text-gray-400 text-sm">
              Laat onze AI jouw portfolio optimaliseren op basis van realtime trends en risicoanalyse.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}