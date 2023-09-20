import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { dhun } from "../../content_option";
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Dhun = () => {
  return (
  <HelmetProvider>
    <div className="">
    <Helmet>
          <meta charSet="utf-8" />
          <title> Dhun </title>
          <meta name="description" content="Dhun ~ Music Concert Planner App" />
      </Helmet>
        <div className="container px-8 py-6">
          <h1 className="text-4xl font-bold">Dhun - Concert Planner App</h1>
        </div>

      <main className=" py-8">
      <section className="mb-5 px-8">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">User Interface</li>
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">User Centric</li>
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">User Experience</li>
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
          <p className="text-lg px-12 mt-5">
           The project briefed us about A Music Concert organising company who wanted an app with features like, creating and managing concerts, collaborating with the colleagues, getting Singer Popularity Index of the artists and Revenure prediction tool. It was a very quick project, with a timeling of 3 days hence it reflects a back-and-forth approach. I am stil building up on this project. 
          </p>
        </section>

        <section className="my-5">
          <div className="flex-col flex justify-center px-20">
          {dhun.map((dhun, i) => {
            return (
                <LazyLoadImage className="my-4" key={i} src={dhun.img} alt="" />
            );
          })}
          </div>
        </section>

        <section className="w-full flex justify-center">
          <a target="_blank" href="https://www.figma.com/file/TKleWFFrlPpsnWdAP3DZtG/Mock-Assignment?type=design&node-id=0%3A1&mode=design&t=eAtLRTu4B08McEwB-1" className="rounded-full bg-blue-950 text-white text-xl font-black flex px-4 py-1">Figma Prototype</a>
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

