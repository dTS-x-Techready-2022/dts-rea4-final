import Container from 'react-bootstrap/Container';

function Footer() {


   return (
      <>
         <Container fluid className='bg-light' style={{ bottom: 0, position: 'absolute' }}>
            <div className="container-fluid py-4 px-sm-3 px-md-5">
               <p className="m-0 text-center">
                  <a style={{ fontWeight: 800 }}><span style={{ color: 'red' }}>INDO</span><span className="text-black">NEWS </span></a>
                  All Rights Reserved. Created By <a className="font-weight-bold" target="_blank" rel="nofollow noopener" href="https://github.com/rendyproklamanta/DTS4C-10-Final">REA4C-10</a>
               </p>
            </div>
         </Container>
      </>
   );
}

export default Footer;