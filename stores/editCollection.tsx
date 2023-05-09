import { create } from 'zustand';

const initialState = {
  collection: {
    collectionNo: 0,
    collectionName: '',
    symbol: '',
    totalAmount: 0,
    description: '',
    outlink: '',
    collectionType: '',
    isAudit: '',
    bannerFile: undefined,
    bannerContentType: '',
    thumbnailFile: undefined,
    thumbnailContentType: '',
    brandName: '',
    royaltyPercentage: 0,
    userNo: 0,
    userId: '',
    walletType: '',
    network: '',
    walletAddress: '',
    nftType: '',
  },
  itemList: [
    {
      nftType: '',
      itemAmount: 0,
      isReveal: '',
      itemFile: null,
      itemContentType: null,
      nftName: '',
      itemTraitList: [
        {
          traitKey: '',
          traitValue: '',
        },
      ],
    },
  ],
  phaseList: [
    {
      phaseStep: 0,
      phaseType: '',
      mintPrice: 0,
      startMintDt: '',
      endMintDt: '',
      phaseMintAmount: 0,
    },
  ],
  // 이미지 변경 여부 확인
  isChangeBannerFile: false,
  isChangeThumbnailFile: false,
  isChangeItemFile: false,
};

export const useEditCollectionStore = create<any>((set) => ({
  ...initialState,
  setInit: () => {
    set({ ...initialState });
  },
  setCollection: (data: any) => {
    set({ collection: data });
  },
  setPhaseList: (data: any) => {
    set({ phaseList: data });
  },
  setItemList: (data: any) => {
    set({ itemList: data });
  },
  setIsChangeBannerFile: (data: boolean) => {
    set({ isChangeBannerFile: data });
  },
  setIsChangeThumbnailFile: (data: boolean) => {
    set({ isChangeThumbnailFile: data });
  },
  setIsChangeItemFile: (data: boolean) => {
    set({ isChangeItemFile: data });
  },
}));
