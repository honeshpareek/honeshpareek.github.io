import React from 'react';
import "./style.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const images = [
  { id: 1, src: "https://i.ibb.co/pdH9BW6/bnw.jpg" },
  { id: 21, src: "https://i.ibb.co/w6MYzJf/IMG-20230914-210003716.jpg" },
  { id: 3, src: "https://i.ibb.co/cJ9CSWf/bnw3.jpg" },
  { id: 4, src: "https://i.ibb.co/7WHNcvw/bnw4.jpg" },
  { id: 6, src: "https://i.ibb.co/jzdXQWd/bnw6.jpg" },
  { id: 7, src: "https://i.ibb.co/q9Qccxj/bnw7.jpg" },
  { id: 22, src: "https://i.ibb.co/cCvZT4W/1970-01-20-042826827.jpg" },
  { id: 8, src: "https://i.ibb.co/nk7SY4G/bnw8.jpg" },
  { id: 9, src: "https://i.ibb.co/TKXMf2b/bnw9.jpg" },
  { id: 10, src: 'https://honeshraipareek.github.io/photography/1970-01-20-041840867.jpg' },
  { id: 11, src: 'https://honeshraipareek.github.io/photography/Jaipur.jpg' },
  { id: 12, src: 'https://honeshraipareek.github.io/photography/taara.jpg' },
  { id: 13, src: 'https://i.ibb.co/yfyMfrH/IMG-20221228-165115904.jpg'},
  { id: 14, src: "https://i.ibb.co/px1yCS0/IMG-20221114-103720205.jpg" },
  { id: 15, src: "https://i.ibb.co/dKvkx60/IMG-20221201-192257523.jpg" },
  { id: 2, src: "https://i.ibb.co/Hrpwwq5/bnw2.jpg" },
  { id: 16, src: "https://i.ibb.co/QnrGpH7/IMG-20221204-162349978.jpg" },
  { id: 17, src: "https://i.ibb.co/bzSwgqc/IMG-20221216-201908626.jpg" },
  { id: 18, src: "https://i.ibb.co/yphwWmD/IMG-20221216-224232808.jpg" },
  { id: 19, src: "https://i.ibb.co/g4Zs2Cr/IMG-20221224-185926667.jpg" },
  { id: 20, src: "https://i.ibb.co/tPPSBp0/IMG-20221225-113935769.jpg" },
  { id: 5, src: "https://i.ibb.co/BsYNrLk/bnw5.jpg" },
  { id: 23, src: "https://i.ibb.co/PDx1BH0/2021-12-18-114009000.jpg" },
  { id: 24, src: "https://i.ibb.co/1sjypPf/IMG-20220924-061310127.jpg" },
  { id: 25, src: "https://i.ibb.co/GVHt6dh/IMG-20221101-173625318.jpg" },
  { id: 26, src: "https://i.ibb.co/3rnwM3x/IMG-20221112-221452495.jpg" },
  { id: 27, src: 'https://i.ibb.co/gD3qKNs/budda2.jpg'},
  { id: 28, src: "https://i.ibb.co/SrcTLKJ/IMG-20201219-170515766-HDR.jpg"},
  { id: 29, src: "https://i.ibb.co/db8qf8J/2022-04-20-040658000.jpg"},
  
  // Add more images with varied widths as needed
];

class Gallery extends React.Component {

  constructor(props) {
    super(props);

    // Bind the context menu event listener to the component.
    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the default context menu from appearing
  }

  componentWillUnmount() {
    // Make sure to remove the event listener when the component unmounts to avoid memory leaks
    document.removeEventListener('contextmenu', this.handleContextMenu);
  }

  
render() {
  return (
    // <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //   {images.map((image) => (
    //     <div key={image.id}>
    //       <img src={image.src} alt={`Image ${image.id}`} className="w-full h-auto" style={{ width: image.width }} />
    //     </div>
    //   ))}
    // </div>

    
  <div className='w-screen'> 
   <div className="my-8 mb-8">
          <div lg="10" className='pl-12'>
            <h1 className="display-4  mb-4"> Gallery 📸</h1>{" "}
          </div>
  </div>
  
   <div className='wrapper m-16 max-sm:m-6'>
       {images.map((image) => (
         <div className='py-3' key={image.id}>
           <LazyLoadImage src={image.src} alt={`Image ${image.id}`} className="w-full h-auto rounded-2xl max-sm:rounded-md" />
         </div>
       ))}
    </div>
    </div>
  );
       };
};

export default Gallery;
