import {
  IN_STORES,
  DELIVERED_BY,
} from '../../utils/constants/storesListPreview';

import BlockPreview from '../../components/ui/block-preview/block-preview.component';

const StoresListPreviewSection = () => {
  return (
    <section className="bg-warm-sunrise min-h-dvh flex flex-col">
      <BlockPreview title="BRST In Real Life" items={IN_STORES} />
      <BlockPreview title="BRST Delivered By" items={DELIVERED_BY} />
    </section>
  );
};

export default StoresListPreviewSection;