import type { ReactElement } from 'react';

import Image from 'next/image';

import ParticleAnimation from '@element/ParticleAnimation';
import AnchorButton from '@element/AnchorButton';
import AreaButton from '@element/AreaButton';
import Separator from '@element/Separator';
import Header from '@element/Header';

import menu from '../../public/icons/menu.svg';

const Home = (): ReactElement => {
  const openMenu = () => {};

  return (
    <>
      <section className="flex flex-col items-center h-screen p-8">
        <AreaButton onClick={openMenu} className="self-end">
          <Image src={menu} alt="Menu Icon" height={32} width={32} />
        </AreaButton>

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
    </>
  );
};

export default Home;
