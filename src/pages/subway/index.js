import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { sub } from "../../content_option";
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Sub = () => {
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
            <li className="rounded-2xl bg-yellow-500 font-bold py-1 px-4">Packaging</li>
            <li className="rounded-2xl bg-yellow-500 font-bold py-1 px-4">Research</li>
            <li className="rounded-2xl bg-yellow-500 font-bold py-1 px-4">Package Design</li>
            <li className="rounded-2xl bg-yellow-500 font-bold py-1 px-4">Sustainability</li>
          </ul>
        </section>

        <section className="mb-8 px-8">
          <h2 className="text-lg font-bold mb-4">Tools</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Illustrator</li>
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Photoshop</li>
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Photography</li>
          </ul>
        </section>
        <section className="mb-12 px-8">
          <h2 className="text-lg font-bold mb-4">Project Overview</h2>
          <p className="text-lg px-12 mt-5">
           The project brief stated that we were supposed to take up a brand, research in-depth about packaging trends and identify 
           a problem with their current packaging and resolve it. For the same, I have worked on the brand "Subway"
          </p>
        </section>

        <section className="my-5">
          <div className="flex-col">
          {sub.map((salus, i) => {
            return (
                <LazyLoadImage className="my-4" key={i} src={salus.img} alt="" />
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

