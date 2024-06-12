import 'bootstrap/dist/css/bootstrap.min.css';

function Subscription() {
  return (
//    <section>
//     <div className="flex bg-blue-600 w-[300px] h-[300px] justify-center ">
//         <div className="">
//           <div className="">
//             <h4 className="text-3xl">Enterprise</h4>
//           </div>
//           <div className="bg-black text-white">
//             <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
//             <ul className="list-unstyled mt-3 mb-4">
//               <li>30 users included</li>
//               <li>15 GB of storage</li>
//               <li>Phone and email support</li>
//               <li>Help center access</li>
//             </ul>
//             <button type="button" className="bg-blue-600">Contact us</button>
//           </div>
//         </div>
//         </div>
//    </section>
<section className='flex  flex-col gap-3 h-[100vh] mx-5 my-5 justify-center items-center bg-black text-white'  >

    <h1 className='font-bold text-2xl'>Pricing </h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptatum sint rerum temporibus tempore, cumque corrupti optio, nemo magni reiciendis ab enim! Id laudantium incidunt, eaque eius consectetur inventore. Voluptatibus.</p>


<div className='flex gap-8 mx-5 my-5 justify-center items-center'>
    
    <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 ml-8 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
    
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 ml-8  fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
    
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 ml-8 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
    </div>
</section>
     
  )
}

export default Subscription