import HeroSplitBlock from '@/components/pageBlocks/blocks/HeroSplitBlock'
import HeroCarouselBlock from '@/components/pageBlocks/blocks/HeroCarouselBlock'
import RichTextBlock from '@/components/pageBlocks/blocks/RichTextBlock'
import CardGridBlock from '@/components/pageBlocks/blocks/CardGridBlock'
import FeatureListBlock from '@/components/pageBlocks/blocks/FeatureListBlock'
import StatsGridBlock from '@/components/pageBlocks/blocks/StatsGridBlock'
import ImageBlock from '@/components/pageBlocks/blocks/ImageBlock'
import ServicesGridBlock from '@/components/pageBlocks/blocks/ServicesGridBlock'
import IndustriesGridBlock from '@/components/pageBlocks/blocks/IndustriesGridBlock'
import PartnersGridBlock from '@/components/pageBlocks/blocks/PartnersGridBlock'
import CaseStudiesGridBlock from '@/components/pageBlocks/blocks/CaseStudiesGridBlock'
import StepsBlock from '@/components/pageBlocks/blocks/StepsBlock'
import PricingPlansBlock from '@/components/pageBlocks/blocks/PricingPlansBlock'
import CTABlock from '@/components/pageBlocks/blocks/CTABlock'
import InquiryFormBlock from '@/components/pageBlocks/blocks/InquiryFormBlock'
import SpacerBlock from '@/components/pageBlocks/blocks/SpacerBlock'

type Block = { id?: string; blockType: string; [key: string]: any }

export default function RenderBlocks({ blocks }: { blocks: Block[] }) {
  if (!Array.isArray(blocks) || blocks.length === 0) return null
  return (
    <>
      {blocks.map((b, idx) => {
        const key = b.id || `${b.blockType}-${idx}`
        switch (b.blockType) {
          case 'heroSplit':
            return <HeroSplitBlock key={key} {...b} />
          case 'heroCarousel':
            return <HeroCarouselBlock key={key} {...b} />
          case 'richText':
            return <RichTextBlock key={key} {...b} />
          case 'cardGrid':
            return <CardGridBlock key={key} {...b} />
          case 'featureList':
            return <FeatureListBlock key={key} {...b} />
          case 'statsGrid':
            return <StatsGridBlock key={key} {...b} />
          case 'image':
            return <ImageBlock key={key} {...b} />
          case 'servicesGrid':
            return <ServicesGridBlock key={key} {...b} />
          case 'industriesGrid':
            return <IndustriesGridBlock key={key} {...b} />
          case 'partnersGrid':
            return <PartnersGridBlock key={key} {...b} />
          case 'caseStudiesGrid':
            return <CaseStudiesGridBlock key={key} {...b} />
          case 'steps':
            return <StepsBlock key={key} {...b} />
          case 'pricingPlans':
            return <PricingPlansBlock key={key} {...b} />
          case 'cta':
            return <CTABlock key={key} {...b} />
          case 'inquiryForm':
            return <InquiryFormBlock key={key} {...b} />
          case 'spacer':
            return <SpacerBlock key={key} {...b} />
          default:
            return null
        }
      })}
    </>
  )
}
