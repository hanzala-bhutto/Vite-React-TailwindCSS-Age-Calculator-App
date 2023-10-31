
const AgeForm =  () => {
    return (
        <>
            <section className="flex flex-col gap-6 md:gap-2 p-6 md:p-14 rounded-2xl rounded-br-12xl md:rounded-br-24xl bg-white">
                <form className="flex flex-row gap-6 md:mr-40">
                    <div>
                        <div>
                            <label className=" text-smokeGrey font-bold">DAY</label>
                            <p></p>
                        </div>
                        <input type="number" className="w-20 md:w-40 text-2xl md:text-3xl font-bold p-2 border-2 rounded-md" placeholder="DD" required/>
                    </div>
                    <div>
                        <div>
                            <label className=" text-smokeGrey font-bold">MONTH</label>
                            <p></p>
                        </div>
                        <input type="number" className="w-20 md:w-40 text-2xl md:text-3xl font-bold p-2 border-2 rounded-md" placeholder="MM" required/>
                    </div>
                    <div>
                        <div>
                            <label className=" text-smokeGrey font-bold">YEAR</label>
                            <p></p>
                        </div>
                        <input type="number" className="w-20 md:w-40 text-2xl md:text-3xl font-bold p-2 border-2 rounded-md" placeholder="YYYY" required/>
                    </div>
                </form>
                {/* <div className="flex flex-row items-center md:justify-end">
                    <div className="flex-1 border-b-2 border-solid border-litGray"></div>
                    <img  className="bg-purple rounded-full p-4 md:p-6 self-center before:border-b-2" src="./images/icon-arrow.svg" alt="arrow"/>
                </div> */}
<div className="flex flex-col items-center md:flex-row md:items-center md:justify-end">
  <div className="flex-1 border-b-2 border-solid border-litGray"></div>
  <img className="bg-purple rounded-full p-4 md:p-6 self-center before:border-b-2 mt-2 md:mt-0" src="./images/icon-arrow.svg" alt="arrow" />
</div>
                <div className=" italic">
                    <p className="text-6xl md:text-7xl font-bold text-offBlack"><span className="text-6xl md:text-7xl font-bold text-purple">--</span> years</p>
                    <p className="text-6xl md:text-7xl font-bold text-offBlack"><span className="text-6xl md:text-7xl font-bold text-purple">--</span> months</p>
                    <p className="text-6xl md:text-7xl font-bold text-offBlack"><span className="text-6xl md:text-7xl font-bold text-purple">--</span> days</p>
                </div>
            </section>
        </>
    )
}

export default AgeForm;