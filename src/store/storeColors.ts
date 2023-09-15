import { create } from 'zustand';

type ColorsState = {
    color: string,
    setColor: (color: string)=>void
}

const useStoreColors = create<ColorsState>((set) => ({
  color: 'color1',
  setColor: (color: string)=>set((state) => ({ color: color }))
}));

export default useStoreColors;
