export default function loginPage(){
    return (
    
        <div className="flex justify-center flex-col items-center mt-20">
            <div className="">
                <h1 className="py-5 text-2xl font-bold">Connexion</h1>
            </div>
            <form action="" className="flex justify-center">
                <div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label font-bold">Email</label>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs py-4">
                        <label className="label font-bold">Password</label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <button className="btn btn-primary w-full py-4"> Se connecter</button>
                    
                    {/* <a href="#" className="text-small">Mot de passe oublié?</a> */}
                </div>
            </form>
        </div>

        
    );
}