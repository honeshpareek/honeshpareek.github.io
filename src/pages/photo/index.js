import React from 'react';
import "./style.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// https://i.ibb.co/9HBDxWjh/17-B6-FC43-4711-4-D76-8906-F141-F339141-D.jpg
// https://i.ibb.co/7dBd39sB/C0-C8-B4-FC-76-A2-43-A7-9-AC1-E0-C3-E6-B9-ECAC.jpg
// 
// 
// https://i.ibb.co/PLLLPJj/Full-Size-Render-VSCO.jpg
// https://i.ibb.co/b9K9QVw/IMG-2772.jpg
// 
// https://i.ibb.co/S4Z6cH3z/IMG-3086.jpg
// https://i.ibb.co/0RDnrYch/IMG-3234.jpg
// https://i.ibb.co/Mkvw7kXD/IMG-3281.jpg
// 
// 
// https://i.ibb.co/G4hSPMqN/IMG-3361.jpg
// 
// https://i.ibb.co/zWrdHN9f/IMG-3556.jpg
// https://i.ibb.co/BKFTLr6h/IMG-3604.jpg

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
  { id: 10, src: "https://i.ibb.co/gbtG3Wfs/IMG-2857.jpg" },
  { id: 11, src: 'https://honeshraipareek.github.io/photography/Jaipur.jpg' },
  { id: 12, src: 'https://honeshraipareek.github.io/photography/taara.jpg' },
  { id: 13, src: 'https://i.ibb.co/yfyMfrH/IMG-20221228-165115904.jpg'},
  { id: 14, src: "https://i.ibb.co/hbVhQn0/Full-Size-Render-VSCO-3.jpg" },
  { id: 15, src: "https://i.ibb.co/dKvkx60/IMG-20221201-192257523.jpg" },
  { id: 2, src: "https://i.ibb.co/Hrpwwq5/bnw2.jpg" },
  { id: 16, src: "https://i.ibb.co/QnrGpH7/IMG-20221204-162349978.jpg" },
  { id: 17, src: "https://i.ibb.co/bzSwgqc/IMG-20221216-201908626.jpg" },
  { id: 18, src: "https://i.ibb.co/7dBd39sB/C0-C8-B4-FC-76-A2-43-A7-9-AC1-E0-C3-E6-B9-ECAC.jpg" },
  { id: 19, src: "https://i.ibb.co/Mkvw7kXD/IMG-3281.jpg" },
  { id: 20, src: "https://i.ibb.co/tPPSBp0/IMG-20221225-113935769.jpg" },
  { id: 5, src: "https://i.ibb.co/prznk5G4/IMG-3340.jpg" },
  { id: 23, src: "https://i.ibb.co/N2ymjcKk/IMG-3471.jpg" },
  { id: 24, src: "https://i.ibb.co/1sjypPf/IMG-20220924-061310127.jpg" },
  { id: 25, src: "https://i.ibb.co/DP2jN4gp/IMG-3337.jpg" },
  { id: 26, src: "https://i.ibb.co/4wNRx8nS/Full-Size-Render-VSCO-2.jpg" },
  { id: 27, src: 'https://i.ibb.co/gD3qKNs/budda2.jpg'},
  { id: 28, src: "https://i.ibb.co/SrcTLKJ/IMG-20201219-170515766-HDR.jpg"},
  { id: 29, src: "https://i.ibb.co/db8qf8J/2022-04-20-040658000.jpg"},
  { id: 30, src: "https://i.ibb.co/B9Vj3HH/IMG-3433.jpg"},
  { id: 31, src: "https://i.ibb.co/zVPSbsZd/IMG-9053.jpg"},
  
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
