"use client"
import {useContext, useRef, useState} from "react";
import {GlobalContext} from "@/context/GlobalContext";
import {useReactToPrint} from "react-to-print";
import {BsDownload} from "react-icons/bs";

const Page = () => {
    const componentRef = useRef(null);
    // @ts-ignore
    const {open} = useContext(GlobalContext)
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const data = [
        {
            id: 1,
            product: 'Falcon8X TBA/LTI',
            description: 'Private jet',
            reservation: 'R2390',
            trip: 'T2390',
            price: '11.500.000'
        },
        {
            id: 2,
            product: 'Champagne TC',
            description: 'Added after reservation',
            reservation: 'R2390',
            trip: 'T2390',
            price: '4.900.900'
        },
        {
            id: 3,
            product: 'Coca-Cola 20oz Can',
            description: 'Added after reservation',
            reservation: 'R2390',
            trip: 'T2390',
            price: '150.00'
        },
    ]
    return (
        <main className={`${open ? 'ml-[375px]' : 'ml-32'} bg-white rounded-[10px] mr-6`}>
            <div className="p-2 w-full">
                <button
                    className="flex items-center p-2 rounded-lg bg-teal-500 text-white capitalize"
                    onClick={() => handlePrint()}>
                    <BsDownload className="mr-2" color="#fff" />
                    download
                </button>
            </div>
            <div className="pt-8 pb-5 invoice" ref={componentRef}>
                <div className="flex flex-wrap gap-y-3 gap-x-2 justify-between items-center px-9">
                    <div className="">
                        <p className="text-[26px] font-semibold text-secondary not-italic">
                            Invoice No #
                            <span className={'text-primary font-medium'}>I909112</span>
                        </p>
                        <p className="text-xl font-medium text-secondary not-italic">
                            Date : <span className={'text-primary'}>07/09/2022</span>
                        </p>
                    </div>
                    <div className="">
                        <div className="text-[40px] text-[#00000080] font-medium">Logo</div>
                    </div>
                    <div className="lg:text-right text-primary text-base font-normal">
                        <p>1474 Avenue Kwame</p>
                        <p>NKRUMAH 10 BP 13395</p>
                        <p>10 Ouagadougou, Burkina Faso</p>
                        <p>finance@lizetransport.com</p>
                        <p>+1 (226) 50 272383</p>
                    </div>
                </div>

                <div className="mt-8 mb-11 border border-[#E7ECF3]">
                </div>

                <div className="px-9">
                    <h5 className={'text-secondary text-medium font-semibold not-italic mb-5'}>Invoiced To:</h5>

                    <div className="flex flex-wrap gap-y-3 gap-x-2 justify-between items-center">
                        <div className="">
                            <p className='text-primary text-base font-normal'>John Doe</p>
                            <p className='text-primary text-base font-normal'>Lize Transport Organization</p>
                            <p className='text-primary text-base font-normal'>+1 (226) 50 272383</p>
                        </div>

                        <div className="md:text-right">
                            <p className='text-primary text-base font-normal'>1474 Avenue Kwame</p>
                            <p className='text-primary text-base font-normal'>NKRUMAH 10 BP 13395</p>
                            <p className='text-primary text-base font-normal'>10 Ouagadougou, Burkina Faso</p>
                            <p className='text-primary text-base font-normal'>finance@lizetransport.com</p>
                        </div>
                    </div>

                </div>

                <div className="overflow-x-auto">
                    <table className="table-auto min-w-full mt-8">
                        <thead>
                        <tr className={'text-secondary text-left text-base font-semibold not-italic border border-[#E7ECF3] border-l-0 border-r-0'}>
                            <th className={'w-[233px] flex items-center gap-x-1 py-5 pl-9'}>
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
                            </th>
                            <th className={'w-[233px] py-5'}>Description</th>
                            <th className={'w-[233px] py-5 flex items-center gap-x-1'}>
                                Reservation
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 5 10"
                                     fill="none">
                                    <path
                                        d="M2.29403 9.89201C2.31697 9.92534 2.34766 9.95259 2.38346 9.97142C2.41926 9.99025 2.45909 10.0001 2.49954 10.0001C2.53998 10.0001 2.57982 9.99025 2.61562 9.97142C2.65142 9.95259 2.68211 9.92534 2.70504 9.89201L4.95511 6.63981C4.98115 6.6023 4.99642 6.55836 4.99927 6.51277C5.00211 6.46719 4.99241 6.42169 4.97123 6.38123C4.95005 6.34077 4.91819 6.30689 4.87911 6.28328C4.84004 6.25967 4.79525 6.24722 4.7496 6.24729H0.249472C0.203932 6.24748 0.159304 6.26009 0.120389 6.28376C0.0814735 6.30743 0.0497425 6.34126 0.0286084 6.38163C0.00747426 6.422 -0.00226336 6.46736 0.000442712 6.51285C0.00314878 6.55834 0.0181961 6.60223 0.0439666 6.63981L2.29403 9.89201Z"
                                        fill="#3B3E44"/>
                                    <path
                                        d="M0.250151 3.75254H4.75028C4.79584 3.75239 4.8405 3.7398 4.87945 3.7161C4.9184 3.69241 4.95017 3.65851 4.97133 3.61807C4.9925 3.57762 5.00226 3.53215 4.99956 3.48656C4.99687 3.44097 4.98182 3.39698 4.95603 3.35932L2.70597 0.101312C2.61272 -0.0337705 2.38821 -0.0337705 2.29471 0.101312L0.0446447 3.35932C0.0186002 3.3969 0.00332707 3.44091 0.000484745 3.48658C-0.00235758 3.53225 0.00733961 3.57783 0.0285227 3.61836C0.0497058 3.65889 0.0815647 3.69283 0.120638 3.71648C0.159711 3.74014 0.204504 3.75261 0.250151 3.75254Z"
                                        fill="#3B3E44"/>
                                </svg>
                            </th>
                            <th className={'w-[233px] py-5'}>Trip</th>
                            <th className={'w-[233px] py-5'}>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((d, index) => (
                                <tr key={d.id}
                                    className={`text-primary text-small not-italic font-[400] ${index === data.length - 1 && 'border-b border-[#E7ECF3]'}`}>
                                    <td className={'py-5 pl-9'}>{d.product}</td>
                                    <td className={'py-5'}>{d.description}</td>
                                    <td className={'py-5'}>{d.reservation}</td>
                                    <td className={'py-5'}>{d.trip}</td>
                                    <td className={'py-5'}>{d.price}</td>
                                </tr>
                            ))
                        }

                        <tr>
                            <td colSpan={4}
                                className={'text-right text-secondary text-medium not-italic font-semibold pt-8 pr-[50px]'}>
                                Subtotal :
                            </td>
                            <td className={'text-primary text-medium not-italic font-medium pt-8'}>
                                16.550.000
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4}
                                className={'text-right text-secondary text-medium not-italic font-semibold pt-5 pb-8 pr-[50px]'}>
                                TVA :
                            </td>
                            <td className={'text-primary text-medium not-italic font-medium pt-5 pb-8'}>
                                2.800.000
                            </td>
                        </tr>
                        <tr className="border border-[#E7ECF3]">
                            <td colSpan={4}
                                className={'text-right text-[#383FE1] text-medium not-italic font-semibold py-5 pr-[50px]'}>
                                Total :
                            </td>
                            <td className={'text-[#383FE1] text-medium not-italic font-medium py-5'}>
                                2.800.000
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-5 font-normal text-base not-italic text-center text-primary">Name Of Company</div>
            </div>


        </main>
    );
};

export default Page;