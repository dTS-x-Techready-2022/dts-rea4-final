import Container from 'react-bootstrap/Container';

function Footer() {


   return (
      <>
         <Container fluid className='bg-light'>
            <div class="container-fluid py-4 px-sm-3 px-md-5">
                 <p class="m-0 text-center">
                    <a style={{ fontWeight: 800 }}><span style={{ color: 'red' }}>INDO</span><span className="text-black">NEWS </span></a> 
                    All Rights Reserved. Designed by <a class="font-weight-bold" target="_blank" rel="nofollow noopener" href="//htmlcodex.com">HTML Codex</a>
                </p>
            </div>
         </Container>
      </>
   );
}   

export default Footer;