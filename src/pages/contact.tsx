import { ChangeEvent, FormEvent, useState } from 'react';

import type { ReactElement, Dispatch, SetStateAction } from 'react';

import Separator from '@element/Separator';
import Header from '@element/Header';
import clsx from 'clsx';

const Contact = (): ReactElement => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const [buttonText, setButtonText] = useState('Envoyer');

  const onChange =
    (setValue: Dispatch<SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(event.target.value);
    };

  const isValid = () => {
    if (name === '' || mail === '' || message === '') return false;

    return true;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid()) return;

    setButtonText('En cours...');

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        name,
        mail,
        message
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) console.error(error);

    setButtonText('Envoyé');
  };

  return (
    <>
      <section className="p-8 pt-32 h-screen">
        <Header type={1} className="font-mono text-primary">
          Me contacter
        </Header>
        <Separator size="big" />

        <p className="mt-9 text-primaryLight">
          Besoin d’un devis ? D’être rassuré ? De me rencontrer ? N’hésitez pas
          !
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8">
          <input
            type="text"
            className={clsx([
              'p-2 mb-px border-b border-b-primary bg-transparent',
              'focus:border-b-2 focus:outline-none focus:mb-0'
            ])}
            onChange={onChange(setName)}
            value={name}
            placeholder="Nom"
            required
          />

          <input
            type="email"
            className={clsx([
              'p-2 mb-px border-b border-b-primary bg-transparent',
              'focus:border-b-2 focus:outline-none focus:mb-0'
            ])}
            onChange={onChange(setMail)}
            value={mail}
            placeholder="Email"
            required
          />

          <textarea
            className={clsx([
              'p-2 mb-px border-b border-b-primary bg-transparent',
              'focus:border-b-2 focus:outline-none focus:mb-0'
            ])}
            onChange={onChange(setMessage)}
            value={message}
            placeholder="Message"
            rows={5}
            required
          />

          <button
            type="submit"
            className="self-end text-xl font-mono border-b border-primary mt-12"
          >
            {buttonText}
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
