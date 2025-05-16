import { SectionWrapper } from '@/components/ui/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ_DATA } from '@/lib/constants';
import { HelpCircle } from 'lucide-react';

export default function FaqPage() {
  return (
    <SectionWrapper
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about my services, processes, and project timelines."
    >
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {FAQ_DATA.map((faqItem, index) => (
            <AccordionItem value={`item-${index + 1}`} key={faqItem.id}>
              <AccordionTrigger className="text-left text-lg hover:text-primary data-[state=open]:text-primary font-medium">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-3 text-accent flex-shrink-0" /> 
                  {faqItem.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2 pb-4">
                {faqItem.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
