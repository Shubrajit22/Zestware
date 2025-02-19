"use client";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");  // ✅ State for error message

    const handleSignup = async () => {
        try {
            setError("");  // Clear previous errors
            const response = await axios.post("http://localhost:3000/api/user", {
                username,
                email,
                password,
                firstname: firstName,
                lastname: lastName
            });

            console.log(response.data);
            alert("Signup successful!");  // Show success message

        } catch {
            console.log("Error from Signup")
        }
        
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-900">
            <div className="max-w-lg w-full p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h2>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}  {/* ✅ Show error message */}
                <div className="space-y-4">
                    <LabelledInput onChange={(e) => setFirstName(e.target.value)} label="First name" placeholder="Zestwear" />
                    <LabelledInput onChange={(e) => setLastName(e.target.value)} label="Last name" placeholder="Zestwear" />
                    <LabelledInput onChange={(e) => setUsername(e.target.value)} label="Username" placeholder="Zestwear" />
                    <LabelledInput onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="Zestwear@gmail.com" type="email" />
                    <LabelledInput onChange={(e) => setPassword(e.target.value)} label="Password" type="password" placeholder="••••••••" />
                    <button 
                        onClick={handleSignup} 
                        type="button" 
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition"
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
    return (
        <div>
            <label className="block text-sm font-semibold text-white mb-1">
                {label}
            </label>
            <input
                onChange={onChange}
                type={type || "text"}
                className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
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
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
