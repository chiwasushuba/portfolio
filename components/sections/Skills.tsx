import FadeIn from '@/components/animation/FadeIn';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', icon: '/icons/js.png', color: 'bg-yellow-500/10' },
    { name: 'TypeScript', icon: '/icons/typescript.png', color: 'bg-blue-500/10' },
    { name: 'React', icon: '/icons/atom.png', color: 'bg-cyan-500/10' },
    { name: 'Next.js', icon: '/icons/nextJs.jpeg', color: 'bg-gray-500/10' },
    { name: 'Node.js', icon: '/icons/express.jpg', color: 'bg-green-500/10' },
    { name: 'Python', icon: '/icons/python.png', color: 'bg-blue-400/10' },
    { name: 'NestJS', icon: '/icons/Nest.svg', color: 'bg-red-500/10' },
    { name: 'PostgreSQL', icon: '/icons/pg.svg', color: 'bg-blue-600/10' },
    { name: 'MySQL', icon: '/icons/mysql.png', color: 'bg-blue-700/10' },
    { name: 'Firebase', icon: '/icons/Firebase.png', color: 'bg-orange-500/10' },
    { name: 'AWS', icon: '/icons/aws.jpg', color: 'bg-orange-600/10' },
    { name: 'GCP', icon: '/icons/gcp.png', color: 'bg-blue-500/10' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <FadeIn key={skill.name} delay={index * 0.1} direction="up">
              <Card className="text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group border-2 hover:border-primary/50">
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col items-center gap-3">
                    <div className={`p-3 rounded-lg group-hover:bg-primary/20 transition-colors ${skill.color}`}>
                      <div className="relative w-12 h-12">
                        <Image
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="font-semibold text-lg">{skill.name}</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
