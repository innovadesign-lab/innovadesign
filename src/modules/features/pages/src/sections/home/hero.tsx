import FeatureSection, {
  type OrbitProduct,
} from "@/components/ui/stack-feature-section";

interface HeroProps {
  kicker: string;
  title: string;
  lede: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  products: OrbitProduct[];
}

export function Hero(props: HeroProps) {
  return <FeatureSection {...props} />;
}
