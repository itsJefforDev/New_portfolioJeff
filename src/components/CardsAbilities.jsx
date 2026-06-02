import GlowCard from "./ui/GlowCard";

const images = import.meta.glob('../assets/images/*', {
  eager: true,
  import: 'default',
})


const GithubIcon = () => (

  <svg
    className="size-7"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44..."
      clipRule="evenodd"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    className="size-7"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="..." />
  </svg>
);

const TwitterIcon = () => (
  <svg
    className="size-7"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="..." />
  </svg>
);

const usersData = [
  {
    id: 1,
    name: "Full-Stack apps",
    role: "Web software development",
    avatar:
      images['../assets/images/code.png'],
    description:
      "Complete and scalables aplications",
    socials: [
      {
        platform: "github",
        href: "https://github.com",
        icon: <GithubIcon />,
      },
      {
        platform: "linkedin",
        href: "https://linkedin.com",
        icon: <LinkedinIcon />,
      },
    ],
  },

  {
    id: 2,
    name: "Software support",
    role: "Problems resolution",
    avatar:
      images['../assets/images/maintenance.png'],
    description:
      "Computer support, repair and helpdesk",
    socials: [
      {
        platform: "linkedin",
        href: "https://linkedin.com",
        icon: <LinkedinIcon />,
      },
      {
        platform: "twitter",
        href: "https://twitter.com",
        icon: <TwitterIcon />,
      },
    ],
  },
  {
    id: 2,
    name: "Data Analytics",
    role: "Data dynamic reporting",
    avatar:
      images['../assets/images/analytics.png'],
    description:
      "Dashboards implementation and interactive reports",
    socials: [
      {
        platform: "linkedin",
        href: "https://linkedin.com",
        icon: <LinkedinIcon />,
      },
      {
        platform: "twitter",
        href: "https://twitter.com",
        icon: <TwitterIcon />,
      },
    ],
  },

];

export default function CardsAbilities() {

  return (
    <div className="min-h-screen bg-radial-[at_50%_50%] from-violet-800 via-slate-900 to-slate-950 to-70% mt-25">
      <h1 className="text-sky-200 text-3xl text-center mb-9">My competences</h1>
      <div className="flex items-center justify-center gap-8 flex-wrap p-10">
        {usersData.map((user) => (
          <GlowCard key={user.id} user={user} />
        ))}
      </div>

    </div>
  );
}