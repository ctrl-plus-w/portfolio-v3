import type { ReactElement } from 'react';

import clsx from 'clsx';

import Card from '@module/Card';
import Menu from '@module/Menu';

import ParticleAnimation from '@element/ParticleAnimation';
import AnchorButton from '@element/AnchorButton';
import Separator from '@element/Separator';
import Header from '@element/Header';

const Home = (): ReactElement => {
  return (
    <>
      <section className="flex flex-col items-center min-h-screen p-8">
        <Menu className="self-end" />

        <ParticleAnimation className="w-80 h-80" />

        <Header type={1} className="font-mono text-primary mt-8">
          Lukas
        </Header>
        <Separator size="big" />

        <p className="text-primaryLight text-center mt-12">
          Développeur web et designer indépendant <br /> Création d’applications
          web complexes
        </p>

        <AnchorButton href="/contact" className="mt-16">
          Se rencontrer
        </AnchorButton>
      </section>

      <section className="flex flex-col p-8" id="accompaniement">
        <Header type={2} className="font-mono text-primary">
          Votre accompagnement
        </Header>
        <Separator size="normal" />

        <article className="mt-14 pb-8">
          <Header type={4}>Entretiens préalable</Header>

          <p className="text-primaryLight w-[80%]">
            Une première rencontre afin d’accorder vos attentes avec la solution
            que je vous fournirai.
          </p>

          <div
            className={clsx([
              'absolute top-1/3 left-[80%]',
              'transform -translate-x-[2px] -translate-y-[1.375px]',
              'h-1 w-1 bg-ternary rounded-full'
            ])}
          ></div>

          <div
            className={clsx([
              'absolute bottom-[5%] right-[5%]',
              'transform translate-x-[1.375px] translate-y-[2px]',
              'h-1 w-1 bg-ternary rounded-full'
            ])}
          ></div>

          <div
            className={clsx([
              'absolute right-[5%] bottom-[5%] left-[80%] top-1/3',
              'border-t-[1.25px] border-r-[1.25px] border-ternary rounded-tr-xl'
            ])}
          ></div>
        </article>

        <article className="mt-2 pb-8">
          <Header type={4}>Le devis</Header>

          <p className="text-primaryLight text-right w-[80%]">
            Création d’un cahier des charges en accord avec vos souhaits afin de
            remplir complètement vos attentes.
          </p>

          <div
            className={clsx([
              'absolute top-1/3 right-[80%]',
              'transform translate-x-[2px] -translate-y-[1.375px]',
              'h-1 w-1 bg-ternary rounded-full'
            ])}
          ></div>

          <div
            className={clsx([
              'absolute bottom-[5%] left-[5%]',
              'transform -translate-x-[1.375px] translate-y-[2px]',
              'h-1 w-1 bg-ternary rounded-full'
            ])}
          ></div>

          <div
            className={clsx([
              'absolute right-[80%] bottom-[5%] left-[5%] top-1/3',
              'border-t-[1.25px] border-l-[1.25px] border-ternary rounded-tl-xl'
            ])}
          ></div>
        </article>

        <article className="my-2">
          <Header type={4}>La conception</Header>

          <p className="text-primaryLight w-[80%]">
            Développement de votre solution avec un suivi permanent de
            l’avancement pour éviter les erreurs.
          </p>
        </article>

        <article className="pt-8">
          <Header type={4}>Le suivi</Header>

          <p className="text-primaryLight text-right w-[80%]">
            Vous avez besoin de révisions où de modifications après la
            finalisation du développement. Le suivi est la pour ça.
          </p>

          <div
            className={clsx([
              'absolute top-[5%] left-[5%]',
              'transform -translate-y-[2px] -translate-x-[1.375px]',
              'h-1 w-1 bg-ternary rounded-full'
            ])}
          ></div>

          <div
            className={clsx([
              'absolute bottom-1/3 right-[80%]',
              'transform translate-y-[1.375px] translate-x-[2px]',
              'h-1 w-1 bg-ternary rounded-full'
            ])}
          ></div>

          <div
            className={clsx([
              'absolute right-[80%] top-[5%] left-[5%] bottom-1/3',
              'border-b-[1.25px] border-l-[1.25px] border-ternary rounded-bl-xl'
            ])}
          ></div>
        </article>
      </section>

      <section className="flex flex-col items-end mt-16 p-8">
        <Header type={2}>Les offres</Header>
        <Separator size="normal" />

        <Card
          title="Site simple"
          description="Besoin d'un site pour présenter vôtre commerce ou vos services. Cette solution est pour vous."
          options={[
            {
              name: 'Design responsive',
              checked: true
            },
            {
              name: 'Accesibilité',
              checked: true
            },
            {
              name: 'Formulaire de contact',
              checked: true
            },

            {
              name: "Espace d'administration",
              checked: false
            },
            {
              name: 'Pages dynamique',
              checked: false
            },
            {
              name: 'Outils de gestion',
              checked: false
            }
          ]}
          className="mt-14"
        />

        <Card
          title="Site complexe"
          description="Développement d'une application web, un outils interactif portable et hébergé."
          options={[
            {
              name: 'Design responsive',
              checked: true
            },
            {
              name: 'Accesibilité',
              checked: true
            },
            {
              name: 'Formulaire de contact',
              checked: true
            },

            {
              name: "Espace d'administration",
              checked: true
            },
            {
              name: 'Pages dynamique',
              checked: true
            },
            {
              name: 'Outils de gestion',
              checked: true
            }
          ]}
          className="mt-10"
        />

        <Card
          title="SAV"
          description="Accompagnement et révision après le projet."
          className="mt-10"
          dark
        />
      </section>

      <section className="mt-16 mb-11 flex flex-col items-center">
        <p className="text-primary text-2xl font-medium text-center">
          Une idée en tête ? Besoin d’aide pour vôtre transition digitale ?
        </p>

        <div className="relative my-8 h-16 w-[1.25px] bg-primary">
          <div className="absolute -top-[2px] -left-[1.375px] w-1 h-1 rounded-full bg-primary transform"></div>
          <div className="absolute -bottom-[2px] -left-[1.375px] w-1 h-1 rounded-full bg-primary transform"></div>
        </div>

        <a
          href="/contact"
          className="block rounded-xl bg-secondaryBright px-7 py-3 font-mono text-xl"
        >
          Se rencontrer
        </a>
      </section>
    </>
  );
};

export default Home;
