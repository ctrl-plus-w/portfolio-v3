import Image from 'next/image';
import Head from 'next/head';
import clsx from 'clsx';

import type { ReactElement } from 'react';

import Header from '@element/Header';
import Separator from '@element/Separator';

import LongArrowDown from '@icon/LongArrowDown';

import useBreakpoints from '@hook/useBreakpoints';

import { renderIf } from '@helper/react';

import appExampleImage1 from '../../public/images/app_example_1.png';
import appExampleImage2 from '../../public/images/app_example_2.png';
import appExampleImage3 from '../../public/images/app_example_3.png';

const Work = (): ReactElement => {
  const { greaterThan } = useBreakpoints();

  return (
    <>
      <Head>
        <title>Lukas Laudrain - Mon travail</title>
        <meta
          name="description"
          content="Création de sites web et d'applications web. Liste non-exhaustive des travaux et projets que j'ai réalisé."
        />
      </Head>

      <section className="flex flex-col h-screen px-8 pt-32 pb-16 lg:px-32 lg:py-0 lg:justify-center">
        <Header type={1} className="font-mono text-primary">
          Mon travail
        </Header>
        <Separator size="big" />

        <p className="text-primaryLight mt-16 lg:max-w-2xl">
          Passioné depuis très jeune depuis l’informatique, j’ai commencé la
          programmation au collège. J’ai depuis ouvert mon entreprise et suis
          devenu développeur en autodidacte.
          <br />
          <br />
          Chaque projet à son client et est réalisé en accompagnement total avec
          celui-ci. Le suivi et la compréhension de vos attentes est l’élément
          clef et primordial de la réusite d’un projet.
        </p>

        {renderIf(
          !greaterThan('md'),
          <LongArrowDown className="self-center mt-auto stroke-primary" />
        )}
      </section>

      <section className="px-8 py-16 lg:py-32 md:px-32 2xl:px-64">
        <Header type={2} className="font-mono">
          Gestion d’emplois du temps
        </Header>
        <Separator size="normal" />

        <div className="relative flex flex-col 2xl:flex-row">
          <p className="text-primaryLight mt-16 text-justify lg:max-w-3xl">
            Les évaluations sur feuilles peuvent ne pas être adaptés à certaines
            manières d’évaluer les compétences des élèves, d’une autre part, la
            correction de ces évaluations peut être longue et fastidieuse. C’est
            pour faciliter le travail des professeurs que cette application web
            à été développée.
            <br />
            <br />
            La fonctionnalitée principale demandée était le dynamisme dans les
            propositions des questions : questions à choix multiple, réponse
            libre, numérique, textuelle... et c’est autour de cette
            problématique que l’application à été développée. Avec bien d’autres
            fonctionnalités encore.
          </p>

          <Image
            src={appExampleImage1}
            alt="Project1 Image"
            className="mt-16 transform scale-125"
          />
        </div>
      </section>

      <section className="flex flex-col items-end justify px-8 py-16 lg:py-32 md:px-32 2xl:px-64">
        <Header type={2} className="font-mono">
          Gestion de QCM
        </Header>
        <Separator size="normal" />

        <div
          className={clsx([
            'flex flex-col justify-between items-center',
            'lg:items-end lg:max-w-3xl 2xl:max-w-full 2xl:flex-row-reverse 2xl:items-start'
          ])}
        >
          <p className="text-primaryLight mt-16 text-justify">
            Cette application web à été réalisée dans le but de faciliter
            l’organisation des emplois du temps pour un lycée. Particulièrement
            dans le contexte du covid où les professeurs devaient eux-même
            placer leurs cours en visio-conférence dans l’emplois du temps des
            élèves.
            <br />
            <br />
            Plusieurs applications web permettent ces fonctionnalités,
            cependant, le but de celle-ci est de faciliter l’utilisation afin de
            permettre une prise en main rapide et efficace.
          </p>

          <Image
            src={appExampleImage2}
            alt="Project2 Image"
            className="mt-16 transform scale-125 lg:self-center 2xl:origin-right"
          />
        </div>
      </section>

      <section className="px-8 py-16 lg:py-32 md:px-32 2xl:px-64">
        <Header type={2} className="font-mono">
          Évaluation du développement
        </Header>
        <Separator size="normal" />

        <div className="flex flex-col 2xl:flex-row">
          <p className="text-primaryLight mt-16 text-justify lg:max-w-3xl">
            Dans la même idée que l’application de gestion des QCM, l’évaluation
            des programme nottement lors de cours d’informatique, l’évaluation
            des programmes des élèves peut être fastidieuse.
            <br />
            <br />
            L’objectif de cette application web est de simplifier pour les
            élèves comme pour les professeurs la notation et l’évaluation des
            compétences en développement et en programmation des étudiants.
          </p>

          <Image
            src={appExampleImage3}
            alt="Project3 Image"
            className="mt-16 transform scale-125"
          />
        </div>
      </section>

      <section className="mt-16 mb-11 flex flex-col items-center">
        <p className="text-primary text-2xl font-medium text-center lg:max-w-xl">
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

export default Work;
