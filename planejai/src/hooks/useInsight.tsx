import type { SimulationRecord } from "@/data/simulation";
import { buildAIPrompt, getInsight, type InsightData } from "@/services/AI";
import { useCallback, useEffect, useState } from "react";
import { useSimulationStorage } from "./useSimulationStorege";


export const useInsight = (id: string) => {
  const { getSimulationDataById, updateSimulation } = useSimulationStorage();
  const simulation = getSimulationDataById(id);

  if (!simulation) {
    throw new Error(`Não foi possível encontrar dados de simulação para gerar insights.`);
  };
  if (simulation.insight) {
    return simulation.insight
  };

  const [insight, setInsight] = useState<InsightData | null>(null);

  const fetchInsight = useCallback(async () => {
    const prompt = buildAIPrompt(simulation);
    const insightData = await getInsight(prompt);
    setInsight(insightData)
  }, []);

  useEffect(() => {
    if (!insight) {
      fetchInsight()
      return;
    }
    const updatedSimulation = ({ ...simulation, insight }) as SimulationRecord;
    updateSimulation(id, updatedSimulation);
  }, [insight]);

  return insight;
}
