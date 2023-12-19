import React from "react";
import { articles } from "../../data";
import Section from "../section";
import SectionHeader from "../sectionHeader";
import Article from "./article";

export default function Articles() {
  return (
    <Section idName="news">
      <div className="pt-12 md:pt-20 border-t border-gray-200/50 dark:border-gray-800">
        <SectionHeader titleTextValue="Company News" />
        <div className="grid grid-cols-12 sm:px-5 gap-x-6 gap-y-12">
          {articles.map((article) => (
            <React.Fragment key={article.id}>
              <Article {...article} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
}
