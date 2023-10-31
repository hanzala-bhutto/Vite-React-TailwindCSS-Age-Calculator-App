import { useState } from "react";
import moment from 'moment';

const AgeForm =  () => {

    const [day, setDay] = useState<string>('');
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [error, setError] = useState({
        day: false,
        month: false,
        year: false
    });
    const [formError, setFormError] = useState({
        day: false,
        month: false,
        year: false
    });

    const [age, setAge] = useState({
        years: 0,
        months: 0,
        days: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target} = e;

        const {name, value} = target;
        const valueInt = parseInt(value);
        console.log(name, value);
        if (name=='day'){
            if (valueInt<1 || valueInt>31){
                setError({...error, day: true});
            }
            else{
                setError({...error, day: false});
            }
            setDay(value);
        }
        else if (name=='month'){
            if (valueInt<1 || valueInt>12){
                setError({...error, month: true});
            }
            else{
                setError({...error, month: false});
            }
            setMonth(value);
        }
        else{
            if (valueInt<1900 || valueInt>2022){
                setError({...error, year: true});
            }
            else{
                setError({...error, year: false});
            }
            setYear(value);
        }
    }

    const handleSubmit = () => {
        console.log(day,month,year);
        console.log(formError);
        if (day=='' || month=='' || year==''){
            setFormError({...formError, day: day == '', month: month == '', year: year == ''});
            // day == ''? setFormError({...formError, day: true}): setFormError({...formError, day: false});
            // month == ''?setFormError({...formError, month: true}): setFormError({...formError, month: false});
            // year == ''?setFormError({...formError, year: true}): setFormError({...formError, year: false});

            console.log(formError);
            return;
        }
        else{
            setFormError({...formError, day: false, month: false, year: false});
            
            if (error.day || error.month || error.year){
                return;
            }
            else{
                const date = moment(`${year}-${month}-${day}`);
                const now = moment();
                const diff = moment.duration(now.diff(date));
                const years = diff.years();
                const months = diff.months();
                const days = diff.days();
                setAge({years, months, days});
                console.log(years,months,days);
            }
        }

    }

    return (
        <>
            <section className="flex flex-col gap-6 md:gap-2 p-6 md:p-14 rounded-2xl rounded-br-12xl md:rounded-br-24xl bg-white">
                <form className="flex flex-row gap-4 md:gap-6 md:mr-40">
                    <div>
                        <div>
                            <label className={`text-smokeGrey font-bold ${error.day?'text-litRed':''}`}>DAY</label>
                        </div>
                        <input onChange={handleChange} name="day" value={day} type="number" className={`w-20 md:w-40 text-2xl md:text-3xl font-bold p-2 border-2 rounded-md ${error.day?'focus:outline-none focus:border-litRed text-litRed border-litRed':''}`} placeholder="DD" required/>
                        <p className="text-litRed">{error.day?'valid day':''}</p>
                        <p className="text-litRed">{(formError.day && !day.length)?'field required':''}</p>
                    </div>
                    <div>
                        <div>
                            <label className={`text-smokeGrey font-bold ${error.month?'text-litRed':''}`}>MONTH</label>
                        </div>
                        <input onChange={handleChange} name="month" value={month} type="number" className={`w-20 md:w-40 text-2xl md:text-3xl font-bold p-2 border-2 rounded-md ${error.month?'focus:outline-none focus:border-litRed text-litRed border-litRed':''}`} placeholder="MM" required/>
                        <p className="text-litRed">{error.month?'valid month':''}</p>
                        <p className="text-litRed">{(formError.month && !month.length)?'field required':''}</p>
                    </div>
                    <div>
                        <div>
                            <label className={`text-smokeGrey font-bold ${error.year?'text-litRed':''}`}>YEAR</label>
                        </div>
                        <input onChange={handleChange} name="year" value={year} type="number" className={`w-20 md:w-40 text-2xl md:text-3xl font-bold p-2 border-2 rounded-md ${error.year?'focus:outline-none focus:border-litRed text-litRed border-litRed':''}`} placeholder="YYYY" required/>
                        <p className="text-litRed">{error.year?'valid past year':''}</p>
                        <p className="text-litRed">{(formError.year && !year.length) ?'field required':''}</p>
                    </div>
                </form>
                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-end">
                    <div className="flex-1 border-b-2 border-solid border-litGray"></div>
                    <img onClick={handleSubmit} className="bg-purple rounded-full p-4 md:p-6 self-center before:border-b-2 mt-2 md:mt-0" src="./images/icon-arrow.svg" alt="arrow" />
                </div>
                <div className=" italic">
                    <p className="text-6xl md:text-7xl font-bold text-offBlack"><span className="text-6xl md:text-7xl font-bold text-purple">{age.years?age.years:'--'}</span> years</p>
                    <p className="text-6xl md:text-7xl font-bold text-offBlack"><span className="text-6xl md:text-7xl font-bold text-purple">{age.months?age.months:'--'}</span> months</p>
                    <p className="text-6xl md:text-7xl font-bold text-offBlack"><span className="text-6xl md:text-7xl font-bold text-purple">{age.days?age.days:'--'}</span> days</p>
                </div>
            </section>
        </>
    )
}

export default AgeForm;