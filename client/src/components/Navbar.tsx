import { useState } from 'react'

interface Props {
    state: boolean;
    setState: (state: boolean) => void;
}

const Navbar = ({ state, setState }: Props) => {
    const [showMenuProfile, setShowMenuProfile] = useState(false)
    const [showNotifications, setShowNotifications] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    return (
        <nav className="sm:fixed w-full z-9999 flex flex-row items-center bg-white p-6 border-b border-gray-300 h-20">
            <div className="w-56 flex flex-row items-center">
                <img src="/logo.png" className="w-10 flex-none" />
                <strong className="capitalize ml-1 flex-1">cleopatra</strong>
            </div>
            <div className="w-full flex justify-between md:hidden" >
                <button id="sliderBtn" className="text-right text-gray-900" onClick={() => setState(!state)}>
                    <i className="fad fa-list-ul"></i>
                </button>
                <button id="navbarToggle" className="right-0 mr-6">
                    <i className="fad fa-chevron-double-down"></i>
                </button>
            </div>

            <div id="navbar" className={`md:flex items-center justify-between w-full hidden`}>
                <div className="text-gray-600 border-gray-200">
                    <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i className="fad fa-envelope-open-text"></i></a>
                    <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i className="fad fa-comments-alt"></i></a>
                    <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i className="fad fa-check-circle"></i></a>
                    <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i className="fad fa-calendar-exclamation"></i></a>
                </div>
                <div className="flex flex-row-reverse items-center">
                    <div className="dropdown relative">
                        <button className="menu-btn focus:outline-none focus:shadow-outline flex flex-wrap items-center cursor-pointer" onClick={() => setShowMenuProfile(!showMenuProfile)}>
                            <div className="w-8 h-8 overflow-hidden rounded-full">
                                <img className="w-full h-full object-cover" src="/user.svg" />
                            </div>

                            <div className="ml-2 capitalize flex ">
                                <h1 className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none">moeSaid</h1>
                                <i className="fad fa-chevron-down ml-2 text-xs leading-none"></i>
                            </div>
                        </button>

                        <button className="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>

                        <div className={`text-gray-500 menu ${!showMenuProfile && 'hidden'} rounded bg-white shadow-md absolute z-20 right-0 w-40 py-2`}>
                            <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                                <i className="fad fa-user-edit text-xs mr-1"></i>
                                edit my profile
                            </a>
                            <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                                <i className="fad fa-inbox-in text-xs mr-1"></i>
                                my inbox
                            </a>
                            <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                                <i className="fad fa-badge-check text-xs mr-1"></i>
                                tasks
                            </a>
                            <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                                <i className="fad fa-comment-alt-dots text-xs mr-1"></i>
                                chats
                            </a>
                            <hr />
                            <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                                <i className="fad fa-user-times text-xs mr-1"></i>
                                log out
                            </a>
                        </div>
                    </div>
                    <div className="dropdown relative mr-5">
                        <button onClick={() => setShowNotifications(!showNotifications)} className="cursor-pointer text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                            <i className="fad fa-bells"></i>
                        </button>
                        <button className="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>
                        <div className={`menu ${!showNotifications && 'hidden'} rounded bg-white shadow-md absolute z-20 right-0 w-84 py-2 animated faster`}>

                            <div className="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                                <h1>notifications</h1>
                                <div className="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                                    <strong>5</strong>
                                </div>
                            </div>
                            <hr />
                            <a className="flex flex-row items-center justify-start px-4 py-4 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
                                <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                                    <i className="fad fa-birthday-cake text-sm"></i>
                                </div>

                                <div className="flex-1 flex flex-rowbg-green-100">
                                    <div className="flex-1">
                                        <h1 className="text-sm font-semibold">poll..</h1>
                                        <p className="text-xs text-gray-500">text here also</p>
                                    </div>
                                    <div className="text-right text-xs text-gray-500">
                                        <p>4 min ago</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a className="flex flex-row items-center justify-start px-4 py-4  capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
                                <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                                    <i className="fad fa-user-circle text-sm"></i>
                                </div>

                                <div className="flex-1 flex flex-rowbg-green-100">
                                    <div className="flex-1">
                                        <h1 className="text-sm font-semibold">mohamed..</h1>
                                        <p className="text-xs text-gray-500">text here also</p>
                                    </div>
                                    <div className="text-right text-xs text-gray-500">
                                        <p>78 min ago</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a className="flex flex-row items-center justify-start px-4 py-4  capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
                                <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                                    <i className="fad fa-images text-sm"></i>
                                </div>

                                <div className="flex-1 flex flex-rowbg-green-100">
                                    <div className="flex-1">
                                        <h1 className="text-sm font-semibold">new imag..</h1>
                                        <p className="text-xs text-gray-500">text here also</p>
                                    </div>
                                    <div className="text-right text-xs text-gray-500">
                                        <p>65 min ago</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a className="flex flex-row items-center justify-start px-4 py-4  capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
                                <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                                    <i className="fad fa-alarm-exclamation text-sm"></i>
                                </div>
                                <div className="flex-1 flex flex-rowbg-green-100">
                                    <div className="flex-1">
                                        <h1 className="text-sm font-semibold">time is up..</h1>
                                        <p className="text-xs text-gray-500">text here also</p>
                                    </div>
                                    <div className="text-right text-xs text-gray-500">
                                        <p>1 min ago</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <div className="px-4 py-2 mt-2">
                                <a href="#" className="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500">
                                    view all
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown relative mr-5">
                        <button onClick={() => setShowMessage(!showMessage)} className="cursor-pointer text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                            <i className="fad fa-comments"></i>
                        </button>

                        <button className="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>
                        <div className={`menu ${!showMessage && 'hidden'} bg-white shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster`}>
                            <div className="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                                <h1>messages</h1>
                                <div className="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                                    <strong>3</strong>
                                </div>
                            </div>
                            <hr />
                            <a className="flex flex-row items-center justify-start px-4 py-4 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
                                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                                    <img className="w-full h-full object-cover" src="/user1.jpg" alt="" />
                                </div>

                                <div className="flex-1 flex flex-rowbg-green-100">
                                    <div className="flex-1">
                                        <h1 className="text-sm font-semibold">mohamed said</h1>
                                        <p className="text-xs text-gray-500">yeah i know</p>
                                    </div>
                                    <div className="text-right text-xs text-gray-500">
                                        <p>4 min ago</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a className="flex flex-row items-center justify-start px-4 py-4 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
                                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                                    <img className="w-full h-full object-cover" src="/user2.jpg" alt="" />
                                </div>

                                <div className="flex-1 flex flex-rowbg-green-100">
                                    <div className="flex-1">
                                        <h1 className="text-sm font-semibold">sull goldmen</h1>
                                        <p className="text-xs text-gray-500">for sure</p>
                                    </div>
                                    <div className="text-right text-xs text-gray-500">
                                        <p>1 day ago</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a className="flex flex-row items-center justify-start px-4 py-4 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
                                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                                    <img className="w-full h-full object-cover" src="/user3.jpg" alt="" />
                                </div>

                                <div className="flex-1 flex flex-rowbg-green-100">
                                    <div className="flex-1">
                                        <h1 className="text-sm font-semibold">mick</h1>
                                        <p className="text-xs text-gray-500">is typing ....</p>
                                    </div>
                                    <div className="text-right text-xs text-gray-500">
                                        <p>31 feb</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <div className="px-4 py-2 mt-2">
                                <a href="#" className="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500">
                                    view all
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar