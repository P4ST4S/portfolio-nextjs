import Image from "next/image";

const description =
  "Développeur web freelance passionné par la création de sites web performants et esthétiques. \
  J'ai une solide expertise technique et une grande créativité pour résoudre des problèmes complexes. \
  Collaboratif, je suis toujours prêt à travailler en équipe pour atteindre les objectifs du projet. \
  Contactez-moi pour discuter de vos besoins en développement web.";

export default function Home() {
  return (
    <div className="mt-16">
      <section>
        <div className="px-20 pt-10 md:p-20 text-center">
          <h1 className="text-5xl border-b-4 border-purple-main">
            Antoine ROSPARS
          </h1>
        </div>
      </section>
      <section className="px-20 py-14 md:p-20 justify-around flex-row flex">
        <div className="flex-col px-2 md:px-0">
          <Image
            src="/icons/accessibility.svg"
            alt="Accessibility"
            width={100}
            height={100}
            className="mx-auto md:flex hidden"
          />
          <Image
            src="/icons/accessibility.svg"
            alt="Accessibility"
            width={50}
            height={50}
            className="mx-auto flex md:hidden"
          />
          <div className="py-5 px-4 text-lg md:text-xl">Accessible</div>
        </div>
        <div className="flex-col px-2 md:px-0">
          <Image
            src="/icons/creatif.svg"
            alt="creatif"
            width={100}
            height={100}
            className="mx-auto md:flex hidden"
          />
          <Image
            src="/icons/creatif.svg"
            alt="creatif"
            width={50}
            height={50}
            className="mx-auto flex md:hidden"
          />
          <div className="py-5 px-4 text-lg md:text-xl">Créatif</div>
        </div>
        <div className="flex-col px-2 md:px-0">
          <Image
            src="/icons/code.svg"
            alt="code"
            width={100}
            height={100}
            className="mx-auto md:flex hidden"
          />
          <Image
            src="/icons/code.svg"
            alt="code"
            width={50}
            height={50}
            className="mx-auto flex md:hidden"
          />
          <div className="py-5 px-4 text-lg md:text-xl text-center">
            Expertise technique
          </div>
        </div>
      </section>
      <section className="md:p-20 flex flex-col md:flex-row">
        <Image
          src="/img/profile-img.jpg"
          alt="Profile medium"
          width={300}
          height={300}
          className="rounded-full hidden md:flex border-4 border-purple-main"
        />
        <Image
          src="/img/profile-img.jpg"
          alt="Profile small"
          width={150}
          height={200}
          className="rounded-full mx-auto flex md:hidden border-4 border-purple-main"
        />
        <div className="text-lg md:text-2xl p-6 md:p-20 text-center md:text-right ml-0 2xl:ml-[300px]">
          <h2 className="text-xl md:text-3xl pb-5 font-bold">
            Développeur Web Freelance
          </h2>
          {description}
        </div>
      </section>
    </div>
  );
}
