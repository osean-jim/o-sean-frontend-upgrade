import { create } from 'zustand';

const initialState = {
  collection: {
    collectionName: '',
    symbol: '',
    description: '',
    outlink: '',
    collectionType: '',
    royaltyPercentage: '0',
    isAudit: 'N',
    network: 'KLA',
  },
  collectionImage: {},
  phaseList: [
    {
      phaseType: 'PU',
      startMintDt: '',
      endMintDt: '',
      mintPrice: '',
    },
  ],
  itemList: [
    {
      itemAmount: '',
    },
  ],
  itemImage: {},
};

export const useCollectionStore = create<any>((set) => ({
  ...initialState,
  setInit: () => {
    set({ ...initialState });
  },
  setCollection: (data: any) => {
    set({ collection: data });
  },
  setCollectionImage: (data: any) => {
    set({ collectionImage: data });
  },
  setPhaseList: (data: any) => {
    set({ phaseList: data });
  },
  setItemList: (data: any) => {
    set({ itemList: data });
  },
  setItemImage: (data: any) => {
    set({ itemImage: data });
  },
}));
