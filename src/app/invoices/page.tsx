"use client"
import {useContext} from "react";
import {GlobalContext} from "@/context/GlobalContext";
import Link from "next/link";

const page = () => {
    // @ts-ignore
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {open} = useContext(GlobalContext)
    return (
        <div className={`${open ? 'ml-[375px]' : 'ml-32'}`}>
            <div className="mb-8">
                <h1 className='text-secondary text-2xl font-semibold not-italic mb-1'>Invoices</h1>
                <p className={'text-primary'}>Invoices / New Invoice</p>
            </div>
            <div className="bg-white rounded-[10px] pl-8 pr-10 pt-11 pb-9 mr-6">
                <form className='flex flex-wrap items-stretch gap-y-8 justify-between'>
                    <div className="flex flex-col w-full lg:w-[596px]">
                        <label className='text-secondary text-medium font-semibold not-italic mb-4'
                               htmlFor="#selectClient">Select</label>
                        <select name="selectClient" id="selectClient" placeholder='Select client' aria-label="default"
                                className='px-5 py-4 border border-[#DCDCDC] rounded-[30px] outline-0 outline-[#DCDCDC] bg-down-arrow bg-no-repeat '
                                style={{backgroundPosition: 'right 0.75rem center'}}>
                            <option value="">Select Client</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                        </select>
                        {/*<input className='px-5 py-4 border border-[#DCDCDC] rounded-[30px] outline-0 outline-[#DCDCDC]' placeholder='Select client' type="text" id="#selectClient"/>*/}
                    </div>

                    <div className="flex flex-col w-full max-w-[300px] lg:w-[300px]">
                        <label className='text-secondary text-medium font-semibold not-italic mb-4'
                               htmlFor="#selectDate">Invoice Date</label>
                        <input className='px-5 py-4 border border-[#DCDCDC] rounded-[30px] outline-0 outline-[#DCDCDC]'
                               placeholder='Select Date' type="date" id="#selectDate"/>
                    </div>

                    <div className="flex flex-col">
                        <label className='text-secondary text-medium font-semibold not-italic mb-4'
                               htmlFor="#selectDate">Plane Image</label>
                        <div className="border border-dashed border-[primary]">
                            <div className="flex gap-x-1 justify-center items-center p-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M21.1544 15V19C21.1544 19.5304 20.9437 20.0391 20.5686 20.4142C20.1936 20.7893 19.6849 21 19.1544 21H5.15442C4.62399 21 4.11528 20.7893 3.74021 20.4142C3.36513 20.0391 3.15442 19.5304 3.15442 19V15"
                                        stroke="#72ADD7" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17.1544 8L12.1544 3L7.15442 8" stroke="#72ADD7" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M12.1544 3V15" stroke="#72ADD7" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                                <div>
                                    <p className='text-[#72ADD7] text-small font-medium'>Upload <br/>Plane Image</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full lg:w-64">
                        <label className='text-secondary text-medium font-semibold not-italic mb-4'
                               htmlFor="#trip">Trip</label>
                        <select
                            name="selectClient"
                            id="trip" placeholder='Select client'
                            className='px-5 py-4 border border-[#DCDCDC] rounded-[30px] outline-0 outline-[#DCDCDC] bg-down-arrow bg-no-repeat '
                            style={{backgroundPosition: 'right 0.75rem center'}}>
                            <option value="">Select Trip</option>
                            <option value="T2930">T2930</option>
                            <option value="T2940">T2940</option>
                            <option value="T2852">T2852</option>
                            <option value="T2955">T2955</option>
                            <option value="T2974">T2974</option>
                        </select>
                        {/*<input className='px-5 py-4 border border-[#DCDCDC] rounded-[30px] outline-0 outline-[#DCDCDC]' placeholder='Select client' type="text" id="#selectClient"/>*/}
                    </div>

                </form>
            </div>

            <div className="bg-white rounded-[10px] mr-6 mt-10">
                <div className="overflow-x-auto">
                    <table className="table-auto min-w-full mt-5">
                        <thead>
                            <tr className={'w-full text-secondary text-left text-base font-semibold not-italic border-b border-[#E7ECF3] border-l-0 border-r-0'}>
                            <th className={'w-3/12 pb-5 pl-[30px]'}>
                                <div className="flex items-center gap-x-1">
                                    Products Type
                                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 5 10"
                                         fill="none">
                                        <path
                                            d="M2.29403 9.89201C2.31697 9.92534 2.34766 9.95259 2.38346 9.97142C2.41926 9.99025 2.45909 10.0001 2.49954 10.0001C2.53998 10.0001 2.57982 9.99025 2.61562 9.97142C2.65142 9.95259 2.68211 9.92534 2.70504 9.89201L4.95511 6.63981C4.98115 6.6023 4.99642 6.55836 4.99927 6.51277C5.00211 6.46719 4.99241 6.42169 4.97123 6.38123C4.95005 6.34077 4.91819 6.30689 4.87911 6.28328C4.84004 6.25967 4.79525 6.24722 4.7496 6.24729H0.249472C0.203932 6.24748 0.159304 6.26009 0.120389 6.28376C0.0814735 6.30743 0.0497425 6.34126 0.0286084 6.38163C0.00747426 6.422 -0.00226336 6.46736 0.000442712 6.51285C0.00314878 6.55834 0.0181961 6.60223 0.0439666 6.63981L2.29403 9.89201Z"
                                            fill="#3B3E44"/>
                                        <path
                                            d="M0.250151 3.75254H4.75028C4.79584 3.75239 4.8405 3.7398 4.87945 3.7161C4.9184 3.69241 4.95017 3.65851 4.97133 3.61807C4.9925 3.57762 5.00226 3.53215 4.99956 3.48656C4.99687 3.44097 4.98182 3.39698 4.95603 3.35932L2.70597 0.101312C2.61272 -0.0337705 2.38821 -0.0337705 2.29471 0.101312L0.0446447 3.35932C0.0186002 3.3969 0.00332707 3.44091 0.000484745 3.48658C-0.00235758 3.53225 0.00733961 3.57783 0.0285227 3.61836C0.0497058 3.65889 0.0815647 3.69283 0.120638 3.71648C0.159711 3.74014 0.204504 3.75261 0.250151 3.75254Z"
                                            fill="#3B3E44"/>
                                    </svg>
                                </div>
                            </th>
                            <th className={'w-3/12 pb-5'}>
                                <div className="flex items-center gap-x-1">
                                    Products
                                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 5 10"
                                         fill="none">
                                        <path
                                            d="M2.29403 9.89201C2.31697 9.92534 2.34766 9.95259 2.38346 9.97142C2.41926 9.99025 2.45909 10.0001 2.49954 10.0001C2.53998 10.0001 2.57982 9.99025 2.61562 9.97142C2.65142 9.95259 2.68211 9.92534 2.70504 9.89201L4.95511 6.63981C4.98115 6.6023 4.99642 6.55836 4.99927 6.51277C5.00211 6.46719 4.99241 6.42169 4.97123 6.38123C4.95005 6.34077 4.91819 6.30689 4.87911 6.28328C4.84004 6.25967 4.79525 6.24722 4.7496 6.24729H0.249472C0.203932 6.24748 0.159304 6.26009 0.120389 6.28376C0.0814735 6.30743 0.0497425 6.34126 0.0286084 6.38163C0.00747426 6.422 -0.00226336 6.46736 0.000442712 6.51285C0.00314878 6.55834 0.0181961 6.60223 0.0439666 6.63981L2.29403 9.89201Z"
                                            fill="#3B3E44"/>
                                        <path
                                            d="M0.250151 3.75254H4.75028C4.79584 3.75239 4.8405 3.7398 4.87945 3.7161C4.9184 3.69241 4.95017 3.65851 4.97133 3.61807C4.9925 3.57762 5.00226 3.53215 4.99956 3.48656C4.99687 3.44097 4.98182 3.39698 4.95603 3.35932L2.70597 0.101312C2.61272 -0.0337705 2.38821 -0.0337705 2.29471 0.101312L0.0446447 3.35932C0.0186002 3.3969 0.00332707 3.44091 0.000484745 3.48658C-0.00235758 3.53225 0.00733961 3.57783 0.0285227 3.61836C0.0497058 3.65889 0.0815647 3.69283 0.120638 3.71648C0.159711 3.74014 0.204504 3.75261 0.250151 3.75254Z"
                                            fill="#3B3E44"/>
                                    </svg>
                                </div>
                            </th>
                            <th className={'w-4/12 pb-5 '}>
                                Description
                            </th>
                            <th className={'w-2/12 pb-5'}>Total</th>
                        </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td className="pl-[30px] pt-5">
                                    <select
                                        id="plane"
                                        className='px-5 py-5 border border-[#DCDCDC] rounded-[10px] w-[166px] h-[60px] outline-0 outline-[#DCDCDC] bg-down_arrow bg-no-repeat '
                                        style={{backgroundPosition: 'right 0.75rem center'}}
                                    >
                                        <option value="">Plane</option>
                                        <option value="halicopter">Halicopter</option>
                                        <option value="drinks">Drinks</option>
                                        <option value="flowers">Flowers</option>
                                        <option value="private jet">Private Jet</option>
                                        <option value="Airbus">Airbus</option>
                                    </select>
                                </td>
                                <td className="pt-5">
                                    <select
                                        id="products"
                                        className='px-5 py-5 border border-[#DCDCDC] rounded-[10px] w-[254px] h-[60px] outline-0 outline-[#DCDCDC] bg-down_arrow bg-no-repeat '
                                        style={{backgroundPosition: 'right 0.75rem center'}}
                                    >
                                        <option value="Falcon8X TBA/LTI">Falcon8X TBA/LTI</option>
                                        <option value="Falcon8X TBA/LTI">Falcon8X TBA/LTI</option>
                                        <option value="Falcon998X TBA/LTI">Falcon998X TBA/LTI</option>
                                        <option value="Falcon1428X TBA/LTI">Falcon1428X TBA/LTI</option>
                                        <option value="Falcon6558X TBA/LTI">Falcon6558X TBA/LTI</option>
                                    </select>
                                </td>
                                <td className="pt-5">
                                    <input
                                        type="text"
                                        placeholder="Description..."
                                        className='px-5 py-5 border border-[#DCDCDC] rounded-[10px] w-[389px] h-[60px] outline-0 outline-[#DCDCDC]'
                                    />
                                </td>
                                <td className="pt-5 mr-7 flex items-center gap-x-[14px]">
                                    <input
                                        type="text"
                                        placeholder="Price..."
                                        className='px-5 py-5 border border-[#DCDCDC] rounded-[10px] w-[155px] h-[60px] outline-0 outline-[#DCDCDC]'
                                    />

                                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"
                                         fill="none">
                                        <rect width="50" height="50" rx="10" fill="#F36A6A" fillOpacity="0.2"/>
                                        <path
                                            d="M36.4583 17H32.2917V14.5C32.2917 13.3969 31.3574 12.5 30.2083 12.5H19.7917C18.6426 12.5 17.7083 13.3969 17.7083 14.5V17H13.5417C12.9655 17 12.5 17.4469 12.5 18V19C12.5 19.1375 12.6172 19.25 12.7604 19.25H14.7266L15.5306 35.5938C15.5827 36.6594 16.5007 37.5 17.6107 37.5H32.3893C33.5026 37.5 34.4173 36.6625 34.4694 35.5938L35.2734 19.25H37.2396C37.3828 19.25 37.5 19.1375 37.5 19V18C37.5 17.4469 37.0345 17 36.4583 17ZM29.9479 17H20.0521V14.75H29.9479V17Z"
                                            fill="#F36A6A"/>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-[30px] pt-5">
                                    <select
                                        id="plane"
                                        className='px-5 py-5 border border-[#DCDCDC] rounded-[10px] w-[166px] h-[60px] outline-0 outline-[#DCDCDC] bg-down_arrow bg-no-repeat '
                                        style={{backgroundPosition: 'right 0.75rem center'}}
                                    >
                                        <option value="">Plane</option>
                                        <option value="halicopter">Halicopter</option>
                                        <option value="drinks">Drinks</option>
                                        <option value="flowers">Flowers</option>
                                        <option value="private jet">Private Jet</option>
                                        <option value="Airbus">Airbus</option>
                                    </select>
                                </td>
                                <td className="pt-5">
                                    <select
                                        id="products"
                                        className='px-5 py-5 border border-[#DCDCDC] rounded-[10px] w-[254px] h-[60px] outline-0 outline-[#DCDCDC] bg-down_arrow bg-no-repeat '
                                        style={{backgroundPosition: 'right 0.75rem center'}}
                                    >
                                        <option value="Falcon8X TBA/LTI">Falcon8X TBA/LTI</option>
                                        <option value="Falcon8X TBA/LTI">Falcon8X TBA/LTI</option>
                                        <option value="Falcon998X TBA/LTI">Falcon998X TBA/LTI</option>
                                        <option value="Falcon1428X TBA/LTI">Falcon1428X TBA/LTI</option>
                                        <option value="Falcon6558X TBA/LTI">Falcon6558X TBA/LTI</option>
                                    </select>
                                </td>
                                <td className="pt-5">
                                    <input
                                        type="text"
                                        placeholder="Description..."
                                        className='px-5 py-5 border border-[#DCDCDC] rounded-[10px] w-[389px] h-[60px] outline-0 outline-[#DCDCDC]'
                                    />
                                </td>
                                <td className="pt-5 mr-7 flex items-center gap-x-[14px]">
                                    <input
                                        type="text"
                                        placeholder="Price..."
                                        className='px-5 py-5 border border-[#DCDCDC] rounded-[10px] w-[155px] h-[60px] outline-0 outline-[#DCDCDC]'
                                    />

                                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"
                                         fill="none">
                                        <rect width="50" height="50" rx="10" fill="#F36A6A" fillOpacity="0.2"/>
                                        <path
                                            d="M36.4583 17H32.2917V14.5C32.2917 13.3969 31.3574 12.5 30.2083 12.5H19.7917C18.6426 12.5 17.7083 13.3969 17.7083 14.5V17H13.5417C12.9655 17 12.5 17.4469 12.5 18V19C12.5 19.1375 12.6172 19.25 12.7604 19.25H14.7266L15.5306 35.5938C15.5827 36.6594 16.5007 37.5 17.6107 37.5H32.3893C33.5026 37.5 34.4173 36.6625 34.4694 35.5938L35.2734 19.25H37.2396C37.3828 19.25 37.5 19.1375 37.5 19V18C37.5 17.4469 37.0345 17 36.4583 17ZM29.9479 17H20.0521V14.75H29.9479V17Z"
                                            fill="#F36A6A"/>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-[30px] pt-5">
                                    <select
                                        id="plane"
                                        className='px-5 py-5 border border-[#DCDCDC] rounded-[10px] w-[166px] h-[60px] outline-0 outline-[#DCDCDC] bg-down_arrow bg-no-repeat '
                                        style={{backgroundPosition: 'right 0.75rem center'}}
                                    >
                                        <option value="">Plane</option>
                                        <option value="halicopter">Halicopter</option>
                                        <option value="drinks">Drinks</option>
                                        <option value="flowers">Flowers</option>
                                        <option value="private jet">Private Jet</option>
                                        <option value="Airbus">Airbus</option>
                                    </select>
                                </td>
                                <td className="pt-5">
                                    <select
                                        id="products"
                                        className='px-5 py-5 border border-[#DCDCDC] rounded-[10px] w-[254px] h-[60px] outline-0 outline-[#DCDCDC] bg-down_arrow bg-no-repeat '
                                        style={{backgroundPosition: 'right 0.75rem center'}}
                                    >
                                        <option value="Falcon8X TBA/LTI">Falcon8X TBA/LTI</option>
                                        <option value="Falcon8X TBA/LTI">Falcon8X TBA/LTI</option>
                                        <option value="Falcon998X TBA/LTI">Falcon998X TBA/LTI</option>
                                        <option value="Falcon1428X TBA/LTI">Falcon1428X TBA/LTI</option>
                                        <option value="Falcon6558X TBA/LTI">Falcon6558X TBA/LTI</option>
                                    </select>
                                </td>
                                <td className="pt-5">
                                    <input
                                        type="text"
                                        placeholder="Description..."
                                        className='px-5 py-5 border border-[#DCDCDC] rounded-[10px] w-[389px] h-[60px] outline-0 outline-[#DCDCDC]'
                                    />
                                </td>
                                <td className="pt-5 mr-7 flex items-center gap-x-[14px]">
                                    <input
                                        type="text"
                                        placeholder="Price..."
                                        className='px-5 py-5 border border-[#DCDCDC] rounded-[10px] w-[155px] h-[60px] outline-0 outline-[#DCDCDC]'
                                    />

                                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"
                                         fill="none">
                                        <rect width="50" height="50" rx="10" fill="#F36A6A" fillOpacity="0.2"/>
                                        <path
                                            d="M36.4583 17H32.2917V14.5C32.2917 13.3969 31.3574 12.5 30.2083 12.5H19.7917C18.6426 12.5 17.7083 13.3969 17.7083 14.5V17H13.5417C12.9655 17 12.5 17.4469 12.5 18V19C12.5 19.1375 12.6172 19.25 12.7604 19.25H14.7266L15.5306 35.5938C15.5827 36.6594 16.5007 37.5 17.6107 37.5H32.3893C33.5026 37.5 34.4173 36.6625 34.4694 35.5938L35.2734 19.25H37.2396C37.3828 19.25 37.5 19.1375 37.5 19V18C37.5 17.4469 37.0345 17 36.4583 17ZM29.9479 17H20.0521V14.75H29.9479V17Z"
                                            fill="#F36A6A"/>
                                    </svg>
                                </td>
                            </tr>

                        <tr>
                            <td className="py-5 pl-[30px]" colSpan={4}>
                                <button className="text-[#383FE1] text-medium font-medium not-italic">+ Add Product
                                </button>
                            </td>
                        </tr>

                        <tr className='border-t border-[#E7ECF3]'>
                            <td colSpan={3}
                                className={'text-right text-secondary text-medium not-italic font-semibold pt-[30px] pr-[50px]'}>
                                Subtotal :
                            </td>
                            <td className={'text-primary text-medium not-italic font-medium pt-[30px]'}>
                                34.500.000
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={3}
                                className={'text-right text-secondary text-medium not-italic font-semibold pt-5 pb-[30px] pr-[50px]'}>
                                TVA :
                            </td>
                            <td className={'text-primary text-medium not-italic font-medium pt-5 pb-[30px]'}>
                                2.800.000
                            </td>
                        </tr>
                        <tr className="border border-[#E7ECF3]">
                            <td colSpan={3}
                                className={'pt-5 pb-9 pr-[50px] pl-[30px]'}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-x-[30px]">
                                        <button className="text-white text-medium font-semibold not-italic bg-[#383FE1] px-[48px] py-[17px] rounded-[30px]">Save</button>
                                        <button className="text-primary text-medium border border-primary border-solid px-[38px] py-[17px] font-semibold not-italic bd-[#383FE1] rounded-[30px]">Cancel</button>
                                        <button className="text-white text-medium font-semibold not-italic px-[43px] py-[17px] bg-[#383FE1] rounded-[30px]">
                                            <Link href={"/invoices/download"}>Download Invoice</Link>
                                        </button>
                                    </div>
                                    <span className="text-[#383FE1] text-medium not-italic font-semibold">Total :</span>
                                </div>
                            </td>
                            <td className={'text-[#383FE1] text-medium not-italic font-medium pt-5 pb-9'}>
                                37.350.000
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default page;