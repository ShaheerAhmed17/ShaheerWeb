import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SERVICES_DATA, PORTFOLIO_PROJECTS_DATA, APP_NAME } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-background to-secondary/30 pt-20 md:pt-32 pb-16 md:pb-24 text-center">
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Muhammad <span className="text-primary">Shaheer</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Creative Web Developer | Building Responsive, Scalable, and User-Centric Websites
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/portfolio">
                Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg">
              <Link href="/contact">
                Get in Touch <Sparkles className="ml-2 h-5 w-5 text-accent" />
              </Link>
            </Button>
          </div>
        </div>
        {/* Subtle floating elements - example */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-float opacity-50 -z-10" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-primary/20 rounded-lg animate-float opacity-50 -z-10" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
         <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-secondary rounded-full animate-float opacity-50 -z-10" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
      </SectionWrapper>

      {/* Mini Services Overview */}
      <SectionWrapper title="My Expertise" subtitle="Delivering immersive digital experiences tailored to your needs.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 3).map((service) => (
            <Card key={service.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-3">
                {service.icon && <service.icon className="w-8 h-8 text-primary" />}
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="link" className="text-primary text-lg">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
      
      {/* Mini Portfolio Showcase */}
      <SectionWrapper title="Recent Projects" subtitle="A glimpse into my creative solutions and technical skills.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS_DATA.slice(0, 3).map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={project.dataAiHint}
              />
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description.substring(0,100)}...</CardDescription>
                 <Button asChild variant="link" className="p-0 h-auto mt-2 text-primary">
                    <Link href={`/portfolio#${project.id}`}>Learn More</Link>
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
          <Button asChild variant="link" className="text-primary text-lg">
            <Link href="/portfolio">
              Explore Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
