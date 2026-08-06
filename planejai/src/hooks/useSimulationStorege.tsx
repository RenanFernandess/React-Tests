import type { SimulationFormData, SimulationRecord } from "@/data/simulation";


const LOCAL_STORAGE_KEY = 'simulation-data'


export const useSimulationStorage = () => {
  const getFormData = (): SimulationRecord[] => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY)
    return data ? JSON.parse(data) as SimulationRecord[] : []
  };

  const saveFormData = (formData: SimulationFormData): string => {
    const id = crypto.randomUUID();
    const updatedData = [...getFormData(), { ...formData, id }];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData))
    return id;
  };

  const getFormDataById = (id: string): SimulationRecord | undefined => {
    const data = getFormData();
    return data.find(record => record.id === id);
  };

  return { saveFormData, getFormData, getFormDataById };
};
