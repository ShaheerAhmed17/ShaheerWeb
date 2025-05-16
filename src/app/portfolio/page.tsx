import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PORTFOLIO_PROJECTS_DATA } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <SectionWrapper
      title="My Portfolio"
      subtitle="A curated collection of projects showcasing my skills in web development, UI/UX design, and interactive experiences."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PORTFOLIO_PROJECTS_DATA.map((project) => (
          <Card key={project.id} id={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
              data-ai-hint={project.dataAiHint}
            />
            <CardHeader>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-base mb-4 leading-relaxed">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              {project.demoLink && (
                <Button asChild>
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    View Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
