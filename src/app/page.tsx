"use client"
import {useContext} from "react";
import {GlobalContext} from "@/context/GlobalContext";

export default function Home() {
    // @ts-ignore
    const {open} = useContext(GlobalContext)

    return (
        <main className={`${open ? 'ml-[375px]' : 'ml-32'} bg-white rounded-[10px] mr-6`}>

            <div className="pt-8 pb-5">

                <h1 className="font-semibold text-2xl ml-8">DashBoard</h1>

            </div>


        </main>
    )
}
