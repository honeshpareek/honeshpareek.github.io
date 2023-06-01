import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { omar } from "../../content_option";
import React, { useEffect, useState } from "react";


export const Omar = () => {

  return (
    <div className="">
        <div className="container px-8 py-6">
          <h1 className="text-6xl font-bold">Omar - Music app design</h1>
        </div>

      <main className=" py-8">
      <section className="mb-5 px-8">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-300 font-bold py-1 px-4">UI/UX</li>
            <li className="rounded-2xl bg-slate-300 font-bold py-1 px-4">Research</li>
            <li className="rounded-2xl bg-slate-300 font-bold py-1 px-4">User Persona</li>
          </ul>
        </section>

        <section className="mb-8 px-8">
          <h2 className="text-lg font-bold mb-4">Tools</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Figma</li>
          </ul>
        </section>
        <section className="mb-8 px-8">
          <h2 className="text-lg font-bold mb-4">Project Overview</h2>
          <p className="text-lg px-12 mt-5">
           I have worked on building a new music app where the affordance of the app is that it allows you to sync your other music streaming accounts and playlists hence, collaborative playlists.
          </p>
        </section>

        <section className="my-5">
          <div className=" w-screen flex-col">
          {omar.map((omar, i) => {
            return (
                <img className="my-4" key={i} src={omar.img} alt="" />
            );
          })}
          </div>
        </section>

        <section className="w-full flex justify-center">
          <a target="_blank" href="https://www.figma.com/proto/zxoQRCUdMbbmiOj8uhKZI1/Music-App-UI?page-id=0%3A1&type=design&node-id=78-471&viewport=155%2C1382%2C0.08&scaling=scale-down&starting-point-node-id=78%3A471" className="rounded-full bg-blue-950 text-white text-xl font-black flex px-4 py-1">Figma Prototype</a>
        </section>  
       
      </main>

      <footer className="">
        <div className="container px-8  py-6 text-center">
          <p className="text-sm">&copy; 2023 Honesh Rai Pareek. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

