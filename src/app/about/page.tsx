import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const skills = [
  'HTML5 & CSS3',
  'JavaScript (ES6+)',
  'React & Next.js',
  'UI/UX Design Principles',
  'Responsive Web Design',
  'Web Animation (GSAP, Framer Motion)',
  'Website Optimization & Performance',
  'Version Control (Git & GitHub)',
  'API Integration',
  'Tailwind CSS & ShadCN UI',
];

export default function AboutPage() {
  return (
    <SectionWrapper title="About Me" subtitle="Passionate Web Developer | Tech Tutor | CS Enthusiast">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <Card className="overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/600x750.png"
              alt="Profile picture of the developer"
              width={600}
              height={750}
              className="w-full h-auto object-cover"
              data-ai-hint="professional portrait"
              priority
            />
          </Card>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Building Immersive Digital Experiences
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Hello! I'm a creative Web Developer with a strong Computer Science background and hands-on experience as a tech tutor. My passion lies in combining technical precision with artistic flair to deliver pixel-perfect, scalable, and highly responsive websites. I thrive on transforming complex problems into intuitive and engaging digital solutions.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            My journey in tech has been driven by a curiosity for how things work and a desire to create. Whether it's crafting a sleek business website, an interactive animation, or an optimized e-commerce platform, I am committed to producing high-quality work that not only meets but exceeds client expectations. I focus on smooth, mobile-friendly, and fast-loading interfaces to ensure an exceptional user experience.
          </p>
          
          <Card className="bg-secondary/30">
            <CardHeader>
              <CardTitle className="text-xl text-primary">My Core Proficiencies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center text-foreground">
                    <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
