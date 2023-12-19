import Articles from "../components/articles/articles";
import ContentBlocks from "../components/contentblocks/contentblocks";

import Features from "../components/features/features";
import Hero from "../components/hero";
import PageGradient from "../components/pageGradient";
import PageIllustration from "../components/pageIllustraction";
import ThemeSwitch from "../components/ui/themeSwitch";

export default function LandingPage() {
  return (
    <div className="dark:bg-gray-900">
      <ThemeSwitch />
      <PageGradient />
      <PageIllustration />
      <Hero />
      <ContentBlocks />
      <Features />
      <Articles />
    </div>
  );
}
