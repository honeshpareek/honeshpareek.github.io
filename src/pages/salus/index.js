import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { salus } from "../../content_option";
import React, { useEffect, useState } from "react";


export const Salus = () => {
  return (
  <HelmetProvider>
    <div className="">
    <Helmet>
          <meta charSet="utf-8" />
          <title> Salus </title>
          <meta name="description" content="Kal baat krte hai" />
      </Helmet>
        <div className="container px-8 py-6">
          <h1 className="text-4xl font-bold">SALUS - AI enabled driving system</h1>
        </div>

      <main className=" py-8">
      <section className="mb-5 px-8">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-green-800 font-bold py-1 px-4">User Interface</li>
            <li className="rounded-2xl bg-green-800 font-bold py-1 px-4">Research</li>
            <li className="rounded-2xl bg-green-800 font-bold py-1 px-4">User Experience</li>
            <li className="rounded-2xl bg-green-800 font-bold py-1 px-4">Artificial Intelligence</li>
          </ul>
        </section>

        <section className="mb-8 px-8">
          <h2 className="text-lg font-bold mb-4">Tools</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Figma</li>
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Illustrator</li>
          </ul>
        </section>
        <section className="mb-12 px-8">
          <h2 className="text-lg font-bold mb-4">Project Overview</h2>
          <p className="">
           AI is taking over the world, and hence I looked at current situations of Automobile Industry in the Indian context, identified a few problems that could be 
           solved with AI and therefore I designed 'Salus'.
          </p>
        </section>

        <section className="my-5">
          <div className="flex-col">
          {salus.map((salus, i) => {
            return (
                <img className="my-4" key={i} src={salus.img} alt="" />
            );
          })}
          </div>
        </section>

       
      </main>

      <footer className="">
        <div className="container px-8 py-6 text-center">
          <p className="text-sm">&copy; 2023 Honesh Rai Pareek. All rights reserved.</p>
        </div>
      </footer>
    </div>
 </HelmetProvider>
  );
};

