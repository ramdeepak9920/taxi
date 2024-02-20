import React from "react";
import "../App.css";

const SignIn = () => {
  return (
    <>
      <div className="p-2 container mx-auto wrapper flex items-center justify-center grid grid-cols-1 md:grid-cols-2 md:gap-3 place-items-center">
        <div className="card sm:w-2/3 ">
          <h1 className="text-3xl my-3">What's your phone number?</h1>
          <div className="inner-wrapper flex my-3 ">
            <input
              type="text"
              className="p-2 input-box rounded-l-md flex-1 "
              placeholder="mobile no"
            ></input>
            <button className="bg-black p-1 text-white rounded-r-md">
              Continue
            </button>
          </div>

          <div className="or flex items-center my-3">
            <div className="line flex-1 bg-neutral-300"></div>
            <div className="or-text">or</div>
            <div className="line flex-1 bg-neutral-300"></div>
          </div>

          {/* <div className="inner-text">
            <p>
              By proceeding, you consent to get calls, WhatsApp or SMS messages,
              including by automated means, from Uber and its affiliates to the
              number provided.
            </p>
          </div> */}

          <div className="accounts-section">
               <div className="button flex justify-center p-3 my-2 rounded-md">
                   <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="w-6">
                    
                    </img>                
                      <h3>Continue with Google</h3>
               </div>

               <div className="button flex justify-center p-3 my-2 rounded-md">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png" className="w-6 mx-1">
                    
                    </img>                
                      <h3>Continue with Facebook</h3>
               </div>

          </div>
        </div>

        <div className="image">
          <img src="https://cdn.dribbble.com/users/5112840/screenshots/18309779/media/0e25205a743b03bcd3db3c1927d4ddfe.gif" alt="image" className="rounded-md"></img>
        </div>
      </div>
    </>
  );
};

export default SignIn;
