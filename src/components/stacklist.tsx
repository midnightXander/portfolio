import Image from 'next/image';

const stack = [
  {
    name: 'Nextjs',
    logo: '/images/stacks/nextjs.svg',
    url: 'https://nextjs.org/',
  },
  {
    name: 'React',
    logo: '/images/stacks/react.svg',
    url: 'https://react.dev/',
  },
  {
    name: 'Python',
    logo: '/images/stacks/python.svg',
    url: 'https://www.python.org/',
  },
  {
    name: 'TypeScript',
    logo: '/images/stacks/typescript.svg',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'MongoDB',
    logo: '/images/stacks/mongodb.svg',
    url: 'https://www.djangoproject.com/',
  },
   {
    name: 'Flutter',
    logo: '/images/stacks/flutter.svg',
    url: 'https://www.djangoproject.com/',
  },

  {
    name: 'NodeJs',
    logo: '/images/stacks/node.svg',
    url: 'https://www.nodejs.com/',
  },
  {
    name: 'PostgreSQL',
    logo: '/images/stacks/postgresql.svg',
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'Tailwind CSS',
    logo: '/images/stacks/tailwindcss.svg',
    url: 'https://tailwindcss.com/',
  },
  
  // Add more as needed
];

export default function StackList() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">My Tech Stack</h2>
      <div className="flex overflow-x-auto py-4 gap-6">
        {stack.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow hover:shadow-md transition border border-gray-100 hover:border-gray-300"
          >
            <Image
              src={tech.logo}
              alt={tech.name + ' logo'}
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="text-sm font-medium text-gray-700">{tech.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}