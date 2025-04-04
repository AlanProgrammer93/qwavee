
interface Props {
    state: boolean;
    setState: (state: boolean) => void;
    showModal: boolean;
    setShowModal: (state: boolean) => void;
}

const Sidebar = ({ state, setState, showModal, setShowModal }: Props) => {
    return (
        <div className={`${state ? 'block' : 'hidden'} absolute z-9999 md:top-20 top-0 md:block flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 animated faster`}>
            <div className="flex flex-col">
                <div className={`text-right ${state ? 'block' : 'hidden'} md:hidden mb-4`}>
                    <button id="sideBarHideBtn" onClick={() => setState(!state)}>
                        <i className="fad fa-times-circle"></i>
                    </button>
                </div>

                <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">homes</p>

                <button
                    onClick={() => setShowModal(!showModal)}
                    className="text-sm p-2 mb-3 bg-teal-800 text-white hover:bg-teal-700 cursor-pointer"
                >
                    Nueva Transaccion
                </button>

                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-chart-pie text-xs mr-2"></i>
                    Analytics dashboard
                </a>

                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-shopping-cart text-xs mr-2"></i>
                    ecommerce dashboard
                </a>

                <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">apps</p>

                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-envelope-open-text text-xs mr-2"></i>
                    email
                </a>
                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-comments text-xs mr-2"></i>
                    chat
                </a>
                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-shield-check text-xs mr-2"></i>
                    todo
                </a>
                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-calendar-edit text-xs mr-2"></i>
                    calendar
                </a>
                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-file-invoice-dollar text-xs mr-2"></i>
                    invoice
                </a>
                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-folder-open text-xs mr-2"></i>
                    file manager
                </a>

                <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">UI Elements</p>

                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-text text-xs mr-2"></i>
                    typography
                </a>
                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-whistle text-xs mr-2"></i>
                    alerts
                </a>
                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-cricket text-xs mr-2"></i>
                    buttons
                </a>
                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-box-open text-xs mr-2"></i>
                    Content
                </a>
                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-swatchbook text-xs mr-2"></i>
                    colors
                </a>
                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-atom-alt text-xs mr-2"></i>
                    icons
                </a>
                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-club text-xs mr-2"></i>
                    card
                </a>
                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-cheese-swiss text-xs mr-2"></i>
                    Widgets
                </a>
                <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                    <i className="fad fa-computer-classic text-xs mr-2"></i>
                    Components
                </a>
            </div>
        </div>
    )
}

export default Sidebar