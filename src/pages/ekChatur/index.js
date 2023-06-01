import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { ekchatur, ekchatur2 } from "../../content_option";
import React, { useEffect, useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/wi";
import Headermain from "../../header";

export const Ekchatur = () => {

  return (
    <div className="">
        <div className="container mx-auto py-6">
          <h1 className="text-4xl font-bold">THEKA - Local Liqour Shop Branding</h1>
        </div>

      <main className="container mx-auto py-8">
      <section className="mb-5">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-600 text-white font-bold py-1 px-4">Branding</li>
            <li className="rounded-2xl bg-slate-600 text-white font-bold py-1 px-4">Research</li>
            <li className="rounded-2xl bg-slate-600 text-white font-bold py-1 px-4">Brand Identity</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Tools</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Photoshop</li>
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Illustrator</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Project Overview</h2>
          <p className="text-lg px-12 mt-5">
           Typography when illustrated has given some really amazing results, that is what I have tried to explore here. I have tried to express the narrative of a very famous musical from the movie "Padosan", 'Ek Chatur Naar'.
          </p>
        </section>

        <section className="my-5">
          <div className="max-w-screen-2xl grid grid-cols-2 flex-col">
          {ekchatur.map((theka, i) => {
            return (
                <img className="my-4" key={i} src={theka.img} alt="" />
            );
          })}
          </div>
        </section>

        <section className="my-5 w-full">
          <p className="font-bold flex justify-center text-4xl max-sm:text-lg">MOCKUPS</p>
          {ekchatur2.map((list, i) => {
            return(
              <img className="my-4" key={i} src={list.img} alt="" />
            )
          })}
        </section>
        
           
      </main>

      <footer className="">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm">&copy; 2023 Honesh Rai Pareek. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

