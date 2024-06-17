import React from 'react';
import { contacts } from '../../MOCK_DATA';
import { Done } from '../../components';


const ContactList: React.FC = () => {
    return (
        <>
            <div className="mx-auto md:w-96">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch p-2 rounded-lg shadow-sm">
                    <input
                        type="search"
                        className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-lg border border-gray-300 bg-gray-50 px-3 py-2 text-base font-normal leading-5 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue-500 focus:bg-white text-gray-700 focus:ring-blue-500"
                        placeholder="Search for contact"
                        aria-label="Search for contact"
                        aria-describedby="button-addon1"
                    />
                    <button
                        className="relative z-[2] flex items-center rounded-r-lg bg-blue-600 px-4 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                        type="button"
                        id="button-addon1"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-4xl bg-white shadow-sm rounded-lg p-4">
                    <ul className="divide-y divide-gray-200">
                        {contacts.map((contact) => (
                            <li key={contact.id} className="flex justify-between py-4 px-6 hover:bg-gray-100 transition duration-200 ease-in-out">
                                <span className="text-sm font-medium text-gray-900">{contact.name}</span>
                                <span className="text-sm text-gray-500">{contact.phone}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Done />
        </>
    );
}

export default ContactList;
