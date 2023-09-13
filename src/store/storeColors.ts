import { create } from 'zustand';

type ColorsState = {
    color: string
}

const useStoreColors = create<ColorsState>((set) => ({
  color: '#FC0'  
}));

export default useStoreColors;
