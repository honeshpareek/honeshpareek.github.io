import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { ibm } from "../../content_option";
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Ibm = () => {
  return (
  <HelmetProvider>
    <div className="">
    <Helmet>
          <meta charSet="utf-8" />
          <title> IBM Design Challenge </title>
          <meta name="description" content="Kal baat krte hai" />
      </Helmet>
        <div className="container px-8 py-6">
          <h1 className="text-4xl font-bold">IBM ~ Design Challenege</h1>
        </div>

      <main className=" py-8">
      <section className="mb-5 px-8">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">Experience Design</li>
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">Research</li>
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">Visual Design</li>
          </ul>
        </section>

        <section className="mb-8 px-8">
          <h2 className="text-lg font-bold mb-4">Tools</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Figma</li>
          </ul>
        </section>
        <section className="mb-12 px-8">
          <h2 className="text-lg font-bold mb-4">Project Overview</h2>
          <p className="text-lg px-12 mt-5">
           AI is taking over the world, and hence I looked at current situations of Automobile Industry in the Indian context, identified a few problems that could be 
           solved with AI and therefore I designed 'Salus'.
          </p>
        </section>

        <section className="my-5">
          <div className="flex-col">
          {ibm.map((ibm, i) => {
            return (
                <LazyLoadImage className="my-4" key={i} src={ibm.img} alt="" />
            );
          })}
          </div>
        </section>

        <section className="w-full flex justify-center">
          <a target="_blank" href="https://www.figma.com/file/u0GY7twPGsblizsBHFUnWL/Design-Challenge?type=design&node-id=11%3A1851&mode=design&t=tMqTciuir3wTJMJ1-1" className="rounded-full bg-blue-950 text-white text-xl font-black flex px-4 py-1">Figma Prototype</a>
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

