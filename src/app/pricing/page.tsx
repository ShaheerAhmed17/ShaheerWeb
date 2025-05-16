import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PRICING_PLANS_DATA } from '@/lib/constants';
import { Check, Sparkles, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function PricingPage() {
  return (
    <>
      <SectionWrapper
        title="Pricing & Packages"
        subtitle="Transparent pricing plans designed to fit your project needs and budget. Let's build something amazing together."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS_DATA.map((plan) => (
            <Card 
              key={plan.id} 
              className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${plan.isPopular ? 'border-primary border-2 relative' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full shadow-md flex items-center">
                  <Sparkles className="w-4 h-4 mr-1" /> Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.priceDescription && <span className="text-sm text-muted-foreground ml-1">{plan.priceDescription}</span>}
                </div>
                <CardDescription className="text-sm">Estimated Delivery: {plan.timeline}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className={`w-full ${plan.isPopular ? '' : 'bg-primary/90 hover:bg-primary'}`} variant={plan.isPopular ? 'default' : 'secondary'}>
                  <Link href={`/contact?plan=${plan.name}`}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Alert className="mt-12 bg-secondary/50">
          <Info className="h-5 w-5 text-primary" />
          <AlertTitle className="font-semibold">Optional Extras</AlertTitle>
          <AlertDescription>
            Need something more? Fast delivery, additional plugins, or specific features can be discussed and quoted separately.
          </AlertDescription>
        </Alert>
      </SectionWrapper>
    </>
  );
}
