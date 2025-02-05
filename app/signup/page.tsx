"use client";
import axios from "axios";
import { ChangeEventHandler, useState } from "react";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-4 mb-6">
                        <div className="text-3xl text-white font-extrabold text-center">
                            Sign up
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput onChange={(e) => {
                            setName(e.target.value);
                        }} label="First name" placeholder="zest" />
                         <LabelledInput onChange={(e) => {
                            setfirstName(e.target.value);
                        }} label="Last name" placeholder="ware" />
                         <LabelledInput onChange={(e) => {
                            setlastName(e.target.value);
                        }} label="Username" placeholder="zestware@gmail.com" />
                        <LabelledInput onChange={(e) => {
                            setPassword(e.target.value)
                        }} label="Password" type={"password"} placeholder="password" />
                        <button onClick={async () => {
                            const response = await axios.post("http://localhost:3000/api/user", {
                                name,
                                password,
                                firstName,
                                lastName
                            });
                           
                        }} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm text-white font-semibold">
                {label}
            </label>
            <input
                onChange={onChange}
                type={type || "text"}
                className="bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}