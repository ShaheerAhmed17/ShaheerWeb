import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ContactForm } from '@/components/contact/ContactForm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SOCIAL_LINKS } from '@/lib/constants';
import Link from 'next/link';
import { Mail, MessageSquare } from 'lucide-react'; // Assuming MessageSquare for Fiverr

export default function ContactPage() {
  return (
    <SectionWrapper
      title="Get In Touch"
      subtitle="Have a project in mind or just want to say hi? I'd love to hear from you. Fill out the form below or connect with me on social media."
    >
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Card className="shadow-xl p-6 md:p-8">
            <ContactForm />
          </Card>
        </div>
        <div className="lg:col-span-1 space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Mail className="w-6 h-6 mr-3 text-primary" /> Direct Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Prefer to email directly? You can reach me at:
              </p>
              <Link href="mailto:gettoknowshaheer798@gmail.com" className="font-medium text-primary hover:underline break-all">
                gettoknowshaheer798@gmail.com
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-primary" /> Connect Online
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Follow my work and connect on these platforms:
              </p>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-foreground hover:text-primary transition-colors group"
                  >
                    <link.icon className="h-5 w-5 mr-2 text-muted-foreground group-hover:text-primary transition-colors" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
