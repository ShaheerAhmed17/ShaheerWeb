import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SERVICES_DATA } from '@/lib/constants';
import { Check } from 'lucide-react';

export default function ServicesPage() {
  return (
    <SectionWrapper
      title="My Services"
      subtitle="Comprehensive web solutions designed to elevate your digital presence and achieve your business goals."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
          <Card key={service.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3 mb-2">
                {service.icon && <service.icon className="h-10 w-10 text-primary" />}
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {service.details && service.details.length > 0 && (
                <>
                  <h4 className="font-semibold text-foreground mb-2 mt-2">Key features include:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/contact?service=${service.title}">Discuss Your Project</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
