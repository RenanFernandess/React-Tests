import type { SimulationFormData, SimulationRecord } from "@/data/simulation";
import { getStorageData, setStorageData } from "@/utils/localStorage";


const LOCAL_STORAGE_KEY = 'simulation-data'


export const useSimulationStorage = () => {
  const getFormData = () => getStorageData<SimulationRecord>(LOCAL_STORAGE_KEY)
  const setFormData = (data: SimulationRecord[]) => setStorageData(LOCAL_STORAGE_KEY, data)

  const saveFormData = (formData: SimulationFormData): string => {
    const id = crypto.randomUUID();
    const data = getFormData();
    setFormData([...data, { ...formData, id }])
    return id;
  };

  const getSimulationDataById = (id: string): SimulationRecord | undefined => {
    const data = getFormData();
    return data.find(record => record.id === id);
  };

  const updateSimulation = (id: string, data: SimulationRecord) => {
    const storageData = getFormData()
    const updatedData = storageData.map((simulation) => simulation.id === id ? data : simulation)
    setFormData(updatedData)
  }

  return { saveFormData, getFormData, getSimulationDataById, updateSimulation };
};
