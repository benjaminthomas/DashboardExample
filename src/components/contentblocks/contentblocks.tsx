import React from "react";
import { excellences } from "../../data";
import Section from "../section";
import SectionHeader from "../sectionHeader";
import ContentBlock from "./contentblock";

export default function ContentBlocks() {
  return (
    <Section idName="excellence">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 border-t border-gray-200/50 dark:border-gray-800">
          <SectionHeader titleTextValue="EV & ESG Excellence" />

          {/* Items */}
          <div className="grid gap-20">
            {excellences.map((excellence, index) => (
              <React.Fragment key={excellence.id}>
                <ContentBlock {...excellence} odd={index % 2 !== 0} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
